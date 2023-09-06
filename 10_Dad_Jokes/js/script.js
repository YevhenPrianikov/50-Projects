const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Кнопка генерирующая шутку - при нажатии запускает повторно функцию
jokeBtn.addEventListener('click', generateJoke);

generateJoke();


// // Эта функция работает нормально. Используем .then()
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     // Запрос
//     fetch('https://icanhazdadjoke.com', config)
//         .then(res => res.json())
//         // берём шутку из полученного объекта и вставляем в ШТМЛ
//         .then(data => {
//             jokeEl.innerHTML = data.joke
//         });
// };


// Эта функция выглядит лучше и чище. Используем async / await
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    // Запрос
    const res = await fetch('https://icanhazdadjoke.com', config);

    const data = await res.json();

    jokeEl.innerHTML = data.joke;
};