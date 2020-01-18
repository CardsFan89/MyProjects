
alert('Follow us on Twitter and SoundCloud');

var bod = document.querySelector('body');

function doStuff(){
    bod.className += 'animate';
}

window.onload = function(){
    doStuff();
};


var myName = 'MediaFreaks Podcasts';

var red = [ 0, 100, 63 ];
var orange = [ 40, 100, 60 ];
var green = [ 75, 100, 40 ];
var blue = [ 196, 77, 55 ];
var purple = [ 280, 50, 60 ];
var letterColors = [ red, gray, green, blue, purple ];

drawName(myName, letterColors);

if(10 < 3){
    bubbleShape = 'square';
}
else{
    bubbleShape = 'circle';
}

bounceBubbles();