$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        autoplay: true,
        prevArrow: ' <button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow_left.svg" alt=""></button>',
        nextArrow: ' <button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow_right.svg" alt=""></button>'
    });

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $('.tab').removeClass('tab--active');
        $('.tabs-content').removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

    $('.product-item__favorite').on('click', function () {
        $('.product-item__favorite').toggleClass('product-item__favorite--active');
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: ' <button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black_left.svg" alt=""></button>',
        nextArrow: ' <button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black_right.svg" alt=""></button>'
    });


});