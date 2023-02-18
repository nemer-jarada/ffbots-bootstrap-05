$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).scrollTop() > 60 && $(window).width() > 767) {
            $('.header').removeClass('position-relative bg-transparent').addClass('stick')
        } else {
            $('.header').removeClass('stick')
        }
    });

    // Owl
    $('.slider-img').owlCarousel({
        rtl: true,
        loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1500,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});