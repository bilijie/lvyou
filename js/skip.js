;(function($){
	$(".index-footer").find("a").on("click",function(){
		$(this).addClass("curr").siblings().removeClass();
	})
})(Zepto)