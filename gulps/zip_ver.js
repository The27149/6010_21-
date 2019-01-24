//发布打包zip版本号
module.exports = function (context) {
    return function () {
        var projName = context["name"];
        var projPath = context["out"]["releasePath"];
        var date = new Date();
        var content = `{\n\t"version":"${context['sd'].format(date, 'YYYY.MM.DD.HH.mm.ss')}",\n\t"index":"./${projName}/index.html"\n}`;
        return context['fs'].writeFileSync(`${projPath}/version.json`, content);
    }
}