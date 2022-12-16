window.addEventListener('load', () => {
  const secondHand = document.querySelector('.second-hand');
  const minutesHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  const numCointainer = document.querySelector('.num-cointainer');
  const darkThemeBtn = document.querySelector('.dark-btn');
  const lightThemeBtn = document.querySelector('.light-btn');
  const clockface = document.querySelector('.clock-face');
  const body = document.querySelector('body');
  const centerRoundMin = document.querySelector('.center-round-min');
  const centerRoundSec = document.querySelector('.center-round-sec');

  const weekdayList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const monthList = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  const now = new Date();
  const day = weekdayList[now.getDay()];
  const month = monthList[now.getMonth()];
  const date = now.getDate();

  function setAllNumbers() {
    let numbers = [];
    for (let i = 1; i <= 12; i++) {
      numbers.push(`<div class="num${i}">${i}</div>`);
    }
    numbers.unshift(setAllSlimLines(), setAllFatLines());
    return numbers.join(' ');
  }

  function setAllSlimLines() {
    let slimLines = [];
    for (let i = 0; i <= 59; i++) {
      slimLines.push(
        `<div class="slim-lines${i}" style="transform: rotate(${
          (i / 60) * 360 + 90
        }deg);width: 50.5%;height: 1%;position: absolute;top: 50%;right: 50%;background-color: rgb(92, 90, 90);transform-origin: 100%;"></div>`
      );
    }
    slimLines.push(`<div class="hide-slim-lines"></div>`);
    return slimLines.join(' ');
  }

  function setAllFatLines() {
    let fatLines = [];
    for (let i = 0; i <= 59; i += 5) {
      fatLines.push(
        `<div class="fat-lines${i}" style="transform: rotate(${
          (i / 60) * 360 + 90
        }deg);width: 50.5%;height: 2%;position: absolute;top: 49.5%;right: 50%;background-color: rgb(92, 90, 95);transform-origin: 100%;"></div>`
      );
    }
    fatLines.push(`<div class="hide-fat-lines"></div>`);
    return fatLines.join(' ');
  }

  function darkModeNumbers() {
    let numbers = [];
    for (let i = 1; i <= 12; i++) {
      numbers.push(`<div class="num${i}" style="color: white;">${i}</div>`);
    }
    numbers.unshift(darkModeSlimLines(), darkModeFatLines());
    return numbers.join(' ');
  }

  function darkModeSlimLines() {
    let slimLines = [];
    for (let i = 0; i <= 59; i++) {
      slimLines.push(
        `<div class="slim-lines${i}" style="transform: rotate(${
          (i / 60) * 360 + 90
        }deg);width: 50.5%;height: 1%;position: absolute;top: 50%;right: 50%;background-color: white;transform-origin: 100%;"></div>`
      );
    }
    slimLines.push(
      `<div class="hide-slim-lines" style="background-color: black;"></div>`
    );
    return slimLines.join(' ');
  }

  function darkModeFatLines() {
    let fatLines = [];
    for (let i = 0; i <= 59; i += 5) {
      fatLines.push(
        `<div class="fat-lines${i}" style="transform: rotate(${
          (i / 60) * 360 + 90
        }deg);width: 50.5%;height: 2%;position: absolute;top: 49.5%;right: 50%;background-color: white;transform-origin: 100%;"></div>`
      );
    }
    fatLines.push(
      `<div class="hide-fat-lines" style="background-color: black;"></div>`
    );
    return fatLines.join(' ');
  }

  lightThemeBtn.addEventListener('click', () => {
    numCointainer.innerHTML = setAllNumbers();
    lightThemeBtn.style.backgroundColor = 'grey';
    darkThemeBtn.style.backgroundColor = '';
    clockface.style.backgroundColor = '';
    body.style.backgroundColor = '';
    hourHand.style.background = '';
    minutesHand.style.background = '';
    secondHand.style.background = '';
    centerRoundMin.style.backgroundColor = '';
    centerRoundSec.style.background = '';
  });

  darkThemeBtn.addEventListener('click', () => {
    numCointainer.innerHTML = darkModeNumbers();
    darkThemeBtn.style.backgroundColor = 'grey';
    lightThemeBtn.style.backgroundColor = '';
    clockface.style.backgroundColor = 'black';
    body.style.backgroundColor = 'black';
    hourHand.style.background = 'white';
    minutesHand.style.background = 'white';
    secondHand.style.background = 'greenyellow';
    centerRoundMin.style.backgroundColor = 'white';
    centerRoundSec.style.background = 'greenyellow';
  });

  document.querySelector('.day-display').innerHTML = day;
  document.querySelector('.month-display').innerHTML = month;
  document.querySelector('.date-display').innerHTML = date;

  numCointainer.innerHTML = setAllNumbers();
  lightThemeBtn.style.backgroundColor = 'grey';

  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hour = now.getHours();

    const secondsDegrees = (seconds / 60) * 360 + 90;
    const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const hourDegrees = (hour / 12) * 360 + (minutes / 60) * 30 + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);
});
