const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus()


textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === "Enter") { // Вызываем функцию randomSelect() при нажатии на Enter
        setTimeout(() => {
            e.target.value = '';
        }, 10) // 10мс

        randomSelect()
    }
})


function createTags(input) {
    // console.log(input)
    const tags = input.split(',').filter(tag => tag.trim() !== "").map(tag => tag.trim()) // триммим если есть проблеы в ведённых данных и мапим
    // console.log(tags)
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}


function randomSelect() {
    // console.log("Проверка Enter")
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()


        highlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100)
    }, 100); //100мс

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(()=> {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}


function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}


function highlightTag(tag) {
    tag.classList.add("highlight")
}


function unhighlightTag(tag) {
    tag.classList.remove("highlight")
}