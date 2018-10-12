//整合多语言配置
module.exports = function (context) {
    return function () {
        // if (!context["fs"].existsSync(context["in"]["languagesPath"])) return;
        // var outPath = `${context["in"]["assetsPath"]}`;
        // //整合 languages
        // var fileNames = context["fs"].readdirSync(context["in"]["languagesPath"]);
        // for (var fileName of fileNames) {
        //     if (context["fs"].statSync(`${context["in"]["languagesPath"]}${fileName}`).isFile()) continue;

        //     var languagesJson = {};
        //     mergeJsons(languagesJson, context["in"]["languagesPath"], `${fileName}/`);
        //     if (!context["fs"].existsSync(`${outPath}${fileName}/`)) context["mkdir"](`${outPath}${fileName}/`);
        //     context["fs"].writeFileSync(`${outPath}${fileName}/${fileName}.json`, JSON.stringify(languagesJson));//JSON.stringify(languages, null, 4)
        // }
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