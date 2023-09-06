const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0'; // счётчик считает с нуля

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target'); // получаем информацию из data-target (плюсиком переводим в числовой тип данных)
        // console.log(typeof target, target) // - string 12000
        const c = +counter.innerText

        const increment = target / 200; // что бы быстрее/медленеее - уменьшаем/увеличиваем цифру 200

        // console.log(increment)

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
})