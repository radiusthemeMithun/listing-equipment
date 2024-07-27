(function ($) {
  "use strict";

/*===================================
  //Fixed popup
 =====================================*/


  var myElement = document.querySelector("header");
  var headroom  = new Headroom(myElement);
  headroom.init();


  $(window).on('scroll', function() {
    var height = $(window).scrollTop();
    if (height < 100) {
      $('.rt-header').removeClass('scrolling');
    } else {
      $('.rt-header').addClass('scrolling');
    }
  });

  

  /*=====================================
  //	Jquery Serch Box
  ===================================*/
  $('a[href="#template-search"]').on("click", function (event) {
    event.preventDefault();
    let target = $("#template-search");
    target.addClass("open");
    setTimeout(function () {
      target.find("input").focus();
    }, 600);
    return false;
  });

  $("#template-search, #template-search button.close").on(
    "click keyup",
    function (event) {
      if (
        event.target === this ||
        event.target.className === "close" ||
        event.keyCode === 27
      ) {
        $(this).removeClass("open");
      }
    }
  );

  /*-------------------------------------
    Mobile Menu Toggle
    -------------------------------------*/
    $(".sidebarBtn").on("click", function (e) {
      e.preventDefault();
      if ($(".rt-slide-nav").is(":visible")) {
        $(".rt-slide-nav").slideUp();
        $("body").removeClass("slidemenuon");
      } else {
        $(".rt-slide-nav").slideDown();
        $("body").addClass("slidemenuon");
      }
    });
  
  /*=====================================
  //	Select
  ===================================*/
  let rtSelect = $(".rt-select");

  if (rtSelect.length) {
    rtSelect.select2({
      // theme: "classic",
      dropdownAutoWidth: true,
      width: "100%",
    });
  }
  /*-------------------------------------
      Mobile Menu Dropdown
    -------------------------------------*/
  let rtMobileMenu = $(".offscreen-navigation .menu");

  if (rtMobileMenu.length) {
    rtMobileMenu.children("li").addClass("menu-item-parent");
    rtMobileMenu.find(".menu-item-has-children > a").on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("opened");
      let n = $(this).next(".sub-menu"),
        s = $(this).closest(".menu-item-parent").find(".sub-menu");
      rtMobileMenu
        .find(".sub-menu")
        .not(s)
        .slideUp(250)
        .prev("a")
        .removeClass("opened"),
        n.slideToggle(250);
    });
    rtMobileMenu
      .find(".menu-item:not(.menu-item-has-children) > a")
      .on("click", function (e) {
        $(".rt-slide-nav").slideUp();
        $("body").removeClass("slidemenuon");
      });
  }




      /*-------------------------------------
        Product View
    -------------------------------------*/
    $('.product-view-trigger').on('click', function (e) {
      var self = $(this),
          data = self.attr("data-type"),
          target = $("#product-view");
      self.parents('.layout-switcher').find('li.active').removeClass('active');
      self.parent('li').addClass('active');
      target.children('.row').find('>div').animate({
          opacity: 0,
      }, 200, function () {
          if (data === "product-box-grid") {
              target.removeClass('product-box-list');
              target.addClass('product-box-grid');
          } else if (data === "product-box-list") {
              target.removeClass('product-box-grid');
              target.addClass('product-box-list');
          }
          target.children('.row').find('>div').animate({
              opacity: 1,
          }, 100);
      });
      e.preventDefault();
      return false;
  });


  /*------------------------------
   // Tooltip
   ------------------------------*/
   $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip({
      offset: [0, 5],
    });
  });

  

  /*-------------------------------------
    Location Slider
    -------------------------------------*/

    var swiper1 = new Swiper(".rt-categories-slider", {
      spaceBetween: 44,
      slidesPerView: 6,
      speed: 1000,
      loop: true,
      // autoplay: {
      //     delay: 5000,
      //     disableOnInteraction: false,
      // },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

     /*-------------------------------------
     Testimonial Slider
    -------------------------------------*/
    var swiper2 = new Swiper(".rt-testimonial-slider", {
      spaceBetween: 24,
      slidesPerView: 2,
      speed: 1000,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        374: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });

      /*-------------------------------------
     Testimonial Slider
    -------------------------------------*/
    if ($(".rt-testimonial-slider-2")) {
      $(".rt-testimonial-slider-2").each(function () {
        let __swiperSlider = $(this)[0];
        let btnPrev = $(this)
          .closest(".rtMainWrap")
          .find(".swiper-button-next")[0];
        let btnNext = $(this)
          .closest(".rtMainWrap")
          .find(".swiper-button-prev")[0];
        new Swiper(__swiperSlider, {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 24,
          slideToClickedSlide: true,
          // autoplay: {
          //   delay: 5000,
          //   disableOnInteraction: false,
          // },
          speed: 800,
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 1,
            },
          },
          navigation: {
            nextEl: btnPrev,
            prevEl: btnNext,
          },
        });
      });
    }
 
