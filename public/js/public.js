$(function(){
	//	导航条
  var nav = $("#right-nav li a");
  nav.click(function(){
  	nav.addClass("active_link");
  	nav.removeAttr("style");
  	$(this).css({"color":"#d94f5c","border-top-color":"#d94f5c","border-bottom-color":"#d94f5c"});
  });
  
   //回到顶部
  
$(".top_comeback").click(function(){
	$("html,body").animate({scrollTop:"0px"},800);								
});
});
