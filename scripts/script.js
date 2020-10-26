; (function () {
    "use strict";
    // floatingIcon
    $(document).ready(function () {

        /**-----------------------------
             *  Navbar fix
             * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })

        /**-----------------------------
         *  countdown
         * ---------------------------*/
        if ($("#mycountdown").length > 0) {
            $("#mycountdown").countdown("2020/09/20", function (event) {

                $('.days').text(
                    event.strftime('%D')
                );
                $('.hours').text(
                    event.strftime('%H')
                );
                $('.mins').text(
                    event.strftime('%M')
                );
                $('.secs').text(
                    event.strftime('%S')
                );
            });

        }
        /**-----------------------------
                       *  Popup
               * ---------------------------*/
        $('.info-popup').on('click', function () {
            $(this).removeClass('active');
            $('.info-popup-content').removeClass('active');
        })
        $('.location-popup').on('click', function () {
            $(this).removeClass('active');
            $('.location-popup-content').removeClass('active');
        })
        $('.message-popup').on('click', function () {
            $(this).removeClass('active');
            $('.message-popup-content').removeClass('active');
        })



        $(".floating-icon-info").on("click", function () {
            $(".info-popup").toggleClass("active");
            $(".info-popup-content").toggleClass("active");
            $(".location-popup-content").removeClass("active");
            $(".message-popup-content").removeClass("active");
            $(".location-popup").removeClass("active");
            $(".message-popup").removeClass("active");
        });
        $(".info-popup-content_close").on("click", function () {
            $(this)
                .parent()
                .removeClass("active");
            $('.info-popup').removeClass('active')
        });

        $(".floating-icon-location").on("click", function () {
            $(".location-popup").toggleClass("active");
            $(".location-popup-content").toggleClass("active");
            $(".info-popup-content").removeClass("active");
            $(".message-popup-content").removeClass("active");
            $(".message-popup").removeClass("active");
            $(".info-popup").removeClass("active");
        });
        $(".location-popup-content_close").on("click", function () {
            $(this)
                .parent()
                .removeClass("active");
            $('.location-popup').removeClass('active')
        });

        $(".floating-icon-message").on("click", function () {
            $(".message-popup").toggleClass("active");
            $(".message-popup-content").toggleClass("active");
            $(".location-popup-content").removeClass("active");
            $(".info-popup-content").removeClass("active");
            $(".info-popup").removeClass("active");
            $(".location-popup").removeClass("active");
        });
        $(".message-popup-content_close").on("click", function () {
            $(this)
                .parent()
                .removeClass("active");
            $('.message-popup').removeClass('active');
        });

        /*---------------------------
             Mobile Cross Menu
       -----------------------------*/
        $(document).on('click', '.cross-menu', function (e) {
            e.preventDefault();
            $(this).toggleClass("change");
        })

        /*---------------------------
             Mobile Sign In Menu
       -----------------------------*/
        $(document).on('click', '.user-account', function (e) {
            e.preventDefault();
            $(this).toggleClass("change");
            $(".click-singin-box").toggleClass("show");
            return false;
        })
        /*---------------------------
           Mobile Search Menu
     -----------------------------*/
        $(document).on('click', '.mobile-search', function (e) {
            e.preventDefault();
            $(this).toggleClass("change");
            $(".click-mobile-search").toggle("slow");
            return false;
        })

        /**-----------------------------
         *  sidenavbar fix
         * ---------------------------*/
        var navButton = document.querySelector('.navigation-button');
        var navMenu = document.querySelector('.navigation-menu');
        var win = window;

        function openMenu(event) {

            navButton.classList.toggle('active');
            navMenu.classList.toggle('active');

            event.preventDefault();
            event.stopImmediatePropagation();
        }

        function closeMenu(event) {
            if (navButton.classList.contains('active')) {
                navButton.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
        navButton.addEventListener('click', openMenu, false);

        win.addEventListener('click', closeMenu, false);


        /*----------------------------------------
                    product quantity count
                ------------------------------------------*/

        $(document).on('click', ".increase", function () {
            var el = $(this);
            var value = el.prev('.quantity').children('input').val();

            el.prev('.quantity').children('input').val(++value);



        });
        $(document).on('click', ".decrease", function () {
            var el = $(this);

            var value = el.next('.quantity').children('input').val();
            // console.log("isclicked !",value );
            if (value > 1) {
                el.next('.quantity').children('input').val(--value);
            }
        })
        /*--------------------
           wow js init
       ---------------------*/
        new WOW().init();

        /*-------------------------
            magnific popup activation
        -------------------------*/
        $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'video'
        });

        /*------------------
           back to top
       ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
        /*===================================
            ScrollBottom
        =====================================*/
        $(".scroll-next").click(() => {

            $('html, body').animate({
                scrollTop: $(window).height(),
            },
                'linear'
            )
        })

        // Image Thumb

        $(".single-thumbnail-item img").click(function () {
            $(".slider-item img").attr("src", $(this).attr("src").replace());
        });

        // Cart Product Delete Config
        var cartProductDeleteBtn = $('.product-delete-btn');
        cartProductDeleteBtn.on('click', function (e) {
            e.preventDefault();
            $(this).parent().parent().remove();
        });

        /*------------------------------
           counter section activation
       -------------------------------*/
        var counternumber = $('.count-num');
        counternumber.counterUp({
            delay: 20,
            time: 3000
        });

        /*-------------------------------
            Shop Masonary filter 
        ---------------------------------*/
        var $Container = $('.shop-masonry');
        if ($Container.length > 0) {
            $('.shop-masonry').imagesLoaded(function () {
                var festivarMasonry = $Container.isotope({
                    itemSelector: '.masonry-item', // use a separate class for itemSelector, other than .col-
                    layoutMode: 'fitRows',

                });
                $(document).on('click', '.shop-menu li', function () {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
            $(document).on('click', '.shop-menu li', function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        }





        /*---------------------------
           Showcase carousel
        ---------------------------*/
        $('.showcase-slider-section').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 5000,
            dots: false,
            // fade: true,
            prevArrow: '<span class="slick-prev"><img class="prev-arrow" src="assets/img/icon/prev.svg"></span>',
            nextArrow: '<span class="slick-next"><img class="prev-arrow" src="assets/img/icon/next.svg"></span>',
            appendArrows: $('.banner-slider-controls .slider-nav'),
        });


        $('.showcase-slider-section').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            ++nextSlide;
            var NextImgSrc = $('.showcase-slider-section .slick-slide[data-slick-index="' + nextSlide + '"]').find('.showcase-img').css('background-image');
            $('.showcase-slider-content').children('.side-img').css('background-image', NextImgSrc);
        });

        // On before slide change pagenation
        $('.showcase-slider-section').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var testSlider = $('.showcase-slider-section').slick('getSlick');
            var totalSlide = testSlider.$slides.length;
            var currentSliderIndex = nextSlide;
            ++currentSliderIndex;
            var progress = 100 / totalSlide;
            var progressWidth = progress * currentSliderIndex;
            ProgressbarStartOne(progressWidth)
            $('.banner-slider-controls .total-controller').text(check_number(totalSlide));
            $('.banner-slider-controls .active-controller').text(check_number(currentSliderIndex));
        });
        $('.showcase-slider-section').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

            ++nextSlide;
            var NextImgSrc = $('.showcase-slider-section .slick-slide[data-slick-index="' + nextSlide + '"]').find('.showcase-img').css('background-image');
            $('.showcase-slider-content').children('.side-img').css('background-image', NextImgSrc).addClass('animated');
            $('.showcase-slider-content').children('.side-img').data('slider-index-number', nextSlide);

            setTimeout(function () {
                $('.showcase-slider-content').children('.side-img').removeClass('animated');
            }, 1000);

        });

        $('.showcase_slider_four_img').on('click', function () {
            var indexNumber = $(this).data('slider-index-number');
            $('.showcase-slider-section').slick('slickGoTo', indexNumber);
        });

        //all slider init functions

        setNextImageOnInit();

        function setNextImageOnInit() {
            var NextImgSrc = $('.showcase-slider-section .slick-slide[data-slick-index="1"]').find('.showcase-img').css('background-image');
            $('.showcase-slider-content').children('.side-img').css('background-image', NextImgSrc).addClass('animated');
            $('.showcase-slider-content').children('.side-img').data('slider-index-number', '1');

            setTimeout(function () {
                $('.showcase-slider-content').children('.side-img').removeClass('animated');
            }, 1000);
        }

        if ($('.showcase-slider-section').length > 0) {
            var testSlider = $('.showcase-slider-section').slick('getSlick');
            $('.banner-slider-controls .total-controller').text(check_number(testSlider.$slides.length));
            var totalSlide = testSlider.$slides.length;
            var progress = 100 / totalSlide;
            var progressWidth = progress * 1;
            testProgressbarStart(progressWidth);
        }


        /*---------------------------------
            Home Two Showcase carousel
        ---------------------------------*/
        $('.showcase-slider-section-two').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 5000,
            // fade: true,
            prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right"></i></span>',
            appendArrows: $('.banner-slider-controls .slider-nav')
        });





        // Next Img Slider Function
        $('.showcase-slider-section-two').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

            ++nextSlide;
            var NextImgSrc = $('.showcase-slider-section-two .slick-slide[data-slick-index="' + nextSlide + '"]').find('.showcase-img').css('background-image');
            $('.showcase-slider-content').children('.project-content').children('.project-img').css('background-image', NextImgSrc).addClass('animated');
            $('.showcase-slider-content').children('.project-content').children('.project-img').data('slider-index-number', nextSlide);

            setTimeout(function () {
                $('.showcase-slider-content').children('.project-content').children('.project-img').removeClass('animated');
            }, 1000);

        });

        $('.showcase_slider_four_img').on('click', function () {
            var indexNumber = $(this).data('slider-index-number');
            $('.showcase-slider-section-two').slick('slickGoTo', indexNumber);
        });





        // On before slide change pagenation
        $('.showcase-slider-section-two').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var testSlider = $('.showcase-slider-section-two').slick('getSlick');
            var totalSlide = testSlider.$slides.length;
            var currentSliderIndex = nextSlide;
            ++currentSliderIndex;
            var progress = 100 / totalSlide;
            var progressWidth = progress * currentSliderIndex;
            ProgressbarStartTwo(progressWidth)
            $('.banner-slider-controls .total-controller').text(check_number(totalSlide));
            $('.banner-slider-controls .active-controller').text(check_number(currentSliderIndex));
        });





        /*---------------------------
                 Home Four Showcase carousel
        ---------------------------*/
        $('.showcase-slider-section-four').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 5000,
            fade: true,
            prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right"></i></span>',
            appendArrows: $('.banner-slider-controls-four .slider-nav'),
        });

        // Next Img Slider Function
        ShowcaseSliderFourInit();

        function ShowcaseSliderFourInit() {
            var getSlick = $('.showcase-slider-section-four').slick('getSlick');

            var totalSlide = getSlick.slideCount;
            var currentSlideindex = ++getSlick.currentSlide;
            var firstImgIndex = currentSlideindex == totalSlide ? 0 : currentSlideindex;
            ++firstImgIndex;
            var secondImgIndex = firstImgIndex == totalSlide ? 0 : firstImgIndex;;
            ++secondImgIndex;
            var ThirdImgIndex = secondImgIndex == totalSlide ? 0 : secondImgIndex;;
            ++ThirdImgIndex;

            var initClass = $('.showcase-slider-content');
            var firstImgSrc = initClass.find('.slick-slide[data-slick-index="' + firstImgIndex + '"]').find('.showcase-img').length > 0 ? initClass.find('.slick-slide[data-slick-index="' + firstImgIndex + '"]').find('.showcase-img').css('background-image') : initClass.find('.slick-slide[data-slick-index="0"]').find('.showcase-img').css('background-image');
            var secondImgSrc = initClass.find('.slick-slide[data-slick-index="' + secondImgIndex + '"]').find('.showcase-img').length > 0 ? initClass.find('.slick-slide[data-slick-index="' + secondImgIndex + '"]').find('.showcase-img').css('background-image') : initClass.find('.slick-slide[data-slick-index="0"]').find('.showcase-img').css('background-image');
            var thirdImgSrc = initClass.find('.slick-slide[data-slick-index="' + ThirdImgIndex + '"]').find('.showcase-img').length > 0 ? initClass.find('.slick-slide[data-slick-index="' + ThirdImgIndex + '"]').find('.showcase-img').css('background-image') : initClass.find('.slick-slide[data-slick-index="0"]').find('.showcase-img').css('background-image');


            $('.showcase-slider-content').children('.side-next-img').children('.side-img').css('background-image', firstImgSrc).addClass('animated');
            $('.showcase-slider-content').children('.side-next-img').children('.side-img').data('slider-index-number', firstImgIndex);

            $('.showcase-slider-content').children('.side-next-img').children('.side-img-two').css('background-image', secondImgSrc).addClass('animated');
            $('.showcase-slider-content').children('.side-next-img').children('.side-img-two').data('slider-index-number', secondImgIndex);

            $('.showcase-slider-content').children('.side-next-img').children('.side-img-three').css('background-image', thirdImgSrc).addClass('animated');
            $('.showcase-slider-content').children('.side-next-img').children('.side-img-three').data('slider-index-number', ThirdImgIndex);

            setTimeout(function () {
                $('.showcase-slider-content').children('.side-next-img').children('.side-img').removeClass('animated');
                $('.showcase-slider-content').children('.side-next-img').children('.side-img-two').removeClass('animated');
                $('.showcase-slider-content').children('.side-next-img').children('.side-img-three').removeClass('animated');
            }, 1000);
        }


        $('.showcase-slider-section-four').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

            var totalSlide = slick.slideCount;
            var currentSlideindex = ++slick.currentSlide;
            var firstImgIndex = currentSlideindex == totalSlide ? 0 : currentSlideindex;
            ++firstImgIndex;
            var secondImgIndex = firstImgIndex == totalSlide ? 0 : firstImgIndex;;
            ++secondImgIndex;
            var ThirdImgIndex = secondImgIndex == totalSlide ? 0 : secondImgIndex;;
            ++ThirdImgIndex;


            var initClass = $('.showcase-slider-content');
            var firstImgSrc = initClass.find('.slick-slide[data-slick-index="' + firstImgIndex + '"]').find('.showcase-img').length > 0 ? initClass.find('.slick-slide[data-slick-index="' + firstImgIndex + '"]').find('.showcase-img').css('background-image') : initClass.find('.slick-slide[data-slick-index="0"]').find('.showcase-img').css('background-image');
            var secondImgSrc = initClass.find('.slick-slide[data-slick-index="' + secondImgIndex + '"]').find('.showcase-img').length > 0 ? initClass.find('.slick-slide[data-slick-index="' + secondImgIndex + '"]').find('.showcase-img').css('background-image') : initClass.find('.slick-slide[data-slick-index="0"]').find('.showcase-img').css('background-image');
            var thirdImgSrc = initClass.find('.slick-slide[data-slick-index="' + ThirdImgIndex + '"]').find('.showcase-img').length > 0 ? initClass.find('.slick-slide[data-slick-index="' + ThirdImgIndex + '"]').find('.showcase-img').css('background-image') : initClass.find('.slick-slide[data-slick-index="0"]').find('.showcase-img').css('background-image');





            $('.showcase-slider-content').children('.side-next-img').children('.side-img').css('background-image', firstImgSrc).addClass('animated');
            $('.showcase-slider-content').children('.side-next-img').children('.side-img').data('slider-index-number', firstImgIndex);

            $('.showcase-slider-content').children('.side-next-img').children('.side-img-two').css('background-image', secondImgSrc).addClass('animated');
            $('.showcase-slider-content').children('.side-next-img').children('.side-img-two').data('slider-index-number', secondImgIndex);

            $('.showcase-slider-content').children('.side-next-img').children('.side-img-three').css('background-image', thirdImgSrc).addClass('animated');
            $('.showcase-slider-content').children('.side-next-img').children('.side-img-three').data('slider-index-number', ThirdImgIndex);

            setTimeout(function () {
                $('.showcase-slider-content').children('.side-next-img').children('.side-img').removeClass('animated');
                $('.showcase-slider-content').children('.side-next-img').children('.side-img-two').removeClass('animated');
                $('.showcase-slider-content').children('.side-next-img').children('.side-img-three').removeClass('animated');
            }, 1000);

        });



        $('.showcase_slider_four_img').on('click', function () {
            var indexNumber = $(this).data('slider-index-number');
            $('.showcase-slider-section-four').slick('slickGoTo', indexNumber);
        });


        // On before slide change pagenation
        $('.showcase-slider-section-four').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var testSlider = $('.showcase-slider-section-four').slick('getSlick');
            var totalSlide = testSlider.$slides.length;
            var currentSliderIndex = nextSlide;
            ++currentSliderIndex;
            var progress = 100 / totalSlide;
            var progressWidth = progress * currentSliderIndex;
            ProgressbarStartFour(progressWidth)
            $('.banner-slider-controls-four .total-controller').text(check_number(totalSlide));
            $('.banner-slider-controls-four .active-controller').text(check_number(currentSliderIndex));
        });



        /*---------------------------
           Home five Showcase carousel
        ---------------------------*/
        $('.showcase-slider-section-five').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 5000,
            fade: true,
            prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right"></i></span>',
            appendArrows: $('.banner-slider-controls .slider-nav'),
        });

        // Next Img Slider Function

        $('.showcase-slider-section-five').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

            var totalSlide = slick.slideCount;
            var currentSlideindex = ++slick.currentSlide;
            var firstImgIndex = currentSlideindex == totalSlide ? 0 : currentSlideindex;
            ++firstImgIndex;
            var secondImgIndex = firstImgIndex == totalSlide ? 0 : firstImgIndex;;
            ++secondImgIndex;
            var ThirdImgIndex = secondImgIndex == totalSlide ? 0 : secondImgIndex;;
            ++ThirdImgIndex;


            var initClass = $('.showcase-slider-content');
            var firstImgSrc = initClass.find('.slick-slide[data-slick-index="' + firstImgIndex + '"]').find('.showcase-img').length > 0 ? initClass.find('.slick-slide[data-slick-index="' + firstImgIndex + '"]').find('.showcase-img').css('background-image') : initClass.find('.slick-slide[data-slick-index="0"]').find('.showcase-img').css('background-image');
            var secondImgSrc = initClass.find('.slick-slide[data-slick-index="' + secondImgIndex + '"]').find('.showcase-img').length > 0 ? initClass.find('.slick-slide[data-slick-index="' + secondImgIndex + '"]').find('.showcase-img').css('background-image') : initClass.find('.slick-slide[data-slick-index="0"]').find('.showcase-img').css('background-image');
            var thirdImgSrc = initClass.find('.slick-slide[data-slick-index="' + ThirdImgIndex + '"]').find('.showcase-img').length > 0 ? initClass.find('.slick-slide[data-slick-index="' + ThirdImgIndex + '"]').find('.showcase-img').css('background-image') : initClass.find('.slick-slide[data-slick-index="0"]').find('.showcase-img').css('background-image');

            $('.showcase-slider-content').children('.side-img').css('background-image', firstImgSrc).addClass('animated');
            $('.showcase-slider-content').children('.side-img').data('slider-index-number', firstImgIndex);

            $('.showcase-slider-content').children('.side-img-two').css('background-image', secondImgSrc).addClass('animated');
            $('.showcase-slider-content').children('.side-img-two').data('slider-index-number', secondImgIndex);

            $('.showcase-slider-content').children('.side-img-three').css('background-image', thirdImgSrc).addClass('animated');
            $('.showcase-slider-content').children('.side-img-three').data('slider-index-number', ThirdImgIndex);

            setTimeout(function () {
                $('.showcase-slider-content').children('.side-img').removeClass('animated');
                $('.showcase-slider-content').children('.side-img-two').removeClass('animated');
                $('.showcase-slider-content').children('.side-img-three').removeClass('animated');
            }, 1000);

        });

        $('.showcase_slider_four_img').on('click', function () {
            var indexNumber = $(this).data('slider-index-number');
            $('.showcase-slider-section-five').slick('slickGoTo', indexNumber);
        });


        // On before slide change pagenation
        $('.showcase-slider-section-five').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var testSlider = $('.showcase-slider-section-five').slick('getSlick');
            var totalSlide = testSlider.$slides.length;
            var currentSliderIndex = nextSlide;
            ++currentSliderIndex;
            var progress = 100 / totalSlide;
            var progressWidth = progress * currentSliderIndex;
            testProgressbarStart(progressWidth)
            $('.banner-slider-controls .total-controller').text(check_number(totalSlide));
            $('.banner-slider-controls .active-controller').text(check_number(currentSliderIndex));
        });



        if ($('.showcase-slider-section-five').length > 0) {
            var NextImgSrc = $('.showcase-slider-section-five .slick-slide[data-slick-index="1"]').find('.showcase-img').css('background-image');
            $('.showcase-slider-content').children('.side-img').css('background-image', NextImgSrc).addClass('animated');
            $('.showcase-slider-content').children('.side-img').data('slider-index-number', 1);
            var NextImgSrc = $('.showcase-slider-section-five .slick-slide[data-slick-index="2"]').find('.showcase-img').css('background-image');
            $('.showcase-slider-content').children('.side-img-two').css('background-image', NextImgSrc).addClass('animated');
            $('.showcase-slider-content').children('.side-img-two').data('slider-index-number', 2);
            var NextImgSrc = $('.showcase-slider-section-five .slick-slide[data-slick-index="3"]').find('.showcase-img').css('background-image');
            $('.showcase-slider-content').children('.side-img-three').css('background-image', NextImgSrc).addClass('animated');
            $('.showcase-slider-content').children('.side-img-three').data('slider-index-number', 3);

            setTimeout(function () {
                $('.showcase-slider-content').children('.side-img').removeClass('animated');
                $('.showcase-slider-content').children('.side-img-two').removeClass('animated');
                $('.showcase-slider-content').children('.side-img-three').removeClass('animated');
            }, 1000);
        }



        // Gallery carousel
        $(".photography-slider").slick({
            dots: false,
            autoplay: true,
            infinite: true,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right"></i></span>',
            appendArrows: $('.photography-slider-controls .slider-nav'),
            speed: 500,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });

        $('.photography-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var firstNumber = check_number(++nextSlide);
            $('.photography-slider-controls .slider-extra .text .first').text(firstNumber);
            resetProgressbar($('.photography-slider-controls .slider-extra .slider-progress .progress-width'));
        });
        $('.photography-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            startProgressbarOne($('.photography-slider-controls .slider-extra .slider-progress .progress-width'));
        });


        startProgressbarOne($('.photography-slider-controls .slider-extra .slider-progress .progress-width'));

        //progressbar js

        function startProgressbarOne(selector) {
            selector.css({
                width: "100%",
                transition: "width 2000ms"
            });
        }
        function resetProgressbar(selector) {
            selector.css({
                width: "0%",
                transition: "width 0ms"
            });
        }
        var photographySlider = $('.photography-slider').slick('getSlick');
        var photoSliderCount = photographySlider.slideCount;
        $('.photography-slider-controls .slider-extra .text .last').text(check_number(photoSliderCount));

        // On before slide change pagenation
        $('.photography-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var testSlider = $('.photography-slider').slick('getSlick');
            var totalSlide = testSlider.$slides.length;
            var currentSliderIndex = nextSlide;
            ++currentSliderIndex;
            var progress = 100 / totalSlide;
            var progressWidth = progress * currentSliderIndex;
            ProgressbarStartGallery(progressWidth)
            $('.photography-slider-controls .total-controller').text(check_number(totalSlide));
            $('.photography-slider-controls .active-controller').text(check_number(currentSliderIndex));
        });

        // Gallery carousel two
        $(".project-slider-active").slick({
            dots: false,
            autoplay: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right"></i></span>',
            appendArrows: $('.project-slider-controls .slider-nav'),
            speed: 500,
            autoplaySpeed: 2000,
        });

        // On before slide change pagenation
        $('.project-slider-active').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var testSlider = $('.project-slider-active').slick('getSlick');
            var totalSlide = testSlider.$slides.length;
            var currentSliderIndex = nextSlide;
            ++currentSliderIndex;
            var progress = 100 / totalSlide;
            var progressWidth = progress * currentSliderIndex;
            ProgressbarStartGTwo(progressWidth)
            $('.project-slider-controls .total-controller').text(check_number(totalSlide));
            $('.project-slider-controls .active-controller').text(check_number(currentSliderIndex));
        });



        // Gallery carousel three
        $(".photography-slider-three").slick({
            dots: true,
            autoplay: true,
            infinite: true,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3,
            slidesToScroll: 3,
            appendDots: $('.photography-slider-controls .slider-dots'),
            prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right"></i></span>',
            appendArrows: $('.photography-slider-controls .slider-nav'),
            speed: 500,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });

        // Gallery carousel-four
        $(".photography-slider-four").slick({
            dots: false,
            autoplay: true,
            infinite: true,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right"></i></span>',
            appendArrows: $('.photography-slider-controls-four .slider-nav'),
            speed: 500,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });

        // On before slide change pagenation
        $('.photography-slider-four').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var testSlider = $('.photography-slider-four').slick('getSlick');
            var totalSlide = testSlider.$slides.length;
            var currentSliderIndex = nextSlide;
            ++currentSliderIndex;
            var progress = 100 / totalSlide;
            var progressWidth = progress * currentSliderIndex;
            ProgressbarStartGalleryFour(progressWidth)
            $('.photography-slider-controls-four .total-controller').text(check_number(totalSlide));
            $('.photography-slider-controls-four .active-controller').text(check_number(currentSliderIndex));
        });

        /*---------------------------
                  Gallery slider five carousel
               ---------------------------*/

        $('.slider-single').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            // fade: true,
            adaptiveHeight: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            vertical: true,
            useTransform: true,
            speed: 600,
            prevArrow: '<span class="slick-prev"><i class="fas fa-chevron-left"></i></span>',
            nextArrow: '<span class="slick-next"><i class="fas fa-chevron-right"></i></span>',
            appendArrows: $('.gallery-slider-five-controls .slider-nav'),
            cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        });

        $('.slider-thumb')
            .on('init', function (event, slick) {
                $('.slider-thumb .slick-slide.slick-current').addClass('is-active');
            })
            .slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                dots: false,
                focusOnSelect: true,
                infinite: true,
                vertical: true,
                centerPadding: 400,
                arrows: false
            });

        $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
            $('.slider-thumb').slick('slickGoTo', currentSlide);
            var currrentNavSlideElem = '.slider-thumb .slick-slide[data-slick-index="' + currentSlide + '"]';
            $('.slider-thumb .slick-slide.is-active').removeClass('is-active');
            $(currrentNavSlideElem).addClass('is-active');
        });

        $('.slider-thumb').on('click', '.slick-slide', function (event) {
            event.preventDefault();
            var goToSingleSlide = $(this).data('slick-index');

            $('.slider-single').slick('slickGoTo', goToSingleSlide);
        });




        $('.slider-single').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var firstNumber = check_number(++nextSlide);
            $('.gallery-slider-five-controls .slider-extra .text .first').text(firstNumber);
            resetProgressbar($('.gallery-slider-five-controls .slider-extra .slider-progress .progress-width'));
        });
        $('.slider-single').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            startProgressbar($('.gallery-slider-five-controls .slider-extra .slider-progress .progress-width'));
        });


        startProgressbar($('.gallery-slider-five-controls .slider-extra .slider-progress .progress-width'));

        //progressbar js

        function startProgressbar(selector) {
            selector.css({
                width: "100%",
                transition: "width 6000ms"
            });
        }
        function resetProgressbar(selector) {
            selector.css({
                width: "0%",
                transition: "width 0ms"
            });
        }


        var photographySlider = $('.slider-single').slick('getSlick');
        var photoSliderCount = photographySlider.slideCount;
        $('.gallery-slider-five-controls .slider-extra .text .last').text(check_number(photoSliderCount));

        // On before slide change pagenation
        $('.slider-single').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var testSlider = $('.slider-single').slick('getSlick');
            var totalSlide = testSlider.$slides.length;
            var currentSliderIndex = nextSlide;
            ++currentSliderIndex;
            var progress = 100 / totalSlide;
            var progressWidth = progress * currentSliderIndex;
            testProgressbarStart(progressWidth)
            $('gallery-slider-five-controls .total-controller').text(check_number(totalSlide));
            $('.gallery-slider-five-controls .active-controller').text(check_number(currentSliderIndex));
        });







    });

    var lastScrollTop = "";
    var floatingIcon = $("#service_info_item");
    $(window).on("scroll", function () {
        /*---------------------------------------
        sticky menu activation && Sticky Icon Bar
        -----------------------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $(".navbar-area");
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown
                mainMenuTop.removeClass("nav-fixed");
            } else {
                // active sticky menu on scrollup
                mainMenuTop.addClass("nav-fixed");
            }
        } else {
            mainMenuTop.removeClass("nav-fixed ");
        }

        if ($(window).width() < 992) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown
                showFloatingIcon();
            } else {
                // active sticky menu on scrollup
                hideFloatingIcon();
            }
        }
        lastScrollTop = st;

        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }
    });

    $(window).on("resize", function (e) {
        e.preventDefault();
        //floatingIcon
        if ($(window).width() < 768) {
            hideFloatingIcon();
        } else {
            showFloatingIcon();
        }
    });

    function hideFloatingIcon() {
        //floatingIcon
        floatingIcon.hide();
    }

    function showFloatingIcon() {
        //floatingIcon
        floatingIcon.show();
    }
    /*----------------------
                Search Popup
            -----------------------*/
    var bodyOvrelay = $('#body-overlay');
    var searchPopup = $('#search-popup');

    $(document).on('click', '#body-overlay', function (e) {
        e.preventDefault();
        bodyOvrelay.removeClass('active');
        searchPopup.removeClass('active');
    });
    $(document).on('click', '.border-none', function (e) {
        e.preventDefault();
        bodyOvrelay.removeClass('active');
        searchPopup.removeClass('active');
    });
    $(document).on('click', '#search', function (e) {
        e.preventDefault();
        searchPopup.addClass('active');
        bodyOvrelay.addClass('active');
    });

    function testProgressbarStart(progressWidth) {
        $('.banner-slider-controls-four .home-slider-progress-active').css({ 'width': progressWidth + '%' });
    }
    function ProgressbarStartFour(progressWidth) {
        $('.banner-slider-controls-four .home-slider-progress-active').css({ 'width': progressWidth + '%' });
    }
    function ProgressbarStartTwo(progressWidth) {
        $('.banner-slider-controls .home-slider-progress-active').css({ 'width': progressWidth + '%' });
    }
    function ProgressbarStartOne(progressWidth) {
        $('.banner-slider-controls .home-slider-progress-active').css({ 'width': progressWidth + '%' });
    }
    function ProgressbarStartGallery(progressWidth) {
        $('.photography-slider-controls .photography-slider').css({ 'width': progressWidth + '%' });
    }
    function ProgressbarStartGalleryFour(progressWidth) {
        $('.photography-slider-controls-four .home-slider-progress-active').css({ 'width': progressWidth + '%' });
    }
    function ProgressbarStartGTwo(progressWidth) {
        $('.project-slider-controls .home-slider-progress-active').css({ 'width': progressWidth + '%' });
    }


    function check_number(num) {
        var IsInteger = /^[0-9]+$/.test(num);
        return IsInteger ? '0' + num : null;
    }

})(jQuery);