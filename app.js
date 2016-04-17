//引入第三方模块
var express = require("express");
var log4js = require("log4js");
var mysql = require("mysql");
var path = require("path");
var session = require("express-session");
var bodyParser = require("body-parser");
var events = require("events");
var multer = require("multer");
var upload = multer({ dest: 'uploads/' });
//传入路由
var logincheck = require("./router/login_router.js");
var adminrouter = require("./router/admin_router.js");
var mansrouter = require("./router/mans_router.js");
var messagerouter = require("./router/message_router.js");
var activerouter = require("./router/active_router.js");
var publicrouter = require("./router/public_router.js");
var contactrouter = require("./router/contact_router.js");
//文件系统用的是绝对路径
//url用的是相对路径

//设置全局变量
global.log = log4js.getLogger("loginfo");
global.mysql = mysql;
global.events = events;
global.rootpath = __dirname;

//引入自定义模块
var tool = require("./tool/tool.js");
global.info = tool.jsonChange("info");
global.dataSource = require("./modules/dataSource")();
//括号表示去调用这个函数
global.adminModule = require("./modules/adminModule.js")();
global.mansModule = require("./modules/mansModule.js")();
global.messageModule = require("./modules/messageModule.js")();
global.activeModule = require("./modules/activeModule.js")();
global.publicModule = require("./modules/publicModule.js")();
global.contactModule = require("./modules/contactModule.js")();


//加载日志文件文件
log4js.configure("config/log4js.json");
//服务器设置
var app = express();
//设置express的模板引擎
var ejs = require("ejs");
ejs.delimiter = "$";
app.set('views',path.join(__dirname,"views"));
app.engine('.html',ejs.__express);
app.set("views engine","html");

//配置post请求
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//配置session会话中间件
 app.use(session({
	secret: "#$#$!",
	resave: false,
	saveUninitialized: false,
	rolling: true,
	cookie: {
		"maxAge": 1000 * 3600 * 60
	}
}));

//路由设置
//获取客户端登录页面信息post方式
app.use("/login",logincheck);
//过滤和检测后台页面是否登录
app.use("/admin",tool.islogin);
//后台用户管理页面路由设置
app.use("/admin/admin",adminrouter);
//设置上传文件的路径
app.use("/upload",upload.single('imgfile'),tool.upimgfile);
//后台人物管理页面路由设置
app.use("/admin/man",mansrouter);
//后台留言管理路由设置
app.use("/admin/mes",messagerouter);
//后台活动管理路由设置
app.use("/admin/act",activerouter);
//前台主页路由
app.use("/index",publicrouter);
app.use("/Contact",contactrouter);



//设置静态页面
app.use(express.static('public'));

//设置404错误(找不到页面)
app.use(function(req, res, next) {
  res.status(404).redirect("/404.html");
});

//设置500错误(服务器内部错误)
app.use(function(err, req, res, next) {
  console.error(err.stack);
  log.error(err.stack);
  res.status(500).redirect("/500.html");
});

//服务器致命错误处理
process.on("uncaughtException",function(err){
	console.error(err.stack);
	log.error(err.stack);
});



//启动服务器
var server =app.listen(8080,function(){
	var host =server.address().address;
	var port =server.address().port;
	
	console.log("服务器启动成功"+"listenning:"+port);
});
