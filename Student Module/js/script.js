
jQuery.noConflict(); 
var j$ = jQuery;

j$(document).ready(function(){
	j$("#panel-btn").click(function(){
		j$("#right-panel").animate({ right:'0' }, 500);
	return false;
	})
	j$(".close-btn").click(function(){
		j$("#right-panel").animate({ right:'-223px' }, 500);
	return false;
	})

	j$(".logged-in").removeClass("logged-in");
	
	var j$scrollbar = j$("#scrollbar1");
	j$scrollbar.tinyscrollbar();
	j$(".sb-collapse").click(function(){
		j$(".study-right").hide();
		return false;
	})

})