//生成常量类
module.exports = function (context) {
    var consts = context["consts"];
    return function () {
        if(!context["fs"].existsSync(`${context["in"]["constsPath"]}`)) return;
        var hasNamespace = consts["namespaceName"] && consts["namespaceName"].length > 0;
        var indent = hasNamespace ? "\t" : "";
        //处理常量配置文件
        var constsTs = "";
        if (hasNamespace) constsTs += `namespace ${consts["namespaceName"]} {\n`;
        constsTs += `${indent}/**\n`;
        constsTs += `${indent} * 常量类（该文件由工具自动生成，请不要手动修改）\n`;
        constsTs += `${indent} * @author Zane\n`;
        constsTs += `${indent} */\n`;
        constsTs += `${indent}${hasNamespace ? "export " : ""}class ${consts["name"]} {\n`;

        //遍历通知配置文件
        if(context["fs"].existsSync(`${context["in"]["constsPath"]}`))
        {
            var files = context["fs"].readdirSync(`${context["in"]["constsPath"]}`);
            for (var fileIndex = 0; fileIndex < files.length; fileIndex++) {
                var fileName = files[fileIndex];
                if (!context["fs"].statSync(`${context["in"]["constsPath"]}${fileName}`).isFile()) continue;
                constsTs += `${indent}\t//-----------------------------------------------------------------------------\n`;
                constsTs += `${indent}\t//${fileName}\n`;
                constsTs += `${indent}\t//-----------------------------------------------------------------------------\n`;
    
                var data = context["fs"].readFileSync(`${context["in"]["constsPath"]}${fileName}`, "utf8");
                var lines = data.split(/[\r\n]+/g);
                for (var lineIndex = 0; lineIndex < lines.length; lineIndex++) {
                    var line = lines[lineIndex].trim();
                    //注释
                    if (/^\/\//.test(line)) constsTs += `${indent}\t/** ${line.replace("//", "").trim()} */\n`;
                    //通知
                    else if (/^[$_A-Za-z0-9]+$/.test(line)) constsTs += `${indent}\tpublic static ${line}: string = "${line}";\n`;
                }
            }
        }

        constsTs += `${indent}}\n`;
        if (hasNamespace) constsTs += `}`;
        if (!context["fs"].existsSync(consts["outPath"])) context["mkdir"](consts["outPath"]);
        context["fs"].writeFileSync(`${consts["outPath"]}${consts["name"]}.ts`, constsTs);
    }

    function formatNow() {
        var date = new Date();
        var yearStr = `${date.getFullYear()}`;
        var monthStr = `${date.getMonth() < 9 ? "0" : ""}${date.getMonth() + 1}`;
        var dayStr = `${date.getDate() < 10 ? "0" : ""}${date.getDate()}`;
        var hourStr = `${date.getHours() < 10 ? "0" : ""}${date.getHours()}`;
        var minuteStr = `${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()}`;
        var secondStr = `${date.getSeconds() < 10 ? "0" : ""}${date.getSeconds()}`;
        return `${yearStr}-${monthStr}-${dayStr} ${hourStr}:${minuteStr}:${secondStr}`;
    }
}