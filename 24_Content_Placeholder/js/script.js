const header = document.getElementById('header');
const title = document.getElementById('title');
const excert = document.getElementById('excert');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_text = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500); // Задержка 2секунды

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="img">';
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    excert.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, deleniti!';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="img">';
    name.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 08, 2020';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'));
}