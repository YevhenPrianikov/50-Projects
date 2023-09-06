const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus() // для того что бы инпут был в фокусе, в инпуте сразу же стоит курсор и можно вводить в поле поиска
})