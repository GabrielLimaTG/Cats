const picture = document.querySelector('.pic');

const changePic = () => picture.classList.toggle('newImg');


const randomColor = () => {

num = Math.floor(Math.random()*999999);
return num = '#'+num;
}


const changeBack = () => picture.style.backgroundColor = randomColor();


picture.addEventListener('click', changeBack);