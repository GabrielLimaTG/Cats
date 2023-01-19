//this selects the class .pic
const picture = document.querySelector('.pic');

//this func generates a random number from 0 to 999999 and adds a # to it: e.g #548972
const randomColor = () => {
num = Math.floor(Math.random()*999999);
return num = '#'+num;
}

//this func runs when the Event (click) is observed, it changes the BG color with and gets the number of the palette set by the previous function
const changeBack = () => picture.style.backgroundColor = randomColor();

//This observes if the event happens and calls the previous function
picture.addEventListener('click', changeBack);
