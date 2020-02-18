
alert('Welcome to MediaFreaks!');

var bod = document.querySelector('body');

function doStuff(){
    bod.className += 'animate';
}

window.onload = function(){
    doStuff();
};


