const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // получаем координаты клика мышки
        const x = e.pageX;
        const y = e.pageY;

        // console.log(x , y); 

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        // console.log(buttonTop, buttonLeft);

        // Подсчитываем где именно кликнули внутри кнопки
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        // console.log(xInside, yInside);

        // Создаем элемент круга
        const circle = document.createElement('span');
        circle.classList.add('circle');

        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        // this не работает в стрелочной функции
        this.appendChild(circle);

        // Удаляет из DOM через 5мс
        setTimeout(() => circle.remove(), 500);
    })
})