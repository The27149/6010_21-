//发布打包zip
module.exports = function (context) {
    return function () {
        var projName = context["name"];
        var projPath = context["out"]["releasePath"];
        return context['gulp'].src(`${projPath}/**`)
            .pipe(context['zip'](`${projName}.zip`))
            .pipe(context['gulp'].dest(projPath));
    }
}