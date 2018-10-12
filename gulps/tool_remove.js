//递归删除
module.exports = function (fs) {
    return function (dir) {
        var reg = /[\/\\]$/;
        if (!reg.test(dir)) dir += "/";

        if (!fs.existsSync(dir)) return;
        remove(dir, "");
    }
    function remove(from, dir) {
        var files = fs.readdirSync(`${from}${dir}`);
        for (var fileIndex = 0; fileIndex < files.length; fileIndex++) {
            var fileName = files[fileIndex];
            if (fs.statSync(`${from}${dir}${fileName}`).isFile()) fs.unlinkSync(`${from}${dir}${fileName}`);
            else remove(from, `${dir}/${fileName}/`);
        }
        fs.rmdirSync(`${from}${dir}`);
    }
}