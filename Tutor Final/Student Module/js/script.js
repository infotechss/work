
jQuery.noConflict(); 
var j$ = jQuery;

j$(document).ready(function(){
	// j$("#panel-btn").click(function(){
	// 	j$("#right-panel").animate({ right:'0' }, 500);
	// return false;
	// })
	// j$(".close-btn").click(function(){
	// 	j$("#right-panel").animate({ right:'-223px' }, 500);
	// return false;
	// })

	j$(".exit-btn").click(function(){
		j$(".math-banner").hide(800);
		return false;
	})

	j$(".navbar-toggle").click(function(){
		j$("nav").slideToggle();
	return false;
	})

	j$( "#panel-btn" ).on("click",function() {
		j$( "#right-panel, #contents" ).addClass( "newClass", 500 );
		return false;
	});
	j$(".close-btn").click(function(){
		j$("#right-panel, #contents").removeClass( "newClass", 500);
	return false;
	})

	j$( ".sb-collapse a" ).click(function() {
		j$( "#study-panel, #study-video" ).toggleClass( "newClass", 500 );
	});

	j$("[data-toggle=tooltip]").tooltip();

	// j$(".logged-in").removeClass("logged-in");
	
	var j$scrollbar = j$("#scrollbar1");
	j$scrollbar.tinyscrollbar();

})