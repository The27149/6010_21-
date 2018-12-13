//处理 index.html 文件依赖的 js 文件, config.json 文件
module.exports = function (context, outPath, config) {
    return function () {
        context["copy"](context["in"]["webPath"], outPath);

        if(outPath == context["out"]["releasePath"])
        {
            var indexHtml = context["fs"].readFileSync(`${outPath}/index.html`, 'utf-8');
            indexHtml = indexHtml.replace(/..\/..\/poker_common/g, `../poker_common`);
            context["fs"].writeFileSync(`${outPath}/index.html`, indexHtml);
        }

        var scriptsNodes = "<!--prescripts start-->";
        var scripts = { "assets": [], "size": 0 };
        //公共库 依赖
        // var path = context["in"]["bxDepsPath"];
        // var fileNames = context["fs"].readdirSync(path);
        // for (var fileName of fileNames) {
        //     if (context["fs"].statSync(`${path}${fileName}`).isFile()) {
        //         if (/\.js$/.test(`${path}${fileName}`)) {
        //             var data = context["fs"].readFileSync(`${path}${fileName}`);
        //             var md5 = context["md5"](data);
        //             if (data.length > 0) scriptsNodes += `\n\t<script type="text/javascript" src="${config["bxDepsPath"]}${fileName}?v=${md5}"></script>`;

        //             scripts[fileName] = {
        //                 "url": `${config["bxDepsPath"]}${fileName}`,
        //                 "size": context["fs"].statSync(`${path}${fileName}`).size,
        //                 "md5": md5
        //             };
        //             scripts["assets"].push(fileName);
        //             scripts["size"] += scripts[fileName]["size"];
        //         }
        //     }
        //     else {
        //         var nodes = getScriptsNodes(config["bxDepsPath"], path, `${fileName}/`, scripts);
        //         if (nodes.length > 0) scriptsNodes += `\n${nodes}`;
        //     }
        // }
        //当前依赖
        var path = `${outPath}${context["out"]["depsPath"]}`;
        var fileNames = context["fs"].readdirSync(path);
        for (var fileName of fileNames) {
            if (context["fs"].statSync(`${path}${fileName}`).isFile()) {
                if (/\.js$/.test(`${path}${fileName}`)) {
                    var data = context["fs"].readFileSync(`${path}${fileName}`);
                    var md5 = context["md5"](data);
                    if (data.length > 0) scriptsNodes += `\n\t<script type="text/javascript" src="${context["out"]["depsPath"]}${fileName}?v=${md5}"></script>`;

                    scripts[fileName] = {
                        "url": `${context["out"]["depsPath"]}${fileName}`,
                        "size": context["fs"].statSync(`${path}${fileName}`).size,
                        "md5": md5
                    };
                    scripts["assets"].push(fileName);
                    scripts["size"] += scripts[fileName]["size"];
                }
            }
            else {
                var nodes = getScriptsNodes(context["out"]["depsPath"], path, `${fileName}/`, scripts);
                if (nodes.length > 0) scriptsNodes += `\n${nodes}`;
            }
        }
        scriptsNodes += "\n\t<!--prescripts end-->";

        // let indexData = context["fs"].readFileSync(`${outPath}index.html`, "utf8");
        // indexData = indexData.replace(/<!--prescripts start-->([.\s\S]*)<!--prescripts end-->/g, scriptsNodes);
        // context["fs"].writeFileSync(`${outPath}index.html`, indexData);

        var configJson = { "commonPath": config["bxPath"], "scripts": scripts };
        context["fs"].writeFileSync(`${outPath}config.json`, JSON.stringify(configJson));//JSON.stringify(assets, null, 4)
    };

    function getScriptsNodes(relatedPath, path, dir, scripts) {
        var scriptsNodes = "";
        var fileNames = context["fs"].readdirSync(`${path}${dir}`);
        for (var fileName of fileNames) {
            if (context["fs"].statSync(`${path}${dir}${fileName}`).isFile()) {
                if (/\.js$/.test(fileName)) {
                    var data = context["fs"].readFileSync(`${path}${dir}${fileName}`);
                    var md5 = context["md5"](data);
                    if (data.length > 0)
                        scriptsNodes += `${scriptsNodes.length > 0 ? "\n" : ""}\t<script type="text/javascript" src="${relatedPath}${dir}${fileName}?v=${md5}"></script>`

                    scripts[fileName] = {
                        "url": `${relatedPath}${dir}${fileName}`,
                        "size": context["fs"].statSync(`${path}${dir}${fileName}`).size,
                        "md5": md5
                    };
                    scripts["assets"].push(fileName);
                    scripts["size"] += scripts[fileName]["size"];
                }
            }
            else {
                var nodes = getScriptsNodes(relatedPath, path, `${dir}${fileName}/`, scripts);
                if (nodes.length > 0) scriptsNodes += `${scriptsNodes.length > 0 ? "\n\t" : ""}${nodes}`;
            }
        }
        return scriptsNodes;
    }
}