import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate = null;
const startButton = document.querySelector('button[data-start]');
const inputDate = document.querySelector('#datetime-picker');
startButton.disabled = true;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    ///validation
    if (selectedDates[0].getTime() <= Date.now()) {
      iziToast.show({
        message: 'Please choose a date in the future',
        position: 'topRight',
        color: '#EF4040',
        messageColor: '#fff',
        icon: 'img',
        iconUrl: '/img/error.png',
      });
      startButton.disabled = true;
      return;
    }
    startButton.disabled = false;
    startButton.classList.add('button-normal');

    userSelectedDate = selectedDates[0];
  },
};

startButton.addEventListener('click', clickHandler);

function clickHandler() {
  startButton.disabled = true;
  inputDate.disabled = true;

  const intervalId = setInterval(() => {
    const ms = userSelectedDate.getTime() - Date.now();
    if (ms <= 0) {
      inputDate.disabled = false;
      clearInterval(intervalId);
      return;
    }
    const currentTime = convertMs(ms);
    Object.keys(currentTime).forEach(key => {
      document.querySelector(`.value[data-${key}]`).textContent =
        addLeadingZero(currentTime[key]);
    });
  }, 1000);
}

flatpickr('#datetime-picker', options);
