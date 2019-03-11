module.exports = function (context) {
    return function(){
        let fs=context["fs"];
        let root_path="assets/"
        let renames=["hall",'room_dt','menu'];
        let inpath;
        for(var path of renames){
            inpath=root_path+path;
            var fileNames=fs.readdirSync(inpath);
            for(var fileName of fileNames){
                if(fs.statSync(`${inpath}/${fileName}`).isFile()){
                   
                }else{
                    renamefile(fs,`${inpath}/${fileName}`)
                }
            }
        }       
    };
    function renamefile (fs,path){
        var fileNames=fs.readdirSync(path);
        for(var fileName of fileNames){
            if(fs.statSync(`${path}/${fileName}`).isFile()){
                if(fileName.indexOf("_zh")<0&&path.indexOf("zh_cn")>=0){
                    let index=fileName.indexOf(".");
                    let name1 = fileName.substring(0, index);
                    let name2 = fileName.substring(index + 1);
                    fs.renameSync(`${path}/${fileName}`,`${path}/${name1}_zh.${name2}`)
                } 
                if(fileName.indexOf("_en")<0&&path.indexOf("en_us")>=0){
                    let index=fileName.indexOf(".");
                    let name1 = fileName.substring(0, index);
                    let name2 = fileName.substring(index + 1);
                    fs.renameSync(`${path}/${fileName}`,`${path}/${name1}_en.${name2}`)
                }               
            }else{
                renamefile(fs,path+"/"+fileName)
            }
        }
    }

}