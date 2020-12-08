;(function($){
    "use strict";
    jQuery(document).ready(function(){
        // ### AOS init ### //
        AOS.init({
            disable: 'mobile'
        });
        // ### Testimonial Slider ### //
        if($('.testimonial-slider').length){
            var swiper = new Swiper('.testimonial-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true
                },
                speed: 1200,
                loop: true,
                pagination: {
                    el: '.testimonial-pagination',
                    clickable: true
                },
                on: {
                    slideChangeTransitionStart: function(){
                        $('.testimonial .img-testimonial, .testimonial h5, .testimonial span, .testimonial p').removeClass('aos-init').removeClass('aos-animate');
                    },
                    slideChangeTransitionEnd: function(){
                        AOS.init();
                    },
                },
            });
            $('.testimonial-slider').hover(function(){
                (this).swiper.autoplay.stop();
            },
            function(){
                (this).swiper.autoplay.start();
            });
        }
        // ### Customer Slider ### //
        if($('.customer-slider').length){
            var swiper = new Swiper('.customer-slider', {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: true
                },
                speed: 900,
                loop: true,
                slidesPerView: 6,
                breakpoints: {
                    1200: {
                        slidesPerView: 5
                    },
                    950: {
                        slidesPerView: 4
                    },
                    650: {
                        slidesPerView: 3
                    },
                    350: {
                        slidesPerView: 2
                    },
                    50: {
                        slidesPerView: 1
                    }
                }
            });
            $('.customer-slider').hover(function(){
                (this).swiper.autoplay.stop();
            },
            function(){
                this.swiper.autoplay.start();
            });
        }
    });
})(jQuery)