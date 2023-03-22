$(document).ready(function (){
    'use strict';

    // *CODE START

    // !Wow Js

    var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animate__animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow.init();



    $('header nav .resIcon a').click(function() {
        $('header nav .menu').slideToggle();
    })

    $(window).resize(function() {
        let screenSize = $(window).width();
        if (screenSize > 991){
            $('header nav .menu').removeAttr('style')
        }
    });

    $(window).scroll(function() {
        let distance = $(window).scrollTop();

        if (distance > 100) {
            $('.ScrollTopBtn a').fadeIn()

        } else {
            $('.ScrollTopBtn a').fadeOut();
        }
    })

    
    
    



})
