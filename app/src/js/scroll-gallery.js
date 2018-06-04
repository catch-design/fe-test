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
        autoplay: {
          delay: 6000,
        }
    });
});
