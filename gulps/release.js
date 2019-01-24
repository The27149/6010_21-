//release 编译
module.exports = function (context) {
    var release = context["release"];
    return function () {
        //编译
        var tsPipe = context["gulp"]
            .src([`${context["in"]["bxDepsPath"]}**/*.d.ts`, `${context["in"]["depsPath"]}**/*.d.ts`, `${context["in"]["srcPath"]}**/*.ts`])
            .pipe(context["tsc"]({ "target": "es5", "declaration": true, "outFile": `${context["name"]}.js`, "experimentalDecorators": true }));
        return tsPipe.js.pipe(context["uglify"]()).pipe(context["gulp"].dest(`${context["out"]["releasePath"]}${context["out"]["depsPath"]}`))
    };
}