(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });


  var KYCourseSettings = '课程设置';
  var viewport_width = document.body.clientWidth;
  $(function () {
    $(window).on('activate.bs.scrollspy', function (e) {
      var currentItem = $(".nav-item > a.active").text();

      if (currentItem == KYCourseSettings) {
        var phase1 = $('#phase1');
        var phase2 = $('#phase2');
        var phase3 = $('#phase3');
        var phase4 = $('#phase4');
        var phase5 = $('#phase5');


        // If view port width is less than 720, then skip all the animations
        var skipAnimation = viewport_width < 720;

        if (phase1.hasClass("invisible")) {

          if (skipAnimation) {
            phase1.removeClass("invisible");
            phase3.removeClass("invisible");
            phase5.removeClass("invisible");
          }else {
            phase1.removeClass("invisible").addClass("animated fadeInLeft");
            phase3.removeClass("invisible").addClass("animated fadeInLeft");
            phase5.removeClass("invisible").addClass("animated fadeInLeft");
          }
        }

        if (phase2.hasClass("invisible")) {
          if (skipAnimation) {
            phase2.removeClass("invisible");
            phase4.removeClass("invisible")
          }else {
            phase2.removeClass("invisible").addClass("animated fadeInRight");
            phase4.removeClass("invisible").addClass("animated fadeInRight");
          }
        }
      }
    })
  });



  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict
