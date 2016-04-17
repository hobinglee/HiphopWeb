var express = require("express");
var router = express.Router();

router.post("",function(req,res,next){
	publicModule.index().on("success",function(rows,fields){
    //浏览器端渲染
    res.json(rows).end();
        
	}).on("error",function(err){    
		return next(err);
	});
});


module.exports=router;