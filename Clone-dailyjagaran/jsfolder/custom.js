/*=========================================

Template Name:
Author:
Version: 1.0
Design and Developed by:

=========================================*/

(function($) {
    "use strict";

    var $window = $(window),
        $body = $('body');
        /*==========================
            Back To Top
        ============================*/
        $(".scrollup").hide();
          $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
              $('.scrollup').fadeIn();
            } else {
              $('.scrollup').fadeOut();
            }
          });
          $('.scrollup').on('click', function () {
            $('body,html').animate({
              scrollTop: 0
            }, 800);
            return false;
          });
          /*=================================
                NAVBAR STICKY
          ==================================*/
  		    $('.main-menu-wrapper').sticky({
  			    topSpacing: 0
  		    });
        /*-------------------------------------
               Fetuered Videos jQuery activation code
               -------------------------------------*/
            $("#featured-videos-section").owlCarousel({
                // Most important owl features
                items : 3,
                // Navigation
                nav: true,
                loop: true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                dots: false,
                autoplay: true,
                smartSpeed: 600,
                autoplayHoverPause: true,
                responsive:{
        		    0:{
        		      items:1 // In this configuration 1 is enabled from 0px up to 479px screen size
        		    },
        		    480:{
        		      items:1, // from 480 to 677
        		      center:false // only within 678 and next - 959
        		    },
        		    678:{
        		      items:2, // from this breakpoint 678 to 959
        		      center:false // only within 678 and next - 959
        		    },
        		    768:{
        		      items:2, // from this breakpoint 960 to 1199
        		      margin:20, // and so on...
        		      center:false
        		    },
        		    1200:{
        		      items:3,
        		      margin: 0
        		    }
        	    }
            });



            // $('#myTabContent').on('click', function (e) {
            //   e.preventDefault()
            //   $(this).tab('show')
            // })



})(jQuery);

/*-------------------------------------
  SEARCH BOX TOGGLE
 -------------------------------------*/

$(document).ready(function() {

      $(".fa-search").click(function() {
         $(".search-box").toggle();
         $("input[type='text']").focus();
       });

  });

  /*-------------------------------------
    NIVO SLIDER
  -------------------------------------*/
$(window).load(function() {
    $('#slider').nivoSlider({
        // effect: 'random',
        // slices: 15,
        // boxCols: 8,
        // boxRows: 4,
        // animSpeed: 500,
        // pauseTime: 3000,
        // startSlide: 0,
        // directionNav: true,
        // controlNav: true,
        // controlNavThumbs: false,
        // pauseOnHover: true,
        // manualAdvance: false,
        // prevText: 'Prev',
        // nextText: 'Next',
        // randomStart: false,
        // beforeChange: function(){},
        // afterChange: function(){},
        // slideshowEnd: function(){},
        // lastSlide: function(){},
        // afterLoad: function(){}
  });
});
