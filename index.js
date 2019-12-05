
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

const carouselSlide = documnet.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Butttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX'('+(-size * counter)+');

var CountDownDate = new Date("April 2nd 2020 12:00:00").getTime();

Var countDownfunction =SetInterval(function(){

    var now = new Date().getTime();
var distance = countDownDate - now;

var days = Math.floor (distance / 1000 * 60 * 60 *24));
var hours = Math.floor (( distance %(1000* 60 * 60 * 24)) /(1000 * 60 * 60));
var minutes = Math.floor((distance %(1000* 60 * 60 )) /(1000 * 60));
var seconds = Math.floor(((distance % (1000 * 60)) / 1000);

document.getElementById("demo").innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s";
if(distance < 0){
    clearInterval(countDownfunction);
    document.getElementById("demo").innerHTML= "EXPIRED";
}

},1000);

