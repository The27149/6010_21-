var gulp = require("gulp");
var tsc = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var mergeStream = require("merge-stream");
var fs = require("fs");
var prog = require('child_process');
var path = require('path');
var zip = require('gulp-zip');
var sd = require("silly-datetime");

var md5 = require("./gulps/tool_md5.min.js");
var mkdir = require("./gulps/tool_mkdir.js")(fs);
var copy = require("./gulps/tool_copy.js")(fs, mkdir);
var remove = require("./gulps/tool_remove.js")(fs);
var context = {
    "gulp": gulp,
    "tsc": tsc,
    "sourcemaps": sourcemaps,
    "uglify": uglify,
    "rename": rename,
    "concat": concat,
    "mergeStream": mergeStream,
    "fs": fs,
    "prog": prog,
    "path": path,
    "zip": zip,
    "sd": sd,
    "md5": md5,
    "mkdir": mkdir,
    "copy": copy,
    "remove": remove,

    "name": "6010",
    "in": {
        "bxDepsPath": "../poker_common/deps/",
        "depsPath": "deps/",
        "srcPath": "src/",
        "assetsPath": "assets/",
        "modulesPath": "src/modules/",
        "constsPath": "consts/",
        "protosPath": "protos/",
        "configsPath": "configs/",
        "languagesPath": "languages/",
        "webPath": "web/"
    },
    "out": {
        "debugPath": "bin-debug/",
        "releasePath": "../release/6010/",
        "depsPath": "deps/",
        "assetsPath": "assets/"
    },
    "consts": {
        "name": "GConst",
        "namespaceName": "point21",
        "outPath": "src/common/"
    },
    "protos": {
        "protoOutPath": "assets/preload/",
        "protoName": "protos",
        "tsOutPath": "src/common/",
        "namespaceName": "protos",
        "tsName": "Protos",
        "cmdName": "CCMD",
        "configName": "protos",
        "key": "protos"
    },
    "modules": {
        "baseClassNames": ["Framework", "bx.Framework", "xx.Framework", "bx.MNetBase", "MNetBase"],
        "ignoreModuleFlag": "// ignore",
        "name": "modules"
    },
    "debug": {
        "bxDepsPath": "../../poker_common/deps/",
        "bxPath": "../../poker_common/",
        "sourcemapPath": "../../"
    },
    "release": {
        "bxDepsPath": "../poker_common/deps/",
        "bxPath": "../poker_common/"
    },
    "publish": {
        "toolPath": "../ChessLibs/publish/tool",
    }
};

//-----------------------------------------------------------------------------
//调试
//-----------------------------------------------------------------------------
//常量
gulp.task("consts", require("./gulps/consts.js")(context));
//protobuf协议
gulp.task("protos", require("./gulps/protobuf.js")(context));
//配置
gulp.task("modules", require("./gulps/modules.js")(context));
gulp.task("configs", ["modules"], require("./gulps/configs.js")(context));
//多语言
gulp.task("languages", require("./gulps/languages.js")(context));

//清理 debug
gulp.task("debug_clear", require("./gulps/clear.js")(context, context["out"]["debugPath"]));
//debug 资源
gulp.task("debug_assets", ["consts", "protos", "configs", "languages", "debug_clear"], require("./gulps/assets.js")(context, context["out"]["debugPath"]));

//debug 依赖
gulp.task("debug_deps", ["debug_clear"], require("./gulps/deps.js")(context, context["out"]["debugPath"]));
//debug 编译
gulp.task("debug_compile", ["debug_deps"], require("./gulps/debug.js")(context));
//debug index.html 文件
gulp.task("debug_web", ["debug_compile"], require("./gulps/web.js")(context, context["out"]["debugPath"], context["debug"]));

//debug
gulp.task("debug", ["debug_assets", "debug_web"], function () { });



//清理 release
gulp.task("release_clear", require("./gulps/clear.js")(context, context["out"]["releasePath"]));
//release 资源
gulp.task("release_assets", ["consts", "protos", "configs", "languages", "release_clear"], require("./gulps/assets.js")(context, context["out"]["releasePath"]));

//release 依赖
gulp.task("release_deps", ["release_clear"], require("./gulps/deps.js")(context, context["out"]["releasePath"]));
//release 编译
gulp.task("release_compile", ["release_deps"], require("./gulps/release.js")(context));
//release index.html 文件
gulp.task("release_web", ["release_compile"], require("./gulps/web.js")(context, context["out"]["releasePath"], context["release"]));
//release
gulp.task("release", ["release_assets", "release_web"], function () { });

//更新游戏版本号
gulp.task("update_ver", require("./gulps/update_ver.js")(context));

//publish 打zip包
gulp.task("pub_zip", ["release"], require("./gulps/zip.js")(context));
//publish 打zip包版本号
gulp.task("zip_ver", ["pub_zip"], require("./gulps/zip_ver.js")(context));
//发布dev、sit
gulp.task("publish", ["update_ver", "zip_ver"], require("./gulps/publish.js")(context));

//生成 ts 文件
gulp.task("ts", ["consts", "protos"], function () { });
