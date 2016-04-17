var express = require("express");
var router = express.Router();

router.all("/index",function(req,res,next){
//	res.sendFile(rootpath+"/views/admin/admin.html");
	res.render("admin/admin.html",{username:req.session.admin});
});

router.post("/list",function(req,res,next){
	//从数据库中找到用户并显示出来
	adminModule.list().on("success",function(rows,fields){
//		res.render("admin/admin_list",{user:rows});  //服务器端渲染
    //浏览器端渲染
    res.json(rows).end();
        
	}).on("error",function(err){    
		return next(err);
	});
});

//向数据库传输数据，增加用户
router.post("/addAdminer",function(req,res,next){
	
	adminModule.adduser(req.body.name,req.body.uname,req.body.pwd).on("success",function(rows,fields){

    
    if(rows.affectedRows==1){
    	res.json(info.message.success);
    }else{
    	res.json(info.error.adderror);
    }
        
	}).on("error",function(err){    
		return next(err);
	});
});

//验证是否存在用户，
router.post("/checkAdminer",function(req,res,next){
	
	adminModule.checkuser(req.body.uname).on("success",function(rows,fields){

    //浏览器端渲染
    if(rows.length==0){
    	res.json(info.message.success);
    }else{
    	res.json(info.error.checkerror);
    }
        
	}).on("error",function(err){    
		return next(err);
	});
});

//删除用户路由
router.post("/DeleteAdminer",function(req,res,next){
	
	adminModule.deleteuser(req.body.aid).on("success",function(rows,fields){

    //浏览器端渲染
    if(rows.affectedRows==1){
    	
    	res.json(info.message.success);
    }else{
    	res.json(info.error.delete_error);
    }
        
	}).on("error",function(err){    
		return next(err);
	});
});


module.exports=router;