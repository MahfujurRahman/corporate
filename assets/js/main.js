/*---*/
// (function ($) {
// 	"use strict";

//     jQuery(document).ready(function($){


//         $(".embed-responsive iframe").addClass("embed-responsive-item");
//         $(".carousel-inner .item:first-child").addClass("active");
        
//         $('[data-toggle="tooltip"]').tooltip();

           



        


//     });




//     jQuery(window).load(function(){

        
//     });


// }(jQuery));
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});	