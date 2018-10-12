//清理指定目录
module.exports = function (context, path) {
    return function () {
        if (context["fs"].existsSync(path)) context["remove"](path);
        context["mkdir"](path);
    }
}