//将资源拷贝到指定目录，并输出资源配置文件
module.exports = function (context, outPath) {
    return function () {
        if (context["fs"].existsSync(`${outPath}${context["out"]["assetsPath"]}`)) context["remove"](`${outPath}${context["out"]["assetsPath"]}`);
        context["mkdir"](`${outPath}${context["out"]["assetsPath"]}`);
        //拷贝资源
        var fileNames = context["fs"].readdirSync(context["in"]["assetsPath"]);
        for (var fileName of fileNames) {
            if (context["fs"].statSync(`${context["in"]["assetsPath"]}${fileName}`).isFile()) {
                var data = context["fs"].readFileSync(`${context["in"]["assetsPath"]}${fileName}`);
                context["fs"].writeFileSync(`${outPath}${context["out"]["assetsPath"]}${fileName}`, data);
            }
            else context["copy"](`${context["in"]["assetsPath"]}${fileName}/`, `${outPath}${context["out"]["assetsPath"]}${fileName}/`);
        }
        //输出资源配置文件
        var assetsJson = { "packages": [], "size": 0 };
        var fileNames = context["fs"].readdirSync(`${outPath}${context["out"]["assetsPath"]}`);
        for (var fileName of fileNames) {
            if (context["fs"].statSync(`${outPath}${context["out"]["assetsPath"]}${fileName}`).isFile()) continue;

            var package = { "assets": [], "size": 0 };
            getAssetsPackage(package, `${outPath}${context["out"]["assetsPath"]}`, `${fileName}/`);
            if (package.size > 0) {
                assetsJson["packages"].push(fileName);
                assetsJson["size"] += package["size"];
                assetsJson[fileName] = package;
            }
        }
        context["fs"].writeFileSync(`${outPath}${context["out"]["assetsPath"]}assets.json`, JSON.stringify(assetsJson));//JSON.stringify(assets, null, 4)
    };

    //获取资源配置
    function getAssetsPackage(configJson, path, dir) {
        var fileNames = context["fs"].readdirSync(`${path}${dir}`);
        for (var fileName of fileNames) {
            if (context["fs"].statSync(`${path}${dir}${fileName}`).isFile()) {
                if (fileName in configJson) console.log(`${configJson[fileName]["url"]} 与 ${path}${dir}${fileName} 资源名重复`);
                else configJson["assets"].push(fileName);

                var data = context["fs"].readFileSync(`${path}${dir}${fileName}`);
                configJson[fileName] = {
                    "url": `${context["out"]["assetsPath"]}${dir}${fileName}`,
                    "size": context["fs"].statSync(`${path}${dir}${fileName}`).size,
                    "md5": context["md5"](data)
                };
                configJson["size"] += configJson[fileName]["size"];
            }
            else getAssetsPackage(configJson, path, `${dir}${fileName}/`);
        }
    }
}