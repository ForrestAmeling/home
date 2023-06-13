/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/
(function( $ ){
  "use strict";


    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('nav.navbar').addClass('navbar-shrink');
            $('nav.navbar .navbar-header h3').css('margin-top', '8px');
            $('nav.navbar .navbar-default .navbar-nav li a').css('padding', '8px 15px');
        } else {
            $('nav.navbar').removeClass('navbar-shrink');
            $('nav.navbar .navbar-header h3').css('margin-top', '15px');
            $('nav.navbar .navbar-default .navbar-nav li a').css('padding', '10px 26px');
        }
    });


})( jQuery );