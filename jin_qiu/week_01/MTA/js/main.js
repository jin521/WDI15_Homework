/*
MTA Lab


The program takes the line and stop that a user is getting on at and the line
and stop that user is getting off at and prints the journey and the total number
of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points.
(For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
*/

var lines = {
    N: ['Times Square', '34th', '28th(N)', '23rd(N)', 'Union Square', '8th(N)'],
    L: ['8th(L)', '6th', 'Union Square', '3rd', '1st'],
    Six: ['Grand Central', '33rd', '28th(6)', '23rd(6)', 'Union Square', 'Astor Place']
};


var planTrip = function(startingStop, startingLine, finishingStop, finishingLine) {

    var startingLineStops = lines[startingLine]; // use variable startingLineStops to store the array, startingLine is a string(so not using dot notation)
    var finishingLineStops = lines[finishingLine]; //use varaible finishingLineStops to store the array, finishingLine is a string( so not using dot notaiton)

    var Journey = []; // when staying on same line
    var Journey1 = []; // when changing at Union Square, Journey1 stores stations before Union Square
    var Journey2 = []; // when changing at Union Square, Journey2 stores stations after Union Square


    if (startingStop === finishingStop && startingLine === finishingLine) {
        message = 'you are where you want to be, there is no need to make any trips';
        console.log(message);
    }


    else if (startingLine === finishingLine) {
        if (startingLineStops.indexOf(finishingStop) > startingLineStops.indexOf(startingStop)) {
            Journey = startingLineStops.slice(startingLineStops.indexOf(startingStop), (startingLineStops.indexOf(finishingStop) + 1));
        } else {
            Journey = startingLineStops.slice(startingLineStops.indexOf(finishingStop), (startingLineStops.indexOf(startingStop) + 1));
            Journey = Journey.reverse();
        }

        var takingOutInitialStop = Journey.shift();
        console.log(Journey);
        var totalstops = Journey.length;

        var message1 = {
            Line1: 'Your must travel through the following stops on the ' + startingLine + ' line:' + Journey,
            Line2: totalstops + 'stops in total'
        };

        var messageoutput1 = message1.Line1 + ', ' + message1.Line2;
        console.log(messageoutput1);

    }

    else {

        if (startingLineStops.indexOf('Union Square') > startingLineStops.indexOf(startingStop)) {
            Journey1 = startingLineStops.slice(startingLineStops.indexOf(startingStop), (startingLineStops.indexOf('Union Square') + 1));

        }

        if (startingLineStops.indexOf('Union Square') < startingLineStops.indexOf(startingStop)){
            Journey1 = startingLineStops.slice(startingLineStops.indexOf('Union Square'), (startingLineStops.indexOf(startingStop) + 1));
            Journey1 = Journey1.reverse();

        }

        var takingOutStartingStop = Journey1.shift();
        console.log(Journey1);


        if (finishingLineStops.indexOf(finishingStop) > finishingLineStops.indexOf('Union Square')) {
            Journey2 = finishingLineStops.slice(finishingLineStops.indexOf('Union Square'), (finishingLineStops.indexOf(finishingStop) + 1));
        }

        if (finishingLineStops.indexOf(finishingStop) < finishingLineStops.indexOf('Union Square')) {
            Journey2 = finishingLineStops.slice(finishingLineStops.indexOf(finishingStop), (finishingLineStops.indexOf('Union Square') + 1));
            Journey2 = Journey2.reverse();
        }
        var takingoutunionsquare = Journey2.shift();
        console.log(Journey2);

  var stops1 = Journey1.length;
    var stops2 = Journey2.length;
    var stops = stops1 + stops2;
    var message2 = {
        Line1: 'Your must travel through the following stops on the ' + startingLine + ' line:' + Journey1,
        Line2: 'Change at Union Square',
        Line3: 'journey continues through the following stops on ' + finishingLine + ' line:' + Journey2,
        Line4: stops + 'stops in total'
    };

    var messageoutput2 = message2.Line1 + ', ' + message2.Line2 + ', ' + message2.Line3 + ', ' + message2.Line4;

    console.log(messageoutput2);
    }

};


planTrip('1st', 'L','34th', 'N');
