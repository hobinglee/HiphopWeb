window.onload = function(){
	$(window).scroll( function() {
		$(".activeimg").fadeIn(2000,function(){
			$(this).css("display","block")
		});
		$(".rev").fadeIn(2000,function(){
			$(this).css("display","block")
		});
	});
	
	$(".activeimg").mouseover(function(){
   	$(this).children("div").css("display","block");
   });
   $(".activeimg").mouseout(function(){
   	$(this).children(".xiaoguo").css("display","none");
   });
   
   $(".rev").mouseover(function(){
   	$(this).children("div").css("display","block");
   });
   $(".rev").mouseout(function(){
   	$(this).children(".xiaoguo").css("display","none");
   });
}
