'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import errorImage from '../img/error.png';
import cautionImage from '../img/caution.png';

iziToast.settings({
  timeout: 5000,
  resetOnHover: true,
  icon: 'material-icons',
  animateInside: false,
  transitionIn: 'fadeIn',
  transitionOut: 'fadeOut',
  position: 'topRight',
  titleColor: '#fff',
  titleLineHeight: '24',
  backgroundColor: '#ef4040',
  progressBarColor: '#b51b1b',
  messageColor: '#fff',
  messageSize: '16',
  messageLineHeight: '24',
});

// Функция вывода сообщений об ошибках
export function message(textMessage) {
  iziToast.error({
    class: 'error_message',
    iconUrl: `${errorImage}`,
    message: textMessage,
  });
}

export function messageInfo(textMessage) {
  iziToast.info({
    class: 'caution_message',
    iconUrl: `${cautionImage}`,
    message: textMessage,
  });
}
