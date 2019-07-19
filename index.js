
alert('Follow us on Twitter and SoundCloud');

var bod = document.querySelector('body');

function doStuff(){
    bod.className += 'animate';
}

window.onload = function(){
    doStuff();
};


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });
};

navSlide();