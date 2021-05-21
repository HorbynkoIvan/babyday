'use strict';

import './../scss/common.scss';

import $ from 'jquery';
import 'slick-carousel';

window.$ = window.jQuery = $;

window.addEventListener('DOMContentLoaded', () => {

    $('.info1 .info_wrapper').click(function(){
        window.location.href='https://pampik.com/ua/promo/rozygrys-kolyaski-babyzen';
    });

    $('.info2 .info_wrapper').click(function(){
        window.location.href='https://pampik.com/ua/promo/rozygrys-lukan-hypersport';
    });

    $('.info3 .info_wrapper').click(function(){
        window.location.href='https://pampik.com/ua/promo/rozygrys-parovarka-philips-avent';
    });

})