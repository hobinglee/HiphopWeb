var fs = require("fs");
exports.jsonChange=function(name){
	var path ="./config/"+name+".json";
	var data =fs.readFileSync(path);
	return JSON.parse(data);
}

exports.islogin=function(req,res,next){
	
	if( !req.session.admin ){
		res.redirect("/login.html");
	}else{
		next();
	}

}

exports.upimgfile=function(req,res,next){
	//取得后缀名
	//var extname = path.extname(req.file.originalname);
	
	//取得临时文件的目录
	var frpath =rootpath+"/"+req.file.path;
	//取得即将拷贝文件的目的路径
	var fopath =rootpath+"/public/img/upload/"+req.file.originalname;
	
	//读取文件
	var fr = fs.createReadStream(frpath);
	//拷贝文件
	var fo = fs.createWriteStream(fopath);
	fr.pipe(fo);
	
	//删除临时文件
	fs.unlink(frpath, function(err){
		if(err){
			return next(err);
		}
	});

}

exports.deletefile=function(mimg){
//	取得要删除文件的名字
	var deletepath =rootpath+"/public/img/upload/"+mimg;
	//删除文件
	fs.unlink(deletepath, function(err){
		if(err){
			return next(err);
		}
	});
	
}

