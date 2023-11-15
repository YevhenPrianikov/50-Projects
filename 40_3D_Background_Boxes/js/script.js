const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');


// Я написал так (Всё работает)
// btn.addEventListener('click', () => {
//     if (boxesContainer.classList.contains('big')) {
//         boxesContainer.classList.remove('big');
//     } else {
//         boxesContainer.classList.add('big');
//     }
// })

// Но можно написать проще
btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

// Строим конетйнер содержащий в себе другие контейнеры 4х4
function createBoxes() {
    for(let i = 0; i < 4; i++) {
        for(let j =0; j < 4; j++) {
            const box = document.createElement('div');
            box.classList.add('box');

            // box.style.backgroundPosition = `-125px 0`;
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            // console.log(box);

            // Добавляем box контейнеры
            boxesContainer.appendChild(box);
        }
    }
}

createBoxes();
