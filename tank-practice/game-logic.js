$(document).ready(function(){

  var tankDirection = "down";

  $(document).keydown(function(e) {
    var gameLeft = $(".game").position().left;
    var gameTop = $(".game").position().top;
    var tankLeft = $("#tank").position().left;
    var tankTop = $("#tank").position().top;
    var y1 = tankTop - gameTop;
    var x1 = tankLeft - gameLeft;

    switch(e.which) {
     case 37: // left
       $("#tank-image").attr("src","images/tank-left.png");
       tankDirection = "left";
       if (x1 !== 0) {
         $("#tank").animate({left: '-=20px'}, 10);
       }
       break;

     case 38: // up
       $("#tank-image").attr("src","images/tank-top.png");
       tankDirection = "up";
       if (y1 !== 0) {
         $("#tank").animate({top: '-=20px'}, 10);
       }
       break;

     case 39: // right
       $("#tank-image").attr("src","images/tank-right.png");
       tankDirection = "right";
       if (x1 !== 460) {
         $("#tank").animate({left: '+=20px'}, 10);
       }
      break;

      case 40: // down
        $("#tank-image").attr("src","images/tank-bottom.png");
        tankDirection = "down";
        if (y1 !== 460) {
          $("#tank").animate({top: '+=20px'}, 10);
        }
        break;

      case 32: // spacebar
    //    $("#tank").append('<img src="images/bullet.png" class="bullet">');
      //  $(".bullet").animate({top: "+=405px"}, 500);

        alert(y1);
        alert(x1);
          break;

       default: return;
   }
   e.preventDefault();
 });

 });
