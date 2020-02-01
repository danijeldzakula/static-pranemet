$(document).ready(function() {
    var menuOpen = $('.menu-open');
    var menuClose = $('.menu-close');
    var glHeader = $('.gl-header');

    menuOpen.on('click', function() {
        glHeader.toggleClass('menu-opened');
    });

    menuClose.on('click', function() {
        glHeader.removeClass('menu-opened');
    });

    $('#carousel-advantages').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0',
        dots: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 560,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }]
    });

    $('#add-product').on('click', function(e) {
        e.preventDefault();
        if (!$(this).hasClass('disabled')) {
            $(this).data('id', $('.carousel-products').find('.active').data('id'));
            $(this).data('a', 'add');
            client.dataCollector($(this), 'basket');
        }
    });

    $('#carousel-products').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        dots: false,
        focusOnSelect: true
    });

    $('#carousel-products').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.carousel-products .colors li.active').removeClass('active');
        $('.carousel-products .colors li').eq(nextSlide).addClass('active');
    });

    $('.carousel-products .colors li').on('click', function() {
        $('#carousel-products').slick('slickGoTo', $(this).data('index'));
    });

    $('#carousel-reviews').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0',
        dots: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1000,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                slidesToScroll: 1,
                slidesToShow: 2
            }
        }, {
            breakpoint: 700,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0',
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }]
    });

    $('#carousel-press').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        dots: false,
        focusOnSelect: true
    });

});