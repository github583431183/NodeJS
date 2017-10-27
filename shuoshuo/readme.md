# 留言本
www.npmjs.com
## 部署nodejs环境
1. 目录结构
    1. public 静态资源目录
    2. router 路由
    3. views ejs模板
    4. ...
    5. 主配置文件
        ```
            cmd > npm init  // 配置主配置文件
            "main": "app.js",// 配置入口js
        ```
2. 导入框架
    1. ejs
    2. express
    3. formidable
    4. gm
    5. mongodb
    6. express-session
3. 启动mongodb
```
// 开机 mongodb
mongod --dbpath c:\mongo
// mongodb 端口号 27017
```
4. 解决 mongoVUE 的 collections 不显示问题
http://blog.csdn.net/qq_33279781/article/details/52047564
```
cd C:\Program Files\MongoDB\Server\3.4\bin
mongod --storageEngine mmapv1 --dbpath c:\mongo
```
## 开发
1. app.js
    ```
        1. 导入 express 框架
        2. 配置 路由
        3. 导入 express-session 框架
    ```
    
2. 图片裁剪
用到了 GraphicsMagick
需要安装 GM客户端
链接:
http://ftp.icm.edu.pl/pub/unix/graphics/GraphicsMagick/windows/

    GraphicsMagick-1.3.21-Q8-win64-dll
   
## js
1. underscore-noflect.js
```
<script type="text/template" id="moban">
    <div class="col-md-4 grid">
        <h2><img width="40" class="avatar" src="/avatar/{{=avatar}}" alt=""/>{{=username}}说：</h2>

        <p>{{=content}}</p>

        <p>{{=datetime}}</p>

        <p><a class="btn btn-default" href="#" role="button">查看详细</a></p>
    </div>
</script>

var compiled = _.template($("#moban").html());
```
2. ejs 与 underscore 模板标记<% %>冲突
修改 underscore 的标记 改为 --> {{ }}
