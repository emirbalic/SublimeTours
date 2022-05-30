$(document).ready(function () {
  var smallScreen = window.matchMedia("(max-width: 480px)");
  if (smallScreen.matches) {
    $("nav-links, a").attr("style", "color: white");
  }

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  //toggle button
  $(".btn").click(function () {
    $(".nav-links").slideToggle(1000);
    $(".btn").toggleClass("change");
  });

  $(".nav-links").click(function () {
    $(".nav-links").slideToggle(1000);
    $(".btn").toggleClass("change");
  })

  //transparent background
  $(window).scroll(function () {
    let position = $(window).scrollTop();

    var smallScreen = window.matchMedia("(max-width: 480px)");
    if (smallScreen.matches) {
      $("nav-links, a").attr("style", "color: white");
    }

    if (position >= 100) {
      $(".btn").addClass("btnchange");
      $(".bar1").attr("style", "background: white");
      $(".bar2").attr("style", "background: white");
      $(".bar3").attr("style", "background: white");

      $(".logo").attr("src", "img/logowhite.png");
      $("nav-links, a").attr("style", "color: white");
      $("nav, nav-container").addClass("navBackground");
      $("nav-icons, path").attr("style", "color: white");
    } else {
      $(".btn").removeClass("btnchange");
      $(".bar1").attr("style", "background: #03243e");
      $(".bar2").attr("style", "background: #03243e");
      $(".bar3").attr("style", "background: #03243e");

      $(".logo").attr("src", "img/logo.png");
      $("nav, nav-container").removeClass("navBackground");
      $("nav-icons, path").attr("style", "color: #03243e");
      if (smallScreen.matches) {
        $("nav-links, a").attr("style", "color: white");
      } else {
        $("nav-links, a").attr("style", "color: #03243e");
      }
    }
  });
  //smooth scroll

  var smooth = $(".nav-links a");

  // console.log('smooth', smooth)
  // console.log('smooth', smooth.childElementCount)

  // if(smooth.childElementCount < 4) {

  smooth.click(function (link) {
    //

    let target = $(this).attr("href");
    if (target.includes("#")) {
      link.preventDefault();
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top,
          },
          1000
        );
    }
  });

  // owl customers
  $(".testimonial-center").owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 2000,
    autoplay: true,
    autoplayTimeout: 8000,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
});
