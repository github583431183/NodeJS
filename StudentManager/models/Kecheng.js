var mongoose = require('mongoose');

//schema
var kechengSchema = new mongoose.Schema({
    "kid"  : Number,
    "name" : String,
    "students" : [Number]       //这个数组存放的是学生的sid
});
//索引
kechengSchema.index({ "kid": 1});

kechengSchema.statics.tianjiaxuesheng = function(kidarray,sid,callback){
    for(var i = 0 ; i < kidarray.length ; i++){
        Kecheng.update({"kid":kidarray[i]},{$push :{"students":sid}},function(){
            console.log("课程添加报名学生成功");
            callback();
        })
    }
}

//model
var Kecheng = mongoose.model("Kecheng",kechengSchema);

/*
Kecheng.create({"kid":1,"name":"1"});
Kecheng.create({"kid":2,"name":"2"});
Kecheng.create({"kid":3,"name":"3"});
Kecheng.create({"kid":4,"name":"4"});
*/

module.exports = Kecheng;