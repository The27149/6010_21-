//整合多个个配置到一个配置文件
module.exports = function (context) {
    return function () {
        //整合 configs
        var configsJson = {};
        var fileNames = context["fs"].readdirSync(context["in"]["configsPath"]);
        for (var fileName of fileNames) {
            if (context["fs"].statSync(`${context["in"]["configsPath"]}${fileName}`).isFile()) {
                if (/\.json$/.test(fileName)) {
                    var data = context["fs"].readFileSync(`${context["in"]["configsPath"]}${fileName}`, "utf8");
                    var assets = JSON.parse(data.replace(/\/\/[^/\r\n]*[\r\n]+/g, ""));
                    for (var key in assets) { configsJson[key] = assets[key]; }
                }
            }
            else mergeJsons(configsJson, context["in"]["configsPath"], `${fileName}/`);
        }
        if (!context["fs"].existsSync(context["in"]["assetsPath"])) context["mkdir"](context["in"]["assetsPath"]);
        context["fs"].writeFileSync(`${context["in"]["assetsPath"]}configs.json`, JSON.stringify(configsJson));//JSON.stringify(configs, null, 4)
    };

    //合并 json 配置文件
    function mergeJsons(configJson, path, dir) {
        var fileNames = context["fs"].readdirSync(`${path}${dir}`);
        for (var fileName of fileNames) {
            if (context["fs"].statSync(`${path}${dir}${fileName}`).isFile()) {
                if (/\.json$/.test(fileName)) {
                    var data = context["fs"].readFileSync(`${path}${dir}${fileName}`, "utf8");
                    var config = JSON.parse(data.replace(/\/\/[^/\r\n]*[\r\n]+/g, ""));
                    for (var key in config) { configJson[key] = config[key]; }
                }
            }
            else mergeJsons(configJson, path, `${dir}${fileName}/`);
        }
    }
}