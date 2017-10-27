// 引入文件系统
var fs = require("fs");

/**
 * 这个函数的callback中含有两个参数，
 * 一个是err
 * 另一个是存放 所有文件夹名字 的array。
 * @param callback
 */
exports.getAllAlbums = function(callback){
    // readdir 读取一个目录的内容
    fs.readdir("./uploads",function(err,files){
        if(err){
            callback("没有找到uploads文件",null);
        }
        // 遍历的文件数组
        var allAlbums = [];
        // 将异步转同步，已经提供了 同步方法
        (function iterator(i){
            if(i == files.length){
                //遍历结束,控制台打印数据
                console.log(allAlbums);
                // 返回数据
                callback("success",allAlbums);
                return;
            }
            // stat 检查一个文件是否存在
            fs.stat("./uploads/" + files[i],function(err,stats){
                if(err){
                    callback("找不到文件" + files[i] , null);
                }
                if(stats.isDirectory()){
                    allAlbums.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    });
}

//通过文件名，得到所有图片
exports.getAllImagesByAlbumName = function(albumName,callback){
    fs.readdir("./uploads/" + albumName,function(err,files){
        if(err){
            callback("没有找到uploads文件",null);
            return;
        }
        var allImages = [];
        (function iterator(i){
            if(i == files.length){
                //遍历结束
                console.log(allImages);
                callback(null,allImages);
                return;
            }
            fs.stat("./uploads/" + albumName + "/" + files[i],function(err,stats){
                if(err){
                    callback("找不到文件" + files[i] , null);
                    return;
                }
                if(stats.isFile()){
                    allImages.push(files[i]);
                }
                iterator(i + 1);
            });
        })(0);
    });
}
