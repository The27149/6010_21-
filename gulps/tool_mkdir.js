//创建目录
module.exports = function (fs) {
    return function (path) {
        var dirNames = path.split(/[\/\\]+/g);
        var path = "";
        for (var dirName of dirNames) {
            path += `${dirName}/`;
            if (fs.existsSync(path)) continue;
            fs.mkdirSync(path);
        }
    }
}