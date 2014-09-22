
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

	j$(".exit-btn").click(function(){
		j$(".math-banner").hide(800);
		return false;
	})

	// j$(".logged-in").removeClass("logged-in");
	
	var j$scrollbar = j$("#scrollbar1");
	j$scrollbar.tinyscrollbar();

	j$(".sb-collapse a").click(function(){
		j$(".study-right-wrap").animate({ left:'64%' });
		j$(".study-left-wrap").animate({ width:'65%' });
	return false;
	})

})