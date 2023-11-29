// Получаем нод-лист из трех элементов, по классу
const ratings = document.querySelectorAll('.rating');

const ratingsContainer = document.querySelector('.ratings-container');

const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

// ratings.forEach(rating => rating.addEventListener('click', ))

ratingsContainer.addEventListener('click', (e) => {
    // console.log('click');
    // console.log(e.target); // выводит в консоль элемент по которому происходит клик (внутри panel)
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        // console.log(e.target);

        // Удаляем класс active
        removeActive();

        e.target.parentNode.classList.add('active');

        selectedRating = e.target.nextElementSibling.innerHTML;
        // console.log(selectedRating);
        // Neutral
        // Unhappy
        // Satisfied
    } else if(
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.innerHTML
    }
})


sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `
})


// Удаляем класс active
function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}