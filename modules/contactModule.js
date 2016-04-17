var contactModule=function(){}




contactModule.prototype.contact = function(name,email,text1){
	var emitter = new events.EventEmitter();
	dataSource.getcon().on("success",function(conn){
		conn.query("insert into mes values(default,?,?,now(),?)",[name,email,text1],function(err,rows,fields){
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
	return new contactModule();
};