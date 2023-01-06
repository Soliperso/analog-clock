const DEG = 6;
const hours = document.querySelector('#hour');
const minutes = document.querySelector('#minute');
const seconds = document.querySelector('#second');

setInterval(() => {
  const day = new Date();

  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * DEG;
  let ss = day.getSeconds() * DEG;

  hours.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minutes.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;

  document.querySelector('#digital-clock__text').innerHTML = day.toLocaleTimeString();
}, 1000);
  