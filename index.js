$(document).ready(function() {
           $("main, footer").on("click", function() {
                 $("nav ul").removeClass("showing");
                 $("main").removeClass("slidecontent");
           });
     });
$(document).ready(function() {
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
            $("main").toggleClass("slidecontent");
      });
});


// Scrolling Effect
  $(window).on("scroll", function() {
        if($(window).scrollTop()) {
              $('nav').addClass('black');
        }

        else {
              $('nav').removeClass('black');
        }
  })