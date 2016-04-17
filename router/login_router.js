var express = require("express");
var router = express.Router();

//验证账户密码是否正确是否
router.post("/",function(req,res,next){
	adminModule.login(req.body.username,req.body.pwd)
	.on("success",function(results,fields){
		if(results.length ==0){
			res.json(info.error.loginerror);
		}else{
			req.session.admin = results[0];
			res.json(info.message.success);
		}
	}).on("error",function(err){
		return next(err);
	});
	
	
	
});

//退出登录
router.post("/logout",function(req,res,next){
	delete req.session.admin;
	res.json(info.message.success);
});

module.exports=router;