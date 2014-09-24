
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

	j$(".navbar-toggle").click(function(){
		j$("nav").slideToggle();
	return false;
	})

	/*	FAQ popup	*/
	j$(".faq-popup a").click(function(){
		if ( j$(this).parent().hasClass('active') ) {
			j$(".faq-popup li").removeClass("active");
			j$(".faq-info").slideUp();
			j$("this").children(".right-icon").removeClass("fa-chevron-circle-down");
			j$(this).children(".right-icon").addClass("fa-chevron-circle-right");

		}
		else{
			j$(".faq-popup li").removeClass("active");
			j$(".faq-info").slideUp();
			j$(".faq-popup a").children(".right-icon").removeClass("fa-chevron-circle-down");
			j$(this).parent().addClass("active");
			j$(this).next('.faq-info').slideDown();
			j$(this).parent().addClass("active");
			j$(this).children(".right-icon").removeClass("fa-chevron-circle-down");
			j$(this).children(".right-icon").addClass("fa-chevron-circle-down");
		}
				
		return false;
	})

	j$(".exit-btn").click(function(){
		j$(".tutor-banner").hide(800);
		return false;
	})

	j$(".email-btn").click(function(){
		j$(".contact-us").fadeToggle();
		j$(this).toggleClass("active");
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