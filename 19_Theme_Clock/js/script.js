const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');


// Создаем два массива для дней недели и для месяцев
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Переключение световых режимов (Light / Dark Mode)
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if(html.classList.contains("dark")) {
        html.classList.remove('dark');
        e.target.innerHTML = "Dark Mode";
    } else {
        html.classList.add('dark');
        e.target.innerHTML = "Light Mode";
    }
})
// =========================

function setTime() {
    const time = new Date();
    // console.log(time);

    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM'

    const hoursForClock = hours % 12;

    // Для движения стрелок
    // hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
    // minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    // secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;
    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale((hoursForClock * 60) + minutes, 0, 720, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;



    // Устанавливаем крупное время
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    // Устанавливаем дату под временем
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// Для подсчёта ввремени, для стрелок, для ихних позиций
// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();
setInterval(setTime, 1000); // запускаем стрелку (1000 - это 1секунда)