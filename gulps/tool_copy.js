//递归拷贝
module.exports = function (fs, mkdir) {
    //extensions:.ts,.js,...
    return function (fromDir, toDir, ...extensions) {
        var reg = /[\/\\]$/;
        if (!reg.test(fromDir)) fromDir += "/";
        if (!reg.test(toDir)) toDir += "/";

        copy(fromDir, toDir, extensions, "");
    }
    function copy(from, to, extensions, dir) {
        var files = fs.readdirSync(`${from}${dir}`);
        for (var fileIndex = 0; fileIndex < files.length; fileIndex++) {
            var fileName = files[fileIndex];
            if (fs.statSync(`${from}${dir}${fileName}`).isFile()) {
                var dotIndex = fileName.lastIndexOf(".");
                var extension = dotIndex < 0 ? "" : fileName.substring(dotIndex);
                //不是指定的文件类型
                if (!hasExtension(extension, extensions)) continue;
                //拷贝文件
                var data = fs.readFileSync(`${from}${dir}${fileName}`);
                if (!fs.existsSync(`${to}${dir}`)) mkdir(`${to}${dir}`);
                fs.writeFileSync(`${to}${dir}${fileName}`, data);
            }
            else copy(from, to, extensions, `${dir}${fileName}/`);
        }
    }
    function hasExtension(extension, extensions) {
        if (0 == extensions.length) return true;

        for (let extensionLoop of extensions) {
            var index = extensionLoop.lastIndexOf(extension);
            if (index >= 0 && index == extensionLoop.length - extension.length) return true;
        }
        return false;
    }
}