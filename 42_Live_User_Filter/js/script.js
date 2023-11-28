const result = document.getElementById('result');
const filter = document.getElementById('filter');

// Пустой массив для результатов fetch
const listItems = [];

// Запускаем функцию
getData();

// Прослушиваем input
filter.addEventListener('input', (e) => filterData(e.target.value));


async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50');

    const { results } = await res.json();

    // console.log(data);
    // результат
    // Object { results: (50) […], info: {…} }


    // Очищаем результаты
    result.innerHTML = '';

    results.forEach(user => {
        // console.log(user);

        const li = document.createElement('li');

        listItems.push(li);
        // Создаем li
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        // Теперь это помещаем в result
        result.appendChild(li);
    })
}

function filterData(searchTerm) {
    // console.log(searchTerm);

    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
}