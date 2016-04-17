var mansModule=function(){}

//从数据库获取人物信息
mansModule.prototype.mansList = function(){
	var emitter = new events.EventEmitter();
	dataSource.getcon().on("success",function(conn){
		conn.query("select * from man_intro",function(err,rows,fields){
			if(err){
				return emitter.emit("error",err);
			}
			emitter.emit("success",rows,fields);
			conn.release(); //归还数据库连接到连接池
		}).on("error",function(err){
		emitter.emit("error",err);
	});
	return emitter;
});
	return emitter;
	
}

//向数据库写入增加人物的信息
mansModule.prototype.mansAdd = function(name,glory,intro,imgpath){
	var emitter = new events.EventEmitter();
	dataSource.getcon().on("success",function(conn){
		conn.query("insert into man_intro values(default,?,?,?,?)",[name,glory,intro,imgpath],function(err,rows,fields){
			if(err){
				return emitter.emit("error",err);
			}
			emitter.emit("success",rows,fields);
			conn.release(); //归还数据库连接到连接池
		}).on("error",function(err){
		emitter.emit("error",err);
	});
	return emitter;
});
	return emitter;
	
}

//删除人物信息
mansModule.prototype.mansDelete= function(mid){
	var emitter = new events.EventEmitter();
	dataSource.getcon().on("success",function(conn){
		conn.query("delete from man_intro where mid=?",[mid],function(err,rows,fields){
			if(err){
				return emitter.emit("error",err);
			}
			emitter.emit("success",rows,fields);
			conn.release(); //归还数据库连接到连接池
		}).on("error",function(err){
		emitter.emit("error",err);
	});
	return emitter;
});
	return emitter;
	
}


module.exports=function(){
	return new mansModule();
};
