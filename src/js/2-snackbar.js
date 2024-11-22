import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const delay = event.target.elements.delay.value;
  const state = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.show({
        title: 'OK',
        titleColor: '#ffffff',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        color: '#59A10D',
        messageColor: '#fff',
        iconUrl: '../img/ok.svg',
        iconColor: '#ffffff',
      });
    })
    .catch(delay => {
      iziToast.show({
        title: 'Error',
        titleColor: '#ffffff',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
        color: '#EF4040',
        messageColor: '#fff',
        iconUrl: '../img/error.svg',
        iconColor: '#ffffff',
      });
    });

  event.target.reset();
}
