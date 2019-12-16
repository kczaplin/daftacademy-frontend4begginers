
const menuButton = document.querySelector('.button.headerb');
var menu = document.querySelector('.page-navigation');
var band = document.querySelector('.home-section');

menuButton.addEventListener('click', (e)=>{
   
    menu.classList.toggle('hamburgerMenu');
    var bar1 = document.querySelector('.bar1');
    var bar2 = document.querySelector('.bar2');
    var bar3 = document.querySelector('.bar3');
    bar1.classList.toggle('cross');
    bar2.classList.toggle('cross');
    bar3.classList.toggle('cross');
    band.classList.toggle('moveBand');
  

});

var images = document.querySelector('.gallery')
images.addEventListener('mouseout',(e) =>{
  if(e.target.classList.contains('gallery__image')){
    const image = e.target;
    image.classList.add('gallery__image_anim');
  }
});

const concerts = document.querySelector('.concerts');

concerts.addEventListener('click', (e) => {
    if (e.target.classList.contains('concertb')) {
        const buyTicketButton = e.target;
        const haveFunText = document.createElement('p');
        haveFunText.textContent = 'Have fun!';

        const buttonContainer = buyTicketButton.parentElement;
        buttonContainer.insertBefore(haveFunText, buyTicketButton);
        buyTicketButton.remove();
    }
});



const submit = document.querySelector('form');

    submit.addEventListener('submit', (e) => {e.preventDefault();
    var formData = new FormData(submit);
    const obj = Object.fromEntries(formData);
    console.log(obj);
});