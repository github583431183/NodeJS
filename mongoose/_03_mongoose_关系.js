var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongooses');

var db = mongoose.connection;
db.once('open', function (callback) {
    console.log("数据库成功打开");
});

//博客的结构
var animalSchema = new mongoose.Schema({
    "name" : String,
    "type" : String
});

animalSchema.methods.zhaotonglei = function(callback){
    this.model('Animal').find({"type":this.type},callback);
}

var Animal = mongoose.model('Animal', animalSchema);

/*Animal.create({"name":"汤姆","type":"猫"});
Animal.create({"name":"咪咪","type":"猫"});
// 通过小白，找到狗，找到全部的狗
Animal.create({"name":"小白","type":"狗"});
Animal.create({"name":"snoopy","type":"狗"});*/

Animal.findOne({"name":"小白"},function(err,result){
    var dog = result;
    dog.zhaotonglei(function(err,result){
        console.log(result);
    });
});
/*
[
   { _id: 59dc68c82aa80a191c591297, name: '小白', type: '狗', __v: 0 },
  { _id: 59dc68c82aa80a191c591298,
    name: 'snoopy',
    type: '狗',
    __v: 0 }
    ]
* */