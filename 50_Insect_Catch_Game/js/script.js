const screens = document.querySelectorAll('.screen');
const choose_insect_btn = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn');

const game_container = document.getElementById('game-container');

const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');


let seconds = 0;
let score = 0;
let selected_insect = {};

// кнопка старт
start_btn.addEventListener('click', () => {
    screens[0].classList.add('up');
});

// Выбор насекомого
choose_insect_btn.forEach(btn => {
    btn.addEventListener('click', () =>{
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');

        selected_insect = { src, alt };

        // меняем картинку
        screens[1].classList.add('up');

        
        // Функция для создания насекомого 1 sec
        setTimeout(createInsect, 1000);
        // функция начала игры
        startGame();
    });
});

function startGame() {
    setInterval(increaseTime, 1000);
};

// Время
function increaseTime() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;

    // Если m < 10 тогда `0${m}` иначе m
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    timeEl.innerHTML = `Time: ${m}:${s}`;
    seconds++;
};

function createInsect() {
    // создаем насекомого в DOM
    // создаём div
    const insect = document.createElement('div');
    // добавляем класс
    insect.classList.add('insect');

    // Создаем рандомное расположение Функция
    const { x, y } = getRandomLocation();

    // создаём и располагаем насекомого
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    // + random rotation насекомого
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)"/>`;

    // клик по насекомому - запускаем функцию
    insect.addEventListener('click', (catchInsect))


    // добавляем насекомого в DOM
    game_container.appendChild(insect);
};


function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;

    return { x, y };
};

function catchInsect() {
    // console.log(123);
    increaseScore();

    this.classList.add('caught'); // исчезает

    // удаляем из DOM
    setTimeout(() => {
        this.remove(), 2000
    });
    // Добавляем насекомого
    addInsects();
}

function addInsects() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}

function increaseScore() {
    score++;

    if(score > 19) {
        message.classList.add('visible');
    }

    scoreEl.innerHTML = `Score:${score}`;
}