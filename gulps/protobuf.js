//解析 protobuf
module.exports = function (context) {
    var protos = context["protos"];
    return function () {
        //遍历协议文件
        var messageDescMap = {};//消息体
        var enumDescMap = {};//枚举
        var fileNames = context["fs"].readdirSync(`${context["in"]["protosPath"]}`);
        for (var fileName of fileNames) {
            if (!(/.proto$/.test(fileName))) continue;

            var data = context["fs"].readFileSync(`${context["in"]["protosPath"]}${fileName}`, "utf8");
            var lines = data.split(/[\r\n]+/);
            for (var index = 0; index < lines.length; index++) {
                var line = lines[index].trim();
                if (0 == line.length) continue;

                if (/^enum /.test(line)) index = parseEnum(enumDescMap, lines, index, fileName.substring(0, fileName.indexOf(".proto")));
                else if (/^message /.test(line)) index = parseMessage(messageDescMap, lines, index);
            }
        }

        //输出 proto 协议
        var protoStr = `//脚本自动输出，请不要手动修改`;
        for (var enumName in enumDescMap) {
            if ("cmd" === enumName || "c_cmd" === enumName) continue;

            var desc = enumDescMap[enumName];
            protoStr += `\nenum ${desc["name"]} {`;
            for (var prop of desc["props"]) {
                protoStr += `\n\t${prop["name"]} = ${prop["value"]};`;
            }
            protoStr += `\n}`;
        }
        for (var messageName in messageDescMap) {
            var desc = messageDescMap[messageName];
            protoStr += `\nmessage ${desc["name"]} {`;
            for (var prop of desc["props"]) {
                protoStr += `\n\t${prop["name"]} = ${prop["value"]};`;
            }
            protoStr += `\n}`;
        }
        if (!context["fs"].existsSync(protos["protoOutPath"])) context["mkdir"](protos["protoOutPath"]);
        context["fs"].writeFileSync(`${protos["protoOutPath"]}${protos["protoName"]}.proto`, protoStr);
        //输出 ts
        var tsStr = `//脚本自动输出，请不要手动修改`;
        var nsName = protos["namespaceName"];
        if (nsName && 0 == nsName) nsName = null;
        if (nsName) tsStr += `\nnamespace ${nsName} {`;
        //指令
        if ("cmd" in enumDescMap && "c_cmd" in enumDescMap) {
            //合并模块指令+功能指令
            tsStr += `\n${nsName ? "\texport " : ""}enum ${protos["cmdName"]} {`;

            var cmdValueMap = {};
            var cmdNameMap = {};
            var cmdDesc = enumDescMap["cmd"]
            for (var prop of cmdDesc["props"]) { cmdValueMap[prop["name"]] = prop["value"]; }

            var ccmdDesc = enumDescMap["c_cmd"]
            for (var prop of ccmdDesc["props"]) {
                var moduleCMD = parseInt(cmdValueMap[prop["module"]]);
                var functionCMD = parseInt(prop["value"]);
                var cmd = ((moduleCMD & 0x007F) << 9) | (functionCMD & 0x01FF);
                if (prop["note"]) tsStr += `\n${nsName ? "\t" : ""}\t/** ${prop["note"]} */`;
                tsStr += `\n${nsName ? "\t" : ""}\t${prop["name"]} = ${cmd},`;

                cmdNameMap[cmd] = prop["name"];
            }
            tsStr += `\n${nsName ? "\t" : ""}}`;
            //输出指令对应类名配置
            var protosJson = {};
            protosJson[protos["key"]] = cmdNameMap;
            context["fs"].writeFileSync(`${context["in"]["configsPath"]}${protos["configName"]}.json`, JSON.stringify(protosJson));//JSON.stringify(protosJson, null, 4)
        }
        //枚举
        for (var enumName in enumDescMap) {
            if ("cmd" === enumName || "c_cmd" === enumName) continue;

            var desc = enumDescMap[enumName];
            if (desc["note"]) tsStr += `\n${nsName ? "\t" : ""}/** ${desc["note"]} */`;
            tsStr += `\n${nsName ? "\texport " : ""}enum ${enumName} {`;
            for (var prop of desc["props"]) {
                if (prop["note"]) tsStr += `\n${nsName ? "\t" : ""}\t/** ${prop["note"]} */`;
                tsStr += `\n${nsName ? "\t" : ""}\t${prop["name"]} = ${prop["value"]},`;
            }
            tsStr += `\n${nsName ? "\t" : ""}}`;
        }
        //消息体
        for (var messageName in messageDescMap) {
            var desc = messageDescMap[messageName];
            if (desc["note"]) tsStr += `\n${nsName ? "\t" : ""}/** ${desc["note"]} */`;
            tsStr += `\n${nsName ? "\texport " : ""}interface ${messageName} {`;
            for (var prop of desc["props"]) {
                var elements = prop["name"].split(/\s+/);
                if (elements.length < 3) continue;
                var optional = "optional" === elements[0] ? "?" : "";
                var type = getType(elements[1].trim());
                if ("repeated" === elements[0]) type = `Array<${type}>`;
                var propName = elements[2].trim();
                if (propName.indexOf("_") != -1) {
                    var tempName = "";
                    var propList = propName.split("_");
                    for (var i = 0; i < propList.length; i++) {
                        var str = propList[i];
                        if (i > 0)
                            str = str.charAt(0).toLocaleUpperCase() + str.substring(1);

                        tempName += str;
                    }
                    // console.log(tempName);
                    propName = tempName;
                }
                if (prop["note"]) tsStr += `\n${nsName ? "\t" : ""}\t/** ${prop["note"]} */`;
                tsStr += `\n${nsName ? "\t" : ""}\t${propName}${optional}: ${type};`;
            }
            tsStr += `\n${nsName ? "\t" : ""}}`;
        }
        if (nsName) tsStr += `\n}`;
        context["fs"].writeFileSync(`${protos["tsOutPath"]}${protos["tsName"]}.ts`, tsStr);
    }
    function parseEnum(map, lines, index, moduleName) {
        //行上注释
        var note;
        if (index - 1 >= 0) {
            var line = lines[index - 1].trim();
            if (/^\/\//.test(line)) note = line.substring(2).trim();
        }

        var line = lines[index].trim();
        //行内注释
        var noteIndex = line.indexOf("//");
        if (noteIndex > 0) {
            var note2 = line.substring(noteIndex + 2).trim();
            note = note ? `${note}${note2}` : note2;
        }
        if (note && 0 == note.length) note = null;
        //名字
        var name;
        var end = line.indexOf("{");
        if (end >= 0) {
            name = line.substring("enum ".length, end).trim();
        }
        else {
            name = line.substring("enum ".length).trim();
            do {
                index++;
                line = lines[index].trim();
            } while (line.indexOf("{") < 0);
        }
        //属性
        var props = [];
        if (line.indexOf("}") < 0) {
            do {
                index++;
                line = lines[index].trim();
                //注释
                var lineNote;
                var noteIndex = line.indexOf("//");
                if (0 == noteIndex) continue;
                if (noteIndex > 0) {
                    lineNote = line.substring(noteIndex + 2).trim();
                    line = line.substring(0, noteIndex);
                }
                else if (index - 1 >= 0 && /^\/\//.test(lines[index - 1].trim())) lineNote = lines[index - 1].trim().substring(2).trim();
                if (lineNote && 0 == lineNote) lineNote = null;
    
                var equalIndex = line.indexOf("=");
                if (equalIndex > 0) {//枚举行
                    //枚举名
                    var propName = line.substring(0, equalIndex).trim();
                    //枚举值
                    var endIndex = line.indexOf(";");
                    var value = (endIndex < 0 ? line.substring(equalIndex + 1) : line.substring(equalIndex + 1, endIndex)).trim();
    
                    props.push({ "note": lineNote, "name": propName, "value": value, "module": moduleName });
                }
            } while (line.indexOf("}") < 0);
        }

        if (name) {
            if (!(name in map)) map[name] = { "note": note, "name": name, "props": [] };
            var desc = map[name];
            for (var prop of props) { desc["props"].push(prop); }
        }
        return index;
    }
    function parseMessage(map, lines, index) {
        //行上注释
        var note;
        if (index - 1 >= 0) {
            var line = lines[index - 1].trim();
            if (/^\/\//.test(line)) note = line.substring(2).trim();
        }

        var line = lines[index].trim();
        //行内注释
        var noteIndex = line.indexOf("//");
        if (noteIndex > 0) {
            var note2 = line.substring(noteIndex + 2).trim();
            note = note ? `${note}${note2}` : note2;
        }
        if (note && 0 == note.length) note = null;
        //名字
        var name;
        var end = line.indexOf("{");
        if (end >= 0) {
            name = line.substring("message ".length, end).trim();
        }
        else {
            name = line.substring("message ".length).trim();
            do {
                index++;
                line = lines[index].trim();
            } while (line.indexOf("{") < 0);
        }
        //属性
        var props = [];
        if (line.indexOf("}") < 0) {
            do {
                index++;
                line = lines[index].trim();
                //子消息体
                while (/^message /.test(line)) {
                    index = parseMessage(map, lines, index) + 1;
                    line = lines[index].trim();
                }
                //注释
                var lineNote;
                var noteIndex = line.indexOf("//");
                if (0 == noteIndex) continue;
                if (noteIndex > 0) {
                    lineNote = line.substring(noteIndex + 2).trim();
                    line = line.substring(0, noteIndex);
                }
                else if (index - 1 >= 0 && /^\/\//.test(lines[index - 1].trim())) lineNote = lines[index - 1].trim().substring(2).trim();
                if (lineNote && 0 == lineNote) lineNote = null;

                var equalIndex = line.indexOf("=");
                if (equalIndex > 0) {//属性行
                    //属性名
                    var propName = line.substring(0, equalIndex).trim();
                    //枚举值
                    var endIndex = line.indexOf(";");
                    var value = (endIndex < 0 ? line.substring(equalIndex + 1) : line.substring(equalIndex + 1, endIndex)).trim();

                    props.push({ "note": lineNote, "name": propName, "value": value });
                }
            } while (line.indexOf("}") < 0);
        }

        if (name) {
            if (!(name in map)) map[name] = { "note": note, "name": name, "props": [] };
            var desc = map[name];
            for (var prop of props) { desc["props"].push(prop); }
        }
        return index;
    }

    function getType(type) {
        switch (type) {
            case "double":
            case "float":
            case "int32":
            case "int64":
            case "uint32":
            case "uint64":
            case "sint32":
            case "sint64":
            case "fixed32":
            case "fixed64":
            case "sfixed32":
            case "sfixed64":
                return "number";
            case "bool":
                return "boolean";
            case "string":
                return "string";
            case "bytes":
                return "Array<number>";
            default:
                return type;
        }
    }

    // function formatNow() {
    //     var date = new Date();
    //     var yearStr = `${date.getFullYear()}`;
    //     var monthStr = `${date.getMonth() < 9 ? "0" : ""}${date.getMonth() + 1}`;
    //     var dayStr = `${date.getDate() < 10 ? "0" : ""}${date.getDate()}`;
    //     var hourStr = `${date.getHours() < 10 ? "0" : ""}${date.getHours()}`;
    //     var minuteStr = `${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
    //     var secondStr = `${date.getSeconds() < 10 ? "0" : ""}${date.getSeconds()}`;
    //     return `${yearStr}-${monthStr}-${dayStr} ${hourStr}:${minuteStr}:${secondStr}`;
    // }
}
