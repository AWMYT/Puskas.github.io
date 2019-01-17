/*global $, window,*/



$('.carousel').carousel({
    
    interval: 3000
    
});


$('.gear-check').click(function () {
    
    "use strict";
    
    $('.color-option').fadeToggle();
});


//=============================================================

// NiceScroll

$(function () {
	
	"use strict";
	
    $("html").niceScroll();
	
});


//=============================================================

var colorLi = $('.color-option ul li');

colorLi
    .eq(0).css("backgroundColor", "orangered").end()
    .eq(1).css("backgroundColor", "#4a8049").end()
    .eq(2).css("backgroundColor", "#aaff6c").end()
    .eq(3).css("backgroundColor", "#f100ff");

colorLi.click(function () {
    
    //console.log($(this).attr("data-value"))
    
    // remove Themes
    "use strict";
    
    $("link[href*='Themes']").attr("href", $(this).attr("data-value"));
    
});


//=============================================================

$(window).on('load', function () {
    
    "use strict";
    
    $(".loading-overlay .lds-spinner").fadeOut(1000, function () {
        
        $("body").css("overflow", "auto"); // show Scroll

        
        $(this).parent().fadeOut(1000, function () {
                        
            $(this).remove(); // remove section
        });
        
    });

});



//=============================================================

// Cashing The Scroll Top Element
var scrollBotton = $("#scrollTop");

$(window).scroll(function () {
    
    "use strict";
    
    //console.log($(this).scrollTop());
    
        // short code for if statment
    //$(this).scrollTop() >= 800 ? scrollBotton.show() : scrollBotton.hide();

        
    if ($(this).scrollTop() >= 800) {
        
        scrollBotton.show();
        
    } else {
        
        scrollBotton.hide();
            
    }
    
});

    //Click on Botton To Scroll Top
scrollBotton.click(function () {
    
    "use strict";
        
    $("html,body").animate({scrollTop: 0}, 600);
    
});