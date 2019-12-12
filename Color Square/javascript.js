$(document).ready(function(){

    var red = "#CF000F";
    var blue = "#446CB3";
    var green = "#26A65B";
    var orange = "#E87E04";
    var color = 0;

    $("#red").click(function(){
      color = red;
    });

    $("#blue").click(function(){
      color = blue;
    });

    $("#green").click(function(){
      color = purple;
    });

    $("#orange").click(function(){
      color = orange;
    });

    $(".grid-item").hover(function(){
      $(this).css("background-color",color);

    });


});
