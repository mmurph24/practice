$(document).ready(function(){

var tankDirection = "bottom";

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
       tankDirection = "top";
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
        tankDirection = "bottom";
        if (y1 !== 460) {
          $("#tank").animate({top: '+=20px'}, 10);
        }
        break;

      case 32: // spacebar
        if (tankDirection === "bottom") {
          var bulletXOffset = 16 + x1 + "px";
          var bulletYOffset = y1 + "px";
          $(".game").prepend('<span class="bullet">.</span>');
          $(".bullet").css("margin-left", bulletXOffset).css("margin-top", bulletYOffset);
          $(".bullet").animate({top: "+=500px"}, 500, function(){
            $(this).remove();
          });
        } else if (tankDirection === "top") {
          var bulletXOffset = 16 + x1 + "px";
          var bulletYOffset = y1 + "px";
          $(".game").prepend('<span class="bullet">.</span>');
          $(".bullet").css("margin-left", bulletXOffset).css("margin-top", bulletYOffset);
          $(".bullet").animate({top: "-=500px"}, 500, function(){
            $(this).remove();
          });
        } else if (tankDirection === "right") {
          var bulletXOffset = 21 + x1 + "px";
          var bulletYOffset = y1 - 21 + "px";
          $(".game").prepend('<span class="bullet">.</span>');
          $(".bullet").css("margin-left", bulletXOffset).css("margin-top", bulletYOffset);
          $(".bullet").animate({left: "+=500px"}, 500, function(){
            $(this).remove();
          });
        } else if (tankDirection === "left") {
          var bulletXOffset = 21 + x1 + "px";
          var bulletYOffset = y1 - 21 + "px";
          $(".game").prepend('<span class="bullet">.</span>');
          $(".bullet").css("margin-left", bulletXOffset).css("margin-top", bulletYOffset);
          $(".bullet").animate({left: "-=500px"}, 500, function(){
            $(this).remove();
          });
        }
        break;

       default: return;
   }
   e.preventDefault();
 });

 });
