//debug 编译
module.exports = function (context) {
    var debug = context["debug"];
    return function () {
        //编译
        var tsPipe = context["gulp"]
            .src([`${context["in"]["bxDepsPath"]}**/*.d.ts`, `${context["in"]["depsPath"]}**/*.d.ts`, `${context["in"]["srcPath"]}**/*.ts`])
            .pipe(context["sourcemaps"].init())
            .pipe(context["tsc"]({ "target": "es5", "declaration": true, "outFile": `${context["name"]}.js`, "experimentalDecorators": true }));
        //js+sourcemap
        return context["mergeStream"](
            tsPipe.js.pipe(context["gulp"].dest(`${context["out"]["debugPath"]}${context["out"]["depsPath"]}`)),
            tsPipe.js.pipe(context["sourcemaps"].write("./", { includeContent: true, sourceRoot: debug["sourcemapPath"] }))
                .pipe(context["gulp"].dest(`${context["out"]["debugPath"]}${context["out"]["depsPath"]}`))
        );
    };
}