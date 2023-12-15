const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');


// проверяем localStorage
// F12, Хранилище / Локальное хранилище
const todos = JSON.parse(localStorage.getItem('todos'));

if(todos) {
    todos.forEach(todo => addTodo(todo));
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
})

function addTodo(todo) {
    let todoText = input.value;

    if(todo) {
        todoText = todo.text;
    }

    // console.log(todoText);

    if(todoText) {
        const todoEl = document.createElement('li');
        if(todo && todo.completed) {
            todoEl.classList.add('completed');
        }

        todoEl.innerText = todoText;
        // Помечаем как выполнено - левой кнопкой мыши
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')

            updateLS();
        });
        // Удаляем - правой кнопкой мыши
        todoEl.addEventListener('contextmenu', (e) => {
            // Чтобы не выпадало контекстное меню при нажатии правой кнопки мыши
            e.preventDefault();
            
            // Удаляем из DOM
            todoEl.remove();

            updateLS();
        });
        
        todosUL.appendChild(todoEl);

        input.value = '';

        // функция дял обновление локального хранилища
        updateLS();
    }
}

// функция дял обновление локального хранилища
function updateLS() {
    todosEl = document.querySelectorAll('li');

    const todos = [];

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        });
    })

    localStorage.setItem('todos', JSON.stringify(todos));
}

// сохранение в localStorage
// localStorage.setItem('name', JSON.stringify(obj));

// получаем из localStorage
// JSON.parse(localStorage.getItem(obj));