

$(document).ready(function () {

var lines= {
  N : ["time square", "34th", "28th", "23rd", "union square", "8th"],
  L : ["8th", "6th", "union square", "3rd", "1st"],
  6 : ["grand central", "33rd", "28th", "23rd", "union square", "astor place"]
};

var sLine;
var sStation;
var eLine;
var eStation;
var stops;
var startline;
var endline;
var endIndex;
var trip;
var trip1;
var trip2;
var message;

$('#start').on('change', function () {
  var data = $(this).val();
  sdata = data.split(':');
  sLine = sdata[0];
  sStation = sdata[1];
  startline = lines[sLine];
  startIndex = _.indexOf(startline, sStation);
  console.log(sLine, sStation);
  console.log(startline);
  console.log(startIndex);
  $('#route').empty();

});



$('#end').on('change', function () {
  var data = $(this).val();
  edata = data.split(':');
  eLine = edata[0];
  eStation = edata[1];
  endline = lines[eLine];
  endIndex = _.indexOf(endline, eStation);
  console.log(eLine, eStation);
  console.log(endline);
  console.log(endIndex);
  planTrip(sLine, sStation, eLine, eStation);
  console.log(message)
  $('#route').append(message);
});



var calculateRoute = function (line, s, e){ //line is array
      var indexs = _.indexOf(line, s);
      var indexe = _.indexOf(line, e);

    if (indexs < indexe){
      trip = line.slice(indexs, indexe);
    }else {
      trip = line.slice(indexe, indexs).reverse();

    };
    return trip;
}

var planTrip = function (sLine, sStation, eLine, eStation){

      if (sLine ===eLine && sStation !==eStation){

          calculateRoute(startline, sStation, eStation);
          stops = _.size(trip);

          message = "☞ You must travel through the following stops on the Line "+  sLine+":" + trip + "," + stops + " stops in total."

    }else {  //when sLine !==eLine, need to change line
          trip1 = calculateRoute(startline, sStation, "union square");
          trip2 = calculateRoute(endline, "union square", eStation);
          stops = _.size(trip1) + _.size(trip2);

          message = " ☞ You must travel through the following stops on the Line " + sLine + ":"+ trip1 + " Change at Union Square. Your journey continues through the following stops: " + trip2+ "." + stops + " stops in total."

   };

          return message;
};


});
