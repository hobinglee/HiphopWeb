var express = require("express");
var router = express.Router();

//从数据库提取数据
router.post("/messageList",function(req,res,next){
	//从数据库中找到用户并显示出来
	messageModule.messageList().on("success",function(rows,fields){
    //浏览器端渲染
    res.json(rows).end();
        
	}).on("error",function(err){    
		return next(err);
	});
});

//删除留言信息
router.post("/messageDelete",function(req,res,next){
	messageModule.messageDelete(req.body.mesid).on("success",function(rows,fields){

    //浏览器端渲染
    if(rows.affectedRows==1){
    	res.json(info.message.success);
    }else{
    	res.json(info.error.mesdelete_error);
    }
        
	}).on("error",function(err){    
		return next(err);
	});
});

module.exports=router;