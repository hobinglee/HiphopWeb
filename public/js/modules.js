//(function(){
//	$.pageChange=function(html){
//		$("#Main").find(".panel").removeClass("pt-page-rotateSlideIn").addClass("pt-page-rotateSlideOut");
//		setTimeout(function(){$("#Main").html(html).find(".panel").addClass("pt-page-rotateLeftSideFirst");},1000);
//	};

//  $.pagechange=function(html){
//  	$("#main").html("");
//	    $("#main").html(html);
//  }
	(function(window,factory){
		factory(window);
	})(window,function(window){
		window.M={};
		//退出登录
		M.logout=function(callback){
			$.ajax({
			type:"post",
			url:"/login/logout",
			dataType:"json",
			success:callback,
			async:true
		});
		}
		
		
		//用户管理信息提示

		//传输获取用户列表的数据
		M.adminList=function(){
			$.ajax({
			type:"post",
			url:"/admin/admin/list",
			dataType:"json",
			success:function(user){
				var html = ejs.render($("#adminList").html(),{user:user});
				$("#main").html("");
				$("#main").html(html);
			}
		});
		}
		//传输增加用户操作的数据
		M.adminAdd=function(data,callback){
			$.ajax({
			type:"post",
			url:"/admin/admin/addAdminer",
			data:data,
			success:callback,
			async:true
		});
		}
		//验证是否存在用户名
		M.adminCheck=function(data,callback){
			$.ajax({
			type:"post",
			url:"/admin/admin/checkAdminer",
			data:data,
			success:callback,
			async:true
		});
		}
		
		//删除管理员账号
		M.adminDelete=function(data,callback){
			$.ajax({
			type:"post",
			url:"/admin/admin/DeleteAdminer",
			data:data,
			success:callback,
			async:true
		});
		}
		
		//人物管理
		//显示所有人物
		M.mansList=function(){
			$.ajax({
			type:"post",
			url:"/admin/man/mansList",
			dataType:"json",
			success:function(page){
				var html = ejs.render($("#mans_list").html(),{page:page});
				$("#main").html("");
				$("#main").html(html);
			}
		});
		}
		//增加人物
		M.mansAdd=function(data,callback){
			$.ajax({
			type:"post",
			url:"/admin/man/mansAdd",
			data:data,
			success:callback
		});
		}
		//删除人物
		M.mansDelete=function(data,callback){
			$.ajax({
			type:"post",
			url:"/admin/man/mansDelete",
			data:data,
			success:callback
		});
		}
		
		//取得留言信息
		M.messageList=function(){
			$.ajax({
			type:"post",
			url:"/admin/mes/messageList",
			dataType:"json",
			success:function(mes){
				var html = ejs.render($("#message_list").html(),{mes:mes});
				$("#main").html("");
				$("#main").html(html);
			}
		});
		}
		
		//删除留言
		M.messageDelete=function(data,callback){
			$.ajax({
			type:"post",
			url:"/admin/mes/messageDelete",
			data:data,
			success:callback
		});
		}
		
		//取得活动列表
		M.activeList=function(){
			$.ajax({
			type:"post",
			url:"/admin/act/activeList",
			dataType:"json",
			success:function(active){
				var html = ejs.render($("#active_list").html(),{active:active});
				$("#main").html("");
				$("#main").html(html);
			}
		});
		}
		
		//增加活动信息
		M.activeAdd=function(data,callback){
			$.ajax({
			type:"post",
			url:"/admin/act/activeAdd",
			data:data,
			success:callback
		});
		}
		
		//删除活动信息
		M.activeDelete=function(data,callback){
			$.ajax({
			type:"post",
			url:"/admin/act/activeDelete",
			data:data,
			success:callback
		});
		}
		
		//index页面渲染
		M.index=function(){
			return $.ajax({
			type:"post",
			url:"/index",
			dataType:"json"
		});
		}
		
		M.figure=function(){
			return $.ajax({
			type:"post",
			url:"/figure",
			dataType:"json"
		});
		}
		
		//留言传输数据
		M.contact=function(data,callback){
			$.ajax({
			type:"post",
			url:"/Contact",
			data:data,
			dataType:"json",
			success:callback
		});
		}
	});
//})();
