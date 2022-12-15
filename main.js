window.addEventListener('load', () => {
  const secondHand = document.querySelector('.second-hand');
  const minutesHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');
  const clockFace = document.querySelector('.clock-face');
  const WholeClock = document.querySelector('.clock');
  const hideSlimLine = document.querySelector('.hide-slim-line');

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
    let numbers = [setAllSlimLines()];
    for (let i = 1; i <= 12; i++) {
      numbers.push(`<div class="num${i}">${i}</div>`);
    }
    return numbers.join(' ');
  }

  function setAllSlimLines() {
    let slimLines = [];
    for (let i = 0; i <= 59; i++) {
      slimLines.push(
        `<div class="slim-lines${i}" style="transform: rotate(${
          (i / 60) * 360 + 90
        }deg);width: 50.5%;height: 5px;position: absolute;top: 50%;right: 50%;background-color: rgb(92, 90, 90);transform-origin: 100%;"></div>`
      );
    }
    slimLines.push(`<div class="hide-slim-line"></div>`);
    return slimLines.join(' ');
  }

  document.querySelector('.day-display').innerHTML = day;
  document.querySelector('.month-display').innerHTML = month;
  document.querySelector('.date-display').innerHTML = date;
  document.querySelector('.num-cointainer').innerHTML = setAllNumbers();

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
