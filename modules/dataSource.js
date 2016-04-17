var dataSource=function(){
	//建立连接地址池
	this.pool=mysql.createPool({
		connectionLimit : 10,
  		host     : 'localhost',
 		user     : 'root',
  		password : '',
  		database : 'hiphop1',
  		port : 3306,
  		dateStrings:true,
  		multipleStatements:true
});
};

dataSource.prototype.getcon=function(){
	var emitter = new events.EventEmitter();
	this.pool.getConnection(function(err, connection){
		
		if(err){
			
			return emitter.emit("error",err);
		}else{
			
			emitter.emit("success",connection);
		}
		
	});
	return emitter;
};

module.exports=function(){
	return new dataSource();
}

