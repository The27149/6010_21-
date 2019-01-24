//检测模块，并输出为配置文件
module.exports = function (context) {
    if(!context["fs"].existsSync(`${context["in"]["modulesPath"]}`)) return;
    var modules = context["modules"];
    return function () {
        var moduleJson = {};
        moduleJson["modules+"] = [];
        var fileNames = context["fs"].readdirSync(context["in"]["modulesPath"]);
        for (var fileName of fileNames) {
            if (context["fs"].statSync(`${context["in"]["modulesPath"]}${fileName}`).isFile()) {
                var classFullName = getClassFullName(context["fs"].readFileSync(`${context["in"]["modulesPath"]}${fileName}`, "utf8"));
                if (classFullName && moduleJson["modules+"].indexOf(classFullName) < 0) moduleJson["modules+"].push(classFullName);
            }
            else searchModule(moduleJson["modules+"], `${context["in"]["modulesPath"]}`, `${fileName}/`);
        }

        context["fs"].writeFileSync(`${context["in"]["configsPath"]}${modules["name"]}.json`, JSON.stringify(moduleJson));//JSON.stringify(assets, null, 4)
    };

    //获取模块类名
    function getClassFullName(data) {
        var baseClassName;
        for (var baseClassNameLoop of modules["baseClassNames"]) {
            if (data.indexOf(` extends ${baseClassNameLoop}`) > 0) {
                baseClassName = baseClassNameLoop;
                break;
            }
        }
        if (baseClassName) {
            var index1 = data.indexOf("namespace ");
            var index2 = data.indexOf("{");
            var namespace = null;
            if (index1 >= 0 && index2 > index1) namespace = data.substring(index1 + "namespace ".length, index2).trim();

            index2 = data.indexOf(` extends ${baseClassName}`);

            index3 = data.indexOf("\r", index2);
            if (index3 >= 0) {
                if (data.substring(index2, index3).indexOf(modules["ignoreModuleFlag"]) >= 0) return null;
            }

            index1 = data.lastIndexOf("\r", index2);
            if (index1 < 0) index1 = data.lastIndexOf("\n", index2);
            if (index1 < 0) index1 = 0;
            index1 = data.indexOf("export class ", index1);
            if (index1 < 0) return null;

            var className = data.substring(index1 + "export class ".length, index2).trim();
            return (namespace ? `${namespace}.` : "") + className;
        }
        return null;
    }
    //查找模块类
    function searchModule(modules, path, dir) {
        var fileNames = context["fs"].readdirSync(`${path}${dir}/`);
        for (var fileName of fileNames) {
            if (context["fs"].statSync(`${path}${dir}${fileName}`).isFile()) {
                var classFullName = getClassFullName(context["fs"].readFileSync(`${path}${dir}${fileName}`, "utf8"));
                if (classFullName && modules.indexOf(classFullName) < 0) modules.push(classFullName);
            }
            else searchModule(modules, `${path}`, `${dir}${fileName}/`);
        }
    }
}