
$(document).ready(function(){
	$("#panel-btn").click(function(){
		$("#right-panel").animate({ right:'0' }, 500);
	return false;
	})
	$(".close-btn").click(function(){
		$("#right-panel").animate({ right:'-223px' }, 500);
	return false;
	})
})