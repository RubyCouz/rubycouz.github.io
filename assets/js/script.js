$(document).ready(function () {
    $(".button-collapse").sideNav(); //control de la sidebar
    $('.parallax').parallax(); //control du parallax
    $('.scrollspy').scrollSpy(); //initialisation du scrollSpy
    //gestion du smoothscroll
    $('.js-scrollTo').on('click', function () { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 1000; // Durée de l'animation (en ms)
        $('html, body').animate({scrollTop: $(page).offset().top}, speed); // Go
        return false;
    });
    $('.modal').modal(); // control de la modal
});
AOS.init();


//timeline

// $(function(){
//
//     window.sr = ScrollReveal();
//
//     if ($(window).width() < 768) {
//
//         if ($('.timeline-content').hasClass('js--fadeInLeft')) {
//             $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
//         }
//
//         sr.reveal('.js--fadeInRight', {
//             origin: 'right',
//             distance: '300px',
//             easing: 'ease-in-out',
//             duration: 800,
//         });
//
//     } else {
//
//         sr.reveal('.js--fadeInLeft', {
//             origin: 'left',
//             distance: '300px',
//             easing: 'ease-in-out',
//             duration: 800,
//         });
//
//         sr.reveal('.js--fadeInRight', {
//             origin: 'right',
//             distance: '300px',
//             easing: 'ease-in-out',
//             duration: 800,
//         });
//
//     }
//
//     sr.reveal('.js--fadeInLeft', {
//         origin: 'left',
//         distance: '300px',
//         easing: 'ease-in-out',
//         duration: 800,
//     });
//
//     sr.reveal('.js--fadeInRight', {
//         origin: 'right',
//         distance: '300px',
//         easing: 'ease-in-out',
//         duration: 800,
//     });
//
//
// });
