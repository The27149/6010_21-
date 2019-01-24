//更新游戏版本号
module.exports = function (context) {
    return function () {

        var data = context["fs"].readFileSync(`${context["in"]["configsPath"]}/common.json`, "utf8");
        var f = data.match(/\"game_version\"([.\s\S]*)游戏版本号/);
        var gameVersion = 1;
        var version;
        // console.log(f[0]);
        if (f) {
            version = f[0];
            version = version.replace(/game_version/, "");
            version = version.replace(/游戏版本号/, "");
            version = version.replace(/:/g, "");
            version = version.replace(/,/g, "");
            version = version.replace(/\//g, "");
            version = version.replace(/\"/g, "");
            version = version.replace(/\s+/g, "");
            // version = version.replace(/\r\n/, "");
            // version = version.replace(/\t/g, "");
            // console.log(version);

            gameVersion = parseInt(version) + 1;
            if(gameVersion % 100 == 0)
                gameVersion++;
            data = data.replace(/\"game_version\"([.\s\S]*)游戏版本号/, `"game_version": ${gameVersion}, //游戏版本号`);
        }
        else{
            data = data.replace(/\"game_version\"([.\s\S]*)游戏版本号/, `"game_version": ${gameVersion}, //游戏版本号`);
        }
        // console.log(data);
        context["fs"].writeFileSync(`${context["in"]["configsPath"]}/common.json`, data);
    };
}