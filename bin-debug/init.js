(function () {
    var userAgent = navigator.userAgent.toLowerCase()
    var isApp = userAgent.indexOf("browser_type/android_app") != -1;

    if (!isApp) {
        var _tipIndex = 0;
        var _arrTips = ["Initialization", "Initialization .", "Initialization . .", "Initialization . . ."];
        var _div = document.createElement("div");
        _div.setAttribute("id", "preloadTip");
        _div.setAttribute("style", 'position:absolute; font-family:"微软雅黑"; text-align:left; font-size:24px; color:#ffffff; left:10px; top:10px; width:200px; height:44px; z-index:1');
        document.body.appendChild(_div);

        var _timerID = window.setInterval(onTimerHandle, 200);
        function onTimerHandle() {
            _tipIndex = (_tipIndex % _arrTips.length);
            _div.innerText = _arrTips[_tipIndex++];
        }
    }
    
    /**动态载入提示的销毁函数，请自行调用 */
    window.preloadTipDestroy = function () {
        if (isApp) return;
        if (_timerID && _div) {
            window.clearInterval(_timerID);
            document.body.removeChild(_div);
        }

        _timerID = undefined;
        _div = undefined;
        _arrTips = undefined;
        _tipIndex = undefined;
    }

    var loadCommonConfig = false;
    var loader = new XMLHttpRequest();
    loader.onload = function () {
        if (loader.status === 200 || loader.status === 204 || loader.status === 0) {
            try {
                var config = JSON.parse(loader.responseText.replace(/\/\/[^/\r\n]*[\r\n]+/g, ""));
                configLoaded(config);
            } catch (e) { configError(); }
        }
        else configError();
    };
    loader.responseType = "text";
    loader.open("get", "../../poker_common/config.json?v=" + (new Date()).getTime());
    loader.send();

    //config.json 加载失败
    var configError = function () { console.error("can't find config.json!"); }
    //config.json 加载成功
    var loadedCount = 0;
    var configLoaded = function (config) {
        if (!loadCommonConfig) {
            loadCommonConfig = true;
            window["bxConfig"] = config;
            for (jsName in window["bxConfig"]['scripts']) 
                window["bxConfig"]['scripts'][jsName]['url'] = "../../poker_common/" + window["bxConfig"]['scripts'][jsName]['url'];

            loader.open("get", "config.json?v=" + (new Date()).getTime());
            loader.send();
        }
        else {
            window["bxConfig"]['commonPath'] = config['commonPath'];
            for (item in config['scripts']) {
                // console.log(item);
                switch (item) {
                    case "assets":
                        window["bxConfig"]['scripts']['assets'] = window["bxConfig"]['scripts']['assets'].concat(config['scripts']['assets']);
                        break;
                    case "size":
                        window["bxConfig"]['scripts']['size'] += config['scripts']['size'];
                        break;
                    default:
                        window["bxConfig"]['scripts'][item] = config['scripts'][item];
                        break;
                }
            }
            if ("scripts" in window["bxConfig"]) {
                var scripts = window["bxConfig"]["scripts"];
                if ("assets" in scripts && scripts["assets"].length > 0) loadScript();
                else setup();
            }
            else setup();
        }
    };
    var loadScript = function () {
        var scripts = window["bxConfig"]["scripts"];
        var script = scripts[scripts["assets"][loadedCount]];
        var scriptNode = document.createElement("script");
        scriptNode.src = script["url"] + "?v=" + script["md5"];
        scriptNode.id = "script" + loadedCount;
        scriptNode.onload = scriptLoaded;
        document.body.appendChild(scriptNode);
    };
    var scriptLoaded = function () {
        var count = window["bxConfig"]["scripts"]["assets"].length;
        loadedCount++;
        if (loadedCount < count) loadScript();
        else {
            //清理
            var thisNode = document.getElementById("bxInit");
            if (thisNode) thisNode.parentElement.removeChild(thisNode);
            for (var index = 0; index < count; index++) {
                var scriptNode = document.getElementById("script" + index);
                scriptNode.parentElement.removeChild(scriptNode);
            }
            //启动
            setup();
        }
    };
    var hasSetup = false;
    var setup = function () {
        if (hasSetup) return;
        hasSetup = true;

        if ("Main" in window) new window["Main"]();
        else console.log("can't find class Main");


        loader.onload = null;
        loader = undefined;
    };
})();