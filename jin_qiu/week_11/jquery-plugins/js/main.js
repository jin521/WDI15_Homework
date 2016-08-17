$(document).ready(function ($) {


  var $p = $('p').first()
  var arr = $p.text().split('');
  $p.html('');
  for (var i = 0; i < arr.length; i++) {
    var letter= arr[i];
    $('<span>').html(letter).colorify().appendTo($p);
  }

});

//there is a slim possibilitiy that $ is used to define another variable,
// the way to get away from this is to use " IIFF"
