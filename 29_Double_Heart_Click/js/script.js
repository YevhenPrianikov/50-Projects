const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

// вместо dblclick используем click
loveMe.addEventListener('click', (e) => {
    // console.log("test");
    if(clickTime === 0) {
        clickTime = new Date().getTime();
        // console.log(clickTime);
    } else {
        // 800 - милисекунды
        if((new Date().getTime() - clickTime) < 800) {
            // console.log("test");
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    // Получаем координаты клика мышки
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    // Получаем координаты клика мышки внутри картинки
    const xInside = x - leftOffset;
    const yInside = y - topOffset;
    // console.log(xInside, yInside);

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart);

    times.innerHTML = ++timesClicked;

    setTimeout(() => heart.remove(), 1000);
}