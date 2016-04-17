var express = require("express");
var router = express.Router();
var fs = require("fs");

//从数据库提取数据
router.post("/mansList",function(req,res,next){
	mansModule.mansList().on("success",function(rows,fields){

    //浏览器端渲染
    res.json(rows).end();
        
	}).on("error",function(err){    
		return next(err);
	});
});

//向数据库插入增加人物信息的数据
router.post("/mansAdd",function(req,res,next){
	mansModule.mansAdd(req.body.name,req.body.glory,req.body.time,("img/upload/"+req.body.imgname)).on("success",function(rows,fields){

    //浏览器端渲染
    if(rows.affectedRows==1){
    	
    	res.json(info.message.success);
    }else{
    	res.json(info.error.add_error);
    }
        
	}).on("error",function(err){    
		return next(err);
	});
});

//向数据库插入删除人物信息命令
router.post("/mansDelete",function(req,res,next){
	
	//删除文件
	if(req.body.mimg){
		var deletepath =rootpath+"/public/"+req.body.mimg;
	fs.unlink(deletepath, function(err){
		if(err){
			return next(err);
		}
	});
	}
	
	mansModule.mansDelete(req.body.mid).on("success",function(rows,fields){

    //浏览器端渲染
    if(rows.affectedRows==1){
    	res.json(info.message.success);
    }else{
    	res.json(info.error.mandelete_error);
    }
        
	}).on("error",function(err){    
		return next(err);
	});
});

module.exports=router;