
$(document).ready(function () {

  var RGB;
  var R;  // R is a number
  var G;  // G is a number
  var B;  // B is a number

  var base16 ={
    	0: 0,
    	1: 1,
    	2: 2,
    	3: 3,
    	4: 4,
    	5: 5,
    	6: 6,
    	7: 7,
    	8: 8,
    	9: 9,
    	A: 10,
    	B: 11,
    	C: 12,
    	D: 13,
    	E: 14,
    	F: 15

}

    var Convert = function (Hex) {
          	var Red = Hex.split('').slice(0, 2);
          	var Green = Hex.split('').slice(2, 4);
          	var Blue = Hex.split('').slice(4, 6);

          	R = base16[Red[0]]*16 + base16[Red[1]]*1;
          	G = base16[Green[0]]*16 + base16[Green[1]]*1;
          	B = base16[Blue[0]]*16 + base16[Blue[1]]*1;

          	RGB = [R, G, B]
          	return RGB;  //RGB is an array of three numbers

}

    document.getElementById("RGB").disabled = true;

    $("#HEX").on('change', function(){
          Convert($("#HEX").val());
          $rgbtext = "rgb(" + R +"," +G +","+B+")";
          console.log($rgbtext)
          $("#HEX").val("#"+$("#HEX").val())
          $("#RGB").val($rgbtext)
          $("body").css({
            "background-color": $rgbtext   //$rgbtext is already a string !
            });

});


});
