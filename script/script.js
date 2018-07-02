$(document).ready(function () {

    setTimeout(function () {
        $('.nav__homeButton, .nav__menuButtonWrapper').css("opacity", "1");
    }, 2500);

    setTimeout(function () {
        $('.about__name').addClass('borderName');
    }, 2000);
        setTimeout(function () {
        $('.aboutMobile__name').addClass('borderName');
    }, 2000);

    $('.nav__menuButton').click(function () {
        $('.nav__nav').toggleClass('open');
        $('.nav__menuButtonItem').toggleClass('active');
        $('.nav__menuButtonItem').toggleClass('color');
    

    })

    $('.nav__nav li').click(function () {
        $('.nav__nav').toggleClass('open');
        $('.nav__menuButtonItem').toggleClass('active');
        $('.nav__menuButtonItem').toggleClass('color');

    })
});
