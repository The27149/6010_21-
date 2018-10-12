//发布
module.exports = function (context) {
    
        return function () {
            // console.log(process.argv);
            var devIdx = process.argv.indexOf("--dev");
            var sitIdx = process.argv.indexOf("--sit");
            if (devIdx < 0 && sitIdx < 0) {
                console.log("未设置发布环境参数");
                return;
            }
    
            var projName = context["name"];
            var pubPath = `${context["publish"]["toolPath"]}`;
            var winscpPath = `${context["publish"]["toolPath"]}/WinSCP`;
            var projPath = context['out']['releasePath'];
    
    
            winscpPath = context["path"].resolve(winscpPath);
            pubPath = context["path"].resolve(pubPath);
            projPath = context["path"].resolve(projPath);
    
            //发布dev
            if (devIdx >= 0)
                context['prog'].execSync(`call ${pubPath}/upload_dev.bat ${projName} ${winscpPath} ${projPath}`);
            //发布sit
            if (sitIdx >= 0)
                context['prog'].execSync(`call ${pubPath}/upload_sit.bat ${projName} ${winscpPath} ${projPath}`);
    
            context["remove"](`${projPath}`);
        };
    }