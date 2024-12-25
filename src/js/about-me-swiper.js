   
'use strict';
import 'swiper/css';

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const swiper = new Swiper('.custom-swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,

  navigation: {
    nextEl: '.skills-swiper-btn-next',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  mousewheel: true,

  on: {
    slideChange: function () {
      const nextButton = document.querySelector('.skills-swiper-btn-next');
      
      const items = document.querySelectorAll('.swiper-skills-list-items');
      items.forEach(item => item.classList.remove('chosen'));
      const activeIndex = swiper.realIndex; 
      items[activeIndex].classList.add('chosen');
    },
  },
});

    