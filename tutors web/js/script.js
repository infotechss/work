
$(document).ready(function(){
	$("#panel-btn").click(function(){
		$("#right-panel").animate({ right:'0' }, 500);
	return false;
	})
	$(".close-btn").click(function(){
		$("#right-panel").animate({ right:'-223px' }, 500);
	return false;
	})

	//$("div").removeClass("logged-in");
	
	var $scrollbar = $("#scrollbar1");
	$scrollbar.tinyscrollbar();
	$(".sb-collapse").click(function(){
		$(".study-right").hide();
		return false;
	})
})