// 初始化 express
var express = require("express");
var app = express();

//导入控制器
//var router = require("./controller/router.js");
var router = require("./controller");// /controller/package.json

//设置模板引擎,默认使用 views
//app.set("views","xxx")
app.set("view engine", "ejs");

//路由中间件，静态页面
app.use(express.static("./public"));
app.use(express.static("./uploads"));

//首页
app.get("/xiangce", router.showIndex);
app.get("/xiangce/:albumName", router.showAlbum);
app.get("/xiangce/up", router.showUp);
app.post("/xiangce/up", router.doPost);

//404
app.use(function (req, res) {
    res.render("err");
});

app.listen(3000);