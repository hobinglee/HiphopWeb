var express = require("express");
var router = express.Router();


//插入留言
router.post("",function(req,res,next){
	contactModule.contact(req.body.name,req.body.email,req.body.text).on("success",function(rows,fields){
    
    if(rows.affectedRows==1){
    	res.json(info.message.success);
    }
        
	}).on("error",function(err){    
		return next(err);
	});
});

module.exports=router;