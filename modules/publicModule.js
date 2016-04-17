var publicModule=function(){}


publicModule.prototype.index = function(){
	var emitter = new events.EventEmitter();
	dataSource.getcon().on("success",function(conn){
		conn.query("select * from active;select * from man_intro",function(err,rows,fields){
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
	return new publicModule();
};