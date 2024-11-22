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
        message: `&#x2714; Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        color: '#59A10D',
        messageColor: '#fff',
      });
    })
    .catch(delay => {
      iziToast.show({
        message: `&#x2716; Rejected promise in ${delay}ms`,
        position: 'topRight',
        color: '#EF4040',
        messageColor: '#fff',
      });
    });

  event.target.reset();
}
