/*Bonus #1: When the cat reaches the right-hand of the screen, restart them at the
left hand side ("0px"). So they should keep walking from left to right across the
screen, forever and ever.

Bonus #2: When the cat reaches the right-hand of the screen, make them move
backwards instead. They should keep walking back and forth forever and ever.

Bonus #3: When the cat reaches the middle of the screen, replace the img
with an image of a cat dancing, keep it dancing for 10 seconds, and then
replace the img with the original image and have it continue the walk.

Bonus #4: Pretty much go nuts or whatever.*/



var img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.height ='350px';
img.style.left = '0px';
img.style.top = '0px';
var watchKittyWalk = function() {
  var oldLeft = parseInt(img.style.left);
  var newLeft = oldLeft + 10;
  img.style.left = newLeft + 'px';

  var oldTop = parseInt(img.style.top);
  var newTop = oldTop + 4;
  img.style.top = newTop + 'px';

};
window.setInterval(watchKittyWalk, 50);




var img2 = document.getElementsByTagName('img')[1];
img2.style.position = 'absolute';
img2.style.top = '550px';
img2.style.height ='250px';
img2.style.right = '0px';
var watchKittyDance = function() {

  var oldRight = parseInt(img2.style.right);
  var newRight = oldRight + 10;
  img2.style.right = newRight + 'px';

};
window.setInterval(watchKittyDance, 50);



var imgreverse = document.getElementsByTagName('img')[2];
imgreverse.style.position = 'absolute';
imgreverse.style.top = '70px';
imgreverse.style.height ='200px';
imgreverse.style.right = '0px';
var watchKittyDance = function() {

  var oldRight = parseInt(imgreverse.style.right);
  var newRight = oldRight + 10;
  imgreverse.style.right = newRight + 'px';

};
window.setInterval(watchKittyDance, 70);




var imgsmall = document.getElementsByTagName('img')[3];
imgsmall.style.position = 'absolute';
imgsmall.style.height ='150px';
imgsmall.style.left = '0px';
imgsmall.style.top = '300px';

var watchKittyWalk = function() {
  var oldLeft = parseInt(imgsmall.style.left);
  var newLeft = oldLeft + 10;
  imgsmall.style.left = newLeft + 'px';


};
window.setInterval(watchKittyWalk, 80);
