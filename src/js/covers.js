'use strict'


const animation = {
    section: document.querySelector('#covers'),
    imagesLists: document.querySelectorAll('.projects-list'),
    checkViewport(event) {
        event.preventDefault();
        
        const distance = {
            top: animation.section.getBoundingClientRect().top - window.innerHeight,
            down: animation.section.getBoundingClientRect().bottom,
        }
        if (distance.top <= 0 && distance.down >= 0) {
        animation.imagesLists.forEach(list => {
          list.classList.add('active-list-animation');
        })
      } else {
        animation.imagesLists.forEach(list => {
          list.classList.remove('active-list-animation');
        }) 
      }
    }
}

document.addEventListener('scroll', animation.checkViewport);
