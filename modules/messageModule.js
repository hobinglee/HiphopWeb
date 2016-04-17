var messageModule=function(){};

//从数据库里获取留言信息
messageModule.prototype.messageList = function(){
	var emitter = new events.EventEmitter();
	dataSource.getcon().on("success",function(conn){
		conn.query("select * from mes",function(err,rows,fields){
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

//删除留言
messageModule.prototype.messageDelete= function(mesid){
	var emitter = new events.EventEmitter();
	dataSource.getcon().on("success",function(conn){
		conn.query("delete from mes where mesid=?",[mesid],function(err,rows,fields){
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
	return new messageModule();
};