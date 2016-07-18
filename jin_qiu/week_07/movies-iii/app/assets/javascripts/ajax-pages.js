// $(document).ready(function() {
//
//     $('button').on('click', function() {
//
//        var movieTitle = $(":input").val();
//        var movieURL = 'http://omdbapi.com/?t=' + movieTitle;
//
//        var xhr = new XMLHttpRequest();
//        xhr.open ('GET', movieURL);
//
//        xhr.onreadystatechange = function () {
//            if (xhr.readyState === 4 ) {
//                var received_data = JSON.parse(xhr.responseText)
//                var poster = received_data["Poster"];
//                $("#poster").attr("src", poster)
//                var title = received_data["Title"];
//                $("#movietitle").html(title)
//                var plot = received_data["Plot"];
//                $("#plot").html(plot)
//            }
//        }
//        xhr.send();
//     });
// });


$(document).ready(function() {

    $('button').on('click', function() {

       var movieTitle = $(":input").val();
       var movieURL = 'http://omdbapi.com/?t=' + movieTitle;

       var xhr = new XMLHttpRequest();
       xhr.open ('GET', movieURL);

       xhr.onreadystatechange = function () {
           if (xhr.readyState === 4 ) {
               var received_data = JSON.parse(xhr.responseText)

                 var poster = received_data["Poster"];
                 $("#poster").attr("src", poster).fadeOut( "slow");

               var title = received_data["Title"];
               $("#movietitle").html(title)
               var plot = received_data["Plot"];
               $("#plot").html(plot)
           }
       }
       xhr.send();
    });
});
