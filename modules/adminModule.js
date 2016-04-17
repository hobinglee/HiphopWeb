var adminModule=function(){};

//验证登录的模块
adminModule.prototype.login=function(username,pwd){
	var emitter = new events.EventEmitter();
//	取得连接
	dataSource.getcon().on("success",function(connection){
		connection.query('select * from admin where account=? and apwd=?',[username,pwd],function(err,results,fields){
			if(err){
				return emitter.emit("error",err);
			}
			emitter.emit("success",results,fields);
			connection.release();
		}).on("error",function(err){
			emitter.emit("error",err);
			
		});
		return emitter;
	});
  return emitter;
};
//从数据库获取数据到list
adminModule.prototype.list = function(){
	var emitter = new events.EventEmitter();
	dataSource.getcon().on("success",function(conn){
		conn.query("select * from admin",function(err,rows,fields){
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

//数据库写入数据从adduser中
adminModule.prototype.adduser = function(name,uname,pwd){
	var emitter = new events.EventEmitter();
	dataSource.getcon().on("success",function(conn){
		conn.query("insert into admin values(default,?,?,?,0)",[name,uname,pwd],function(err,rows,fields){
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

//验证是否存在用户
adminModule.prototype.checkuser = function(uname){
	var emitter = new events.EventEmitter();
	dataSource.getcon().on("success",function(conn){
		conn.query("select * from admin where account=?",[uname],function(err,rows,fields){
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

//传输删除数据库行数据
adminModule.prototype.deleteuser = function(aid){
	var emitter = new events.EventEmitter();
	dataSource.getcon().on("success",function(conn){
		conn.query("delete from admin where aid=?",[aid],function(err,rows,fields){
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
	return new adminModule();
};
