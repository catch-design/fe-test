var $ = require("jquery");
import Swiper from 'swiper';
console.log('swiper loaded');

$(document).ready(function () {
    
    //initialize swiper when document ready
    var mySwiper = new Swiper ('#gallery-container', {
        roundLengths: true,
        effect: 'slide',
        speed: 600,
        spaceBetween: 10,
        grabCursor: true,
        slidesPerView: 'auto',
        freeMode: true,
        freeModeMomentum: true,
        autoplay: {
          delay: 6000,
        },
        // breakpoints: {
        //     // when window width is <= 320px
        //     320: {
        //       slidesPerView: 1,
        //       spaceBetween: 10
        //     },
        //     // when window width is <= 480px
        //     480: {
        //       slidesPerView: 2,
        //       spaceBetween: 20
        //     },
        //     // when window width is <= 640px
        //     640: {
        //       slidesPerView: 3,
        //       spaceBetween: 30
        //     }
        //   }
    });
});
