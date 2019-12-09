const pAdder = document.querySelectorAll('.button.concertb');
const container = document.querySelectorAll('.concerts__info');
const nowy = [];

for(i=0;i<pAdder.length;i++){
pAdder[i].addEventListener('click', (e) => {
    nowy[i] = document.createElement('p');
    nowy[i].textContent = 'Have fun!';
    nowy[i].classList.add('concerts__date');
    //nowy[i].style.padding= "5px 0px 0px 0px";
    e.target.style.display= 'none';
  e.target.parentNode.append(nowy[i]);


  })
}

const menuButton = document.querySelector('.button.headerb');

menuButton.addEventListener('click', ()=>{
    var menu = document.querySelector('.page-navigation');
    menu.classList.toggle('hamburgerMenu');
});


const submit = document.querySelector('form');

    submit.addEventListener('submit', (e) => {e.preventDefault();
    var formData = new FormData(submit);
    const obj = Object.fromEntries(formData);
    console.log(obj);
});