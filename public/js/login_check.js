$(function() {

	
	//格式验证

	//用户名失去焦点后
	$("#username").blur(function() {
		var uname = $("#username").val();
	   
		if (uname == "") {
			$(".login_nav .error_cuo").show();
		} else {
			$(".login_nav .error_cuo").hide();
			$(".login_nav .ok_gou").show();
		}
	});
	//用户名得到焦点后
	$("#username").focus(function() {
		$(".mes_err").empty();
		$(".login_nav .ok_gou").hide();
	});

		//密码失去焦点后
		$("#pwd").blur(function() {
			 var pwd = $("#pwd").val();
			if (pwd == "") {
				$(".login_psdNav .error_cuo").show();
			}else{
				$(".login_psdNav .error_cuo").hide();
				$(".login_psdNav .ok_gou").show();
			}
		});
		//密码得到焦点
		$("#pwd").focus(function(){
			$(".mes_err").empty();
			$(".login_psdNav .ok_gou").hide();
		});
		

	$("#login").click(function() {
		//数据提交
		$.ajax({
			type: "post",
			url: "/login",
			datatype: "json",
			data: {
				"username": $("#username").val(),
				"pwd": $("#pwd").val(),
				"remeber":$("#remeber").is(":checked")?1 : 0
				//		"remberme":$("#check").is(":checked")?1 : 0
			},
			success: function(obj) {
				if (obj.code) {
					//清除需错误信息
					$(".mes_err").html("");
					remeber();
					//跳转到后台页面
					location.href="/admin/admin/index";
				} else {
					$(".mes_err").html(obj.mes);
					$(".login_nav .ok_gou").hide();
					$(".login_psdNav .ok_gou").hide();
				}
			},
			error:function(obj){
				if(obj.status == 404){
//					location.href="/404.html";
				}else if(obj.status == 500){
//					location.href="/500.html"
				}
			}
		});
	});


load();
//创建本地存储
function remeber(){
    if($("#remeber").is(":checked")&&window.localStorage){
    	localStorage.setItem("username",$("#username").val());
    	localStorage.setItem("pwd",$("#pwd").val());
    }else{
    	localStorage.removeItem("username");
    	localStorage.removeItem("pwd");
    }
}
//加载本地存储
function load(){
 	var username =localStorage.getItem("username");
 	var pwd =localStorage.getItem("pwd");
 	if(username){
 		$("#username").val(username);
 		$("#pwd").val(pwd);
 		$("#remeber").attr("checked",true);
 	}
}
});



//
//$(function() {
//	$('#login').click(function() {
//		var name_state = $('#name');
//		var psd_state = $('#psd');
//		var name = $('#name').val();
//		var psd = $('#psd').val();
//		if (name == '') {
//			name_state.parent().next().next().css("display", "block");
//			return false;
//		} else if (psd == '') {
//			name_state.parent().next().next().css("display", "none");
//			psd_state.parent().next().next().css("display", "block");
//			return false;
//		} else {
//			name_state.parent().next().next().css("display", "none");
//			psd_state.parent().next().next().css("display", "none");
//			$('.login').submit();
//		}
//	});
//	$('#register').click(function() {
//		var name_r_state = $('#name_r');
//		var psd_r_state = $('#psd_r');
//		var affirm_psd_state = $('#affirm_psd');
//		var name_r = $('#name_r').val();
//		var psd_r = $('#psd_r').val();
//		var affirm_psd = $('#affirm_psd').val();
//		if (name_r == '') {
//			name_r_state.parent().next().next().css("display", "block");
//			return false;
//		} else if (psd_r == '') {
//			psd_r_state.parent().next().next().css("display", "block");
//			return false;
//		} else if (affirm_psd == '') {
//			affirm_psd_state.parent().next().next().css("display", "block");
//			return false;
//		} else if (psd_r != affirm_psd) {
//			return false;
//		} else {
//			$('.register').submit();
//		}
//	})
//});
//
//function ok_or_errorBylogin(l) {
//	var content = $(l).val();
//	if (content != "") {
//		$(l).parent().next().next().css("display", "none");
//	}
//}
//
//function ok_or_errorByRegister(r) {
//	var affirm_psd = $("#affirm_psd");
//	var psd_r = $("#psd_r");
//	var affirm_psd_v = $("#affirm_psd").val();
//	var psd_r_v = $("#psd_r").val();
//	var content = $(r).val();
//	if (content == "") {
//		$(r).parent().next().next().css("display", "block");
//		return false;
//	} else {
//		$(r).parent().next().css("display", "block");
//		$(r).parent().next().next().css("display", "none");
//		if (psd_r_v == "") {
//			$(psd_r).parent().next().css("display", "none");
//			$(psd_r).parent().next().next().css("display", "none");
//			$(psd_r).parent().next().next().css("display", "block");
//			return false;
//		}
//		if (affirm_psd_v == "") {
//			$(affirm_psd_v).parent().next().css("display", "none");
//			$(affirm_psd_v).parent().next().next().css("display", "none");
//			$(affirm_psd_v).parent().next().next().css("display", "block");
//			return false;
//		}
//		if (psd_r_v == affirm_psd_v) {
//			$(affirm_psd).parent().next().css("display", "none");
//			$(affirm_psd).parent().next().next().css("display", "none");
//			$(psd_r).parent().next().css("display", "none");
//			$(psd_r).parent().next().next().css("display", "none");
//			$(affirm_psd).parent().next().css("display", "block");
//			$(psd_r).parent().next().css("display", "block");
//		} else {
//			$(affirm_psd).parent().next().css("display", "none");
//			$(affirm_psd).parent().next().next().css("display", "none");
//			$(psd_r).parent().next().css("display", "none");
//			$(psd_r).parent().next().next().css("display", "none");
//			$(psd_r).parent().next().css("display", "block");
//			$(affirm_psd).parent().next().next().css("display", "block");
//			return false;
//		}
//	}
//}
//
//function barter_btn(bb) {
//	$(bb).parent().parent().fadeOut(1000);
//	$(bb).parent().parent().siblings().fadeIn(2000);
//}