; (function ($) {
    "use strict";

    $(document).ready(function () {
        

        /*---------------------------
            Testimonial carousel
        ---------------------------*/

        /*---------------------------
                   price carousel Four
        ---------------------------*/
        $('.testimonial-slider').owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            margin: 140,
            autoplay: true,
            navText: ['<', '>'],
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                },
                600: {
                    items: 1,
                    margin: 10,
                },
                768: {
                    items: 1,
                    margin: 10,
                },
                992: {
                    items: 1,
                },
                1024: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1366: {
                    items: 1
                },
                1440: {
                    items: 1
                }
            }
        })
        

 





$('.slider-i0').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    margin: 20,
    autoplay: true,
    navText: ['<', '>'],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1024: {
            items: 2
        },
        1200: {
            items: 3
        },
        1366: {
            items: 3
        },
        1440: {
            items: 3
        }
    }
})


});


   
    //define variable for store last scrolltop
    var lastScrollTop = '';

    $(window).on('scroll', function () {

        //back to top show/hide
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        /*--------------------------
         sticky menu activation
        -------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');

            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }

        lastScrollTop = st;

    });
    if ($(window).width() < 769) {
        var scrollPos = 0;

        window.addEventListener("scroll", function () {
            if (document.body.getBoundingClientRect().top > scrollPos) {
                $(".floating-icon").removeClass("show-up-form-icons");
            } else {
                $(".floating-icon").addClass("show-up-form-icons");
            }
            scrollPos = document.body.getBoundingClientRect().top;
        });
    }

    // alert($(window).width());
    $(window).on('load', function () {
        // Pagination Page

        var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
        $('.cdp_i').on('click', function () {
            var go = $(this).attr('href').replace('#!', '');
            if (go === '+1') {
                paginationPage++;
            } else if (go === '-1') {
                paginationPage--;
            } else {
                paginationPage = parseInt(go, 10);
            }
            $('.cdp').attr('actpage', paginationPage);
        });
        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });


        // Nice scroll js
        $(".terms-area").niceScroll(".terms-wraper", {
            cursorcolor: "#0194b9",
            cursorwidth: "10px",
        });

      

    });



})(jQuery); 