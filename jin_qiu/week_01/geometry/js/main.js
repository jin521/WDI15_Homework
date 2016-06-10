/*Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:
isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle

*/


var rectangle = {
  length: 4,
  width: 4
}

var isSquare = function(shape) {

    if (shape.length ===shape.width ){
      console.log('it is a square');
    } else {
      console.log('it is not a square');
    }
}
isSquare(rectangle)



var area = function (shape ) {
    return shape.length * shape.width;
}

area ( rectangle)



var perimeter ={
     return (shape.length + shape.width) * 2;
}

perimeter( rectangle)





/*
Part 2, Triangle

Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not */


var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};


var isEquilateral = function (shape) { //isEquilateral - Returns whether the triangle is equilateral or not

        var a = shape.sideA;
        var b = shape.sideB;
        var c = shape.sideC;

      if (a  ===b && a ===c ) {
        console.log ('it is an equilateral')
      }else{
        console.log ('it is not an equilateral')
      }
}

isEquilateral ( triangle)


var isIsosceles = function ( shape){ //Returns whether the triangle is isosceles or not

        var a = shape.sideA;
        var b = shape.sideB;
        var c = shape.sideC;
        
      if (a ===b || a ===c || b ===c){
        console.log( 'it is an isosceles')
      }else{
        console.log ( 'it is not an isosceles')
      }
}

isIsosceles( triangle)



    var area = function(shape ){ //Returns the area of the Triangle
      var a = shape.sideA;
      var b = shape.sideB;
      var c = shape.sideC;

      var perimeter = (a + b + c)/2;
      var area =  Math.sqrt(perimeter*((perimeter-a)*(perimeter-b)*(perimeter-c)));
      console.log(area);
}
    area (triangle)



   /*Returns whether the triangle is obtuse or not, An obtuse triangle
   is one with one obtuse angle (greater than 90°) and two acute angles */

   var isObtuse =function (shape){
     var a = shape.sideA;
     var b = shape.sideB;
     var c = shape.sideC;

     if ( a*a >( b*b + c*c) || b*b > (a*a + c*c) || c*c > ( a*a + b*b)){
       console.log (' it is an obtuse triangle')
     }else {
       console.log ( ' it is not an obtuse triangle ')
     }

   }

   isObtuse ( triangle)
