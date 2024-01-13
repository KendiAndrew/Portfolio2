const menuBtn=document.querySelector('.menu__btn');
const menuClose=document.querySelector('.close__button');
const menuList=document.querySelector('.menu__list');
const menuOpen=document.querySelector('.menu__close');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open');
    menuBtn.classList.toggle('menu__open');
    menuOpen.classList.toggle('menu__open');
});

menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open');
    menuBtn.classList.remove('menu__open');
    menuOpen.classList.remove('menu__open');
});