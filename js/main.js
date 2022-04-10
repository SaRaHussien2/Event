/* global $ , alert, console */

$(function () {
    var myHeader = $('.header');
    myHeader.height($(window).height());
    $(window).resize( function () {
    myHeader.height($(window).height());
    });

//li add active class

        $('.image-logo').click(function (){
            $(this).addClass('right').siblings().removeClass('image-logo');
        });



//menu-icon toggle

        $('.nav div a').click(function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: $('#' + $(this).data('scroll')).offset().top - 70
            }, 1000,(function () {
                    if ($(document).width() <= 768) {
                        $('.nav .right').slideUp('slow');
                        
                    } 
            }));
        });

//to slide up the u li after choose a data-scroll type

        $('.head-logo i').click(function () {
            $('.right ').slideToggle(function () {
            $('.nav .first-home').slideToggle();
              });
        });


        $('.right ul li').click(function (){
            $(this).addClass('active').siblings().removeClass('active');
        });



        
 // scroll up
// button  UP

    var ScrollUp = $('.scroll-up');
    $(window).scroll(function () {

        // will appear
        if ($(window).scrollTop() >= 600) {
            ScrollUp.fadeIn(500);
        }

        // disappear
        else{
            ScrollUp.fadeOut();}
         });

        // UP go to top
        $('.scroll-up').click(function () {
            $('html,body').animate({
                scrollTop : 0 
            }, 2000);
        });

});

