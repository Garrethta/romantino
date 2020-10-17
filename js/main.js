$(function () {

    $('.header__top-choosecity-link').magnificPopup({
    });

    $('.banner-slider__items-inner').slick({
        arrows: false,
        dots: true,
        dotsClass: 'banner-slider__dots',
        autoplay: true
    })

    $('.reviews__slider-items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="reviews-arrow-prev arrow-prev"></div>',
        nextArrow: '<div class="reviews-arrow-next arrow-next"></div>',
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    arrows: false,
                    infinite: true,
                    dots: true,
                    dotsClass: 'reviews__dots',
                }
            },
            {
                breakpoint: 1245,
                settings: {
                    arrows: false,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    dotsClass: 'reviews__dots',
                }
            },
            {
                breakpoint: 945,
                settings: {
                    arrows: false,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    dotsClass: 'reviews__dots',
                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    dotsClass: 'reviews__dots',
                }
            }
        ]
    })


   

    $('.product__slider-items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="product-arrow-prev arrow-prev"></div>',
        nextArrow: '<div class="product-arrow-next arrow-next"></div>',
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    arrows: false,
                    infinite: true,
                    dots: true,
                    dotsClass: 'reviews__dots',
                }
            },
            {
                breakpoint: 1245,
                settings: {
                    arrows: false,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    dotsClass: 'reviews__dots',
                }
            },
            {
                breakpoint: 945,
                settings: {
                    arrows: false,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    dotsClass: 'reviews__dots',
                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    dotsClass: 'reviews__dots',
                }
            }
        ]
    })

   

    $("[data-tooltip]").mousemove(function (eventObject) {

        $data_tooltip = $(this).attr("data-tooltip");

        $(".tooltip").text($data_tooltip)
            .css({
                "top": eventObject.pageY + 5,
                "left": eventObject.pageX + 5
            })
            .show();

    }).mouseout(function () {

        $(".tooltip").hide()
            .text("")
            .css({
                "top": 0,
                "left": 0
            });
    });

    $('.header__center-search__list').on('mousedown', function () {
        return false;
    });

    $(".js-range-slider").ionRangeSlider();

    $('.custom').styler();

    $('.filter__list-item__search-checkbox').mCustomScrollbar();

    $('.catalog-panel-mobile-filter-btn').on('click', function () {
        $('.catalog-panel-mobile-filter').toggleClass('catalog-panel-mobile-filter--active')
    })

    $('.catalog__product-list__item-basket').on('click', function () {
        $(this).toggleClass('basket-accepted')
    })

    $('.catalog__pagination-item').on('click', function () {
        $($(this)).siblings().removeClass('pagination-active')
        $(this).addClass('pagination-active')
    })

    $('.aside__slide-title').on('click', function () {
        $(this).toggleClass('aside__slide-title--active')
        $($(this)).next().slideToggle()
    })
    $('.product-page__content-top__favorite').on('click', function () {
        $(this).toggleClass('product-page__content-top__favorite--active')
    })

    $('.product-page__content-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-page__content-img__slider'
    });
    $('.product-page__content-img__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-page__content-img',
        centerMode: true,
        focusOnSelect: true
    });

    $('.product-page__content-specifications-form--tel').mask('+7 (999) 999-99-99');

    $('.catalog__product-list__item-text--question').hover(function () {
        $($(this)).find('.catalog__product-list__item-text--question-info').toggleClass('question--active')
    })

    $('.product__slider-items--triple').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="product-arrow-prev arrow-prev"></div>',
        nextArrow: '<div class="product-arrow-next arrow-next"></div>',
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    arrows: false,
                    infinite: true,
                    dots: true,
                    dotsClass: 'reviews__dots',
                }
            },
            {
                breakpoint: 1245,
                settings: {
                    arrows: false,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true,
                    dotsClass: 'reviews__dots',
                }
            },
            {
                breakpoint: 945,
                settings: {
                    arrows: false,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    dotsClass: 'reviews__dots',
                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    dotsClass: 'reviews__dots',
                }
            }
        ]
    })


    $('.product__slider-item__favorite').on('click', function () {
        $(this).toggleClass('product__slider-item__favorite--checked')
    })

    $('.basket-page__table-content-products-item-text a').magnificPopup({
    });

    if ($(window).width() < 700) {

        $('.header__center-search input').attr('placeholder', 'Поиск')
    }

    $('.header__mobile-menu-btn').on('click', function () {
        $('.header__mobile-menu-drop').slideDown()
    })
    $('.header__mobile-menu-drop-closebtn').on('click', function () {
        $('.header__mobile-menu-drop').slideUp()
    })

    $('.header__mobile-catalog').on('click', function () {
        $('.header__mobile-catalog-drop').slideToggle()
    })

    $('.header__mobile-catalog-drop-title').on('click', function () {
        $(this).toggleClass('header__mobile-catalog-drop-title-active')
        $($(this)).next().slideToggle()
    })

    $('.catalog__mobile-page-swap--disabled').on('click', function(e){
        e.preventDefault()
    })

});
