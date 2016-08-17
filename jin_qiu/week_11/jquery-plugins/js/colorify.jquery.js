
  $.fn.colorify = function () {

    var rgb =function(){
      return 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')'
    }

    this.css('color', rgb);
    return this; // Enables chaining, otherwise it will return " undefined."then you can not chain them
  };
