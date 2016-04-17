var express = require("express");
var router = express.Router();
var fs = require("fs");


//从数据库提取数据
router.post("/activeList",function(req,res,next){
	activeModule.activeList().on("success",function(rows,fields){

    //浏览器端渲染
    res.json(rows).end();
        
	}).on("error",function(err){    
		return next(err);
	});
});

//向数据库插入增加活动信息的数据
router.post("/activeAdd",function(req,res,next){
	
	activeModule.activeAdd(req.body.name,req.body.sponsor,req.body.time,req.body.cent,("img/upload/"+req.body.imgname)).on("success",function(rows,fields){
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
router.post("/activeDelete",function(req,res,next){
	//删除文件
	if(req.body.agimg){
		var deletepath =rootpath+"/public/"+req.body.agimg;
		
	fs.unlink(deletepath, function(err){
		if(err){
			return next(err);
		}
	});
	}
	
	activeModule.activeDelete(req.body.agid).on("success",function(rows,fields){

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