/*-------------------------------------
     Brand Slider
    -------------------------------------*/
    var swiper3 = new Swiper(".rt-brand-slider", {
      spaceBetween: 58,
      slidesPerView: 5,
      speed: 1000,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        374: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });
 

/* ===================================
   PopUp
  ======================================= */

var yPopup = $(".play-btn");
if (yPopup.length) {
    yPopup.magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
}

/*-------------------------------------
    // Price range filter 
    -------------------------------------*/
    let priceSlider = document.getElementById("distance-range-filter");
    if (priceSlider) {
        noUiSlider.create(priceSlider, {
            start: [30, 130],
            connect: true,
            range: {
                min: 0,
                max: 200,
            },
            format: wNumb({
                decimals: 0,
            }),
        });
        let marginMin = document.getElementById("distance-range-min"),
            marginMax = document.getElementById("distance-range-max");
        priceSlider.noUiSlider.on("update", function(values, handle) {
            if (handle) {
                marginMax.innerHTML = "" + values[handle]??'';
            } else {
                marginMin.innerHTML = "" + values[handle]??'';
            }
        });
    }


    /*-------------------------------------
  Calender
  -------------------------------------*/
  $(".selector").flatpickr({
    dateFormat: "d-m-Y",
    disableMobile: "true",
  });

   /*=================================
   // counter up
   ==================================*/
   let counter = true;
   $(".counter-appear").appear();
   $(".counter-appear").on("appear", function () {
     if (counter) {
       // Only number counter
       $(".counterUp").each(function () {
         let $this = $(this);
         jQuery({
           Counter: 0,
         }).animate(
           {
             Counter: $this.attr("data-counter"),
             Hover: $this.attr("data-hover"),
           },
           {
             duration: 1000,
             easing: "swing",
             step: function () {
               let num = Math.ceil(this.Counter).toString();
               if (Number(num) > 99999999) {
                 while (/(\d+)(\d{8})/.test(num)) {
                   num = num.replace(/(\d+)(\d{8})/, "");
                 }
               }
               $this.html(num);
             },
           }
         );
       });

 
       // with skill bar
       $(".skill-per").each(function () {
         let $this = $(this);
         let per = $this.attr("data-per");
         $this.css("width", per + "%");
         $({ animatedValue: 0 }).animate(
           { animatedValue: per },
           {
             duration: 500,
             step: function () {
               $this.attr("data-per", Math.floor(this.animatedValue) + "%");
             },
             complete: function () {
               $this.attr("data-per", Math.floor(this.animatedValue) + "%");
             },
           }
         );
       });
 
       counter = false;
     }
   });

		
  /*==============================
   //  Back to Top
   ===============================*/
  // Back to top
  var amountScrolled = 200;
  var amountScrolledNav = 25;

  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
      $('button.scroll-to-top').addClass('show');
    } else {
      $('button.scroll-to-top').removeClass('show');
    }
  });

  $('button.scroll-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
});

      
  /*-------------------------------------
  //Contact Form initiating
  -------------------------------------*/
  let contactForm = $(".rt-contact-form");
  if (contactForm.length) {
    contactForm.each(function () {
      let innerContactForm = $(this);
      innerContactForm.validator().on("submit", function (e) {
        let $this = $(this),
          $target = innerContactForm.find(".form-response");
        if (e.isDefaultPrevented()) {
          $target.html(
            "<div class='alert alert-danger'><p>Please select all required field.</p></div>"
          );
        } else {
          $.ajax({
            url: "php/mailer.php",
            type: "POST",
            data: innerContactForm.serialize(),
            beforeSend: function () {
              $target.html(
                "<div class='alert alert-info'><p>Loading ...</p></div>"
              );
            },
            success: function (response) {
              if (response == "success") {
                $this[0].reset();
                $target.html(
                  "<div class='alert alert-success'><p>Message has been sent successfully.</p></div>"
                );
              } else {
                res = JSON.parse(response);
                if (res.message.length) {
                  let messages = null;
                  res.message.forEach(function (message) {
                    messages += "<p>" + message + "</p>";
                  });
                  $target.html(
                    "<div class='alert alert-success'><p>" +
                      messages +
                      "</p></div>"
                  );
                }
              }
            },
            error: function () {
              $target.html(
                "<div class='alert alert-success'><p>Error !!!</p></div>"
              );
            },
          });
          return false;
        }
      });
    });
  }
  
  /*==============================
   //  WOW
   ===============================*/
  let wow = new WOW({
    boxClass: "wow",
    animateClass: "animate__animated",
    offset: 0,
    mobile: false,
    live: true,
    scrollContainer: null,
  });
  wow.init();

  
})(jQuery);






