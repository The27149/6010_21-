//将依赖的 js 拷贝到指定目录
module.exports = function (context, outPath) {
    return function () {
        if (context["fs"].existsSync(`${outPath}${context["out"]["depsPath"]}`)) context["remove"](`${outPath}${context["out"]["depsPath"]}`);
        if (!context["fs"].existsSync(context["in"]["depsPath"])) return;
        context["mkdir"](`${outPath}${context["out"]["depsPath"]}`);

        context["copy"](context["in"]["depsPath"], `${outPath}${context["out"]["depsPath"]}`, ".js");
    };
}