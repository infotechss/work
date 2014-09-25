
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

	j$(".navbar-toggle").click(function(){
		j$("nav").slideToggle();
	return false;
	})

	j$( ".sb-collapse a" ).click(function() {
		j$( "#study-panel, #study-video" ).toggleClass( "newClass", 500 );
	});

	j$("[data-toggle=tooltip]").tooltip();

	// j$(".sb-collapse a").click(function(){
	// 	if ( j$(this).hasClass("active") ) {
	// 		j$(this).removeClass('active');
	// 		j$(".study-right-wrap").animate({ left:'100%' });
	// 		j$(".study-left-wrap").animate({ width:'100%' });
	// 	};
	// 	else{
	// 		j$(this).addClass("active");
	// 		j$(".study-right-wrap").animate({ left:'64%' });
	// 		j$(".study-left-wrap").animate({ width:'65%' });
	// 	}
	// 	return false;
	// })

	// j$(".logged-in").removeClass("logged-in");
	
	var j$scrollbar = j$("#scrollbar1");
	j$scrollbar.tinyscrollbar();

	// j$(".sb-collapse a").click(function(){
	// 	j$(".study-right-wrap").animate({ left:'64%' });
	// 	j$(".study-left-wrap").animate({ width:'65%' });
	// return false;
	// })

})