const showMenu = document.querySelector('.hamburger');
const hideMenu = document.querySelector('.close');
const menu = document.querySelector('.menu');


const leftSlide = menu.getBoundingClientRect().left;
showMenu.addEventListener('click', ()=>{
    if(leftSlide < 0){
      menu.classList.add('show');
    }
} );

hideMenu.addEventListener('click', ()=>{
    if(leftSlide < 0){
        menu.classList.remove('show');
    }
})

