$(document).ready(function(){

  $("#reset").click(function(){
    location.reload();
  });

  $("#start").click(start_game);

  function start_game(){
    $("#start").prop("disabled",true);

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'music.mp3');
    audioElement.play();

    var position = 133

    $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          if (position < 60) {
            position = 13;
            $(".ship").css({left: position}, 1);
        } else if (ready_to_fire == 1){
            position -= 60;
            $(".ship").animate({left: position}, 1);
        }
          break;

          case 39: // right
          if (position > 193) {
            position = 253;
            $(".ship").css({left: position}, 1);
          } else if (ready_to_fire == 1){
            position += 60;
            $(".ship").animate({left: position}, 1);
          }
          break;

          default: return;
      }
      e.preventDefault();
      });

      var ready_to_fire = 1

    $(document).keyup(function(e) {
      switch(e.which) {
          case 32: // spacebar
          if (ready_to_fire == 1) {
            ready_to_fire = 0;
            $(".ship").addClass("red").append('<img class="fireball" src="images/fireball.png">');
            $(".fireball").animate({top: "-=405px"}, 500, function() {
              this.remove();
              $(".ship").removeClass("red")
              ready_to_fire = 1;
            })
          }
          break;
          default: return;
      }
      e.preventDefault();
    });

/*  ADDING ASTEROID LOGIC */
    var current_level = 20

    function add_asteroids(){
        var row1 = Math.floor(Math.random() * current_level);
        var row2 = Math.floor(Math.random() * current_level);
        var row3 = Math.floor(Math.random() * current_level);
        var row4 = Math.floor(Math.random() * current_level);
        var row5 = Math.floor(Math.random() * current_level);
        if (row1 == 0){}
        else if ((row1 == 1) && !$("#asteroid-1-1").hasClass("active")) {
          $("#asteroid-1-1").addClass("active").removeClass("hidden");
      } else if ((row1 == 1) && $("#asteroid-1-1").hasClass("active")) {
          if (!$("#asteroid-1-2").hasClass("active")){
            $("#asteroid-1-2").addClass("active").removeClass("hidden");
          } else {
              if (!$("#asteroid-1-3").hasClass("active")){
                $("#asteroid-1-3").addClass("active").removeClass("hidden");
            } else {
                if (!$("#asteroid-1-4").hasClass("active")){
                  $("#asteroid-1-4").addClass("active").removeClass("hidden");
              } else {
                  if (!$("#asteroid-1-5").hasClass("active")){
                    $("#asteroid-1-5").addClass("active").removeClass("hidden");
                  } else {
                    $("#asteroid-1-6").addClass("active").removeClass("hidden").addClass("game-over").animate({top: "57"}, 1000);
                    setTimeout(function (){
                      $("#explosion1").attr("src","images/cloud.png")}, 1500);
                  }
                }
              }
            }
          }
          if (row2 == 0){}
          else if ((row2 == 1) && !$("#asteroid-2-1").hasClass("active")) {
            $("#asteroid-2-1").addClass("active").removeClass("hidden");
          } else if ((row2 == 1) && $("#asteroid-2-1").hasClass("active")) {
            if (!$("#asteroid-2-2").hasClass("active")){
              $("#asteroid-2-2").addClass("active").removeClass("hidden");
            } else {
                if (!$("#asteroid-2-3").hasClass("active")){
                  $("#asteroid-2-3").addClass("active").removeClass("hidden");
              } else {
                  if (!$("#asteroid-2-4").hasClass("active")){
                    $("#asteroid-2-4").addClass("active").removeClass("hidden");
                } else {
                    if (!$("#asteroid-2-5").hasClass("active")){
                      $("#asteroid-2-5").addClass("active").removeClass("hidden");
                    } else {
                      $("#asteroid-2-6").addClass("active").removeClass("hidden").addClass("game-over").animate({top: "80"}, 1000);
                      setTimeout(function (){
                        $("#explosion2").attr("src","images/cloud.png")}, 1500);
                    }
                  }
                }
              }
            }
            if (row3 == 0){}
            else if ((row3 == 1) && !$("#asteroid-3-1").hasClass("active")) {
              $("#asteroid-3-1").addClass("active").removeClass("hidden");
            } else if ((row3 == 1) && $("#asteroid-3-1").hasClass("active")) {
              if (!$("#asteroid-3-2").hasClass("active")){
                $("#asteroid-3-2").addClass("active").removeClass("hidden");
              } else {
                  if (!$("#asteroid-3-3").hasClass("active")){
                    $("#asteroid-3-3").addClass("active").removeClass("hidden");
                } else {
                    if (!$("#asteroid-3-4").hasClass("active")){
                      $("#asteroid-3-4").addClass("active").removeClass("hidden");
                  } else {
                      if (!$("#asteroid-3-5").hasClass("active")){
                        $("#asteroid-3-5").addClass("active").removeClass("hidden");
                      } else {
                        $("#asteroid-3-6").addClass("active").removeClass("hidden").addClass("game-over").animate({top: "57"}, 1000);
                        setTimeout(function (){
                          $("#explosion3").attr("src","images/cloud.png")}, 1500);
                      }
                    }
                  }
                }
              }
              if (row4 == 0){}
              else if ((row4 == 1) && !$("#asteroid-4-1").hasClass("active")) {
                $("#asteroid-4-1").addClass("active").removeClass("hidden");
              } else if ((row4 == 1) && $("#asteroid-4-1").hasClass("active")) {
                if (!$("#asteroid-4-2").hasClass("active")){
                  $("#asteroid-4-2").addClass("active").removeClass("hidden");
                } else {
                    if (!$("#asteroid-4-3").hasClass("active")){
                      $("#asteroid-4-3").addClass("active").removeClass("hidden");
                  } else {
                      if (!$("#asteroid-4-4").hasClass("active")){
                        $("#asteroid-4-4").addClass("active").removeClass("hidden");
                    } else {
                        if (!$("#asteroid-4-5").hasClass("active")){
                          $("#asteroid-4-5").addClass("active").removeClass("hidden");
                        } else {
                          $("#asteroid-4-6").addClass("active").removeClass("hidden").addClass("game-over").animate({top: "80"}, 1000);
                          setTimeout(function (){
                            $("#explosion4").attr("src","images/cloud.png")}, 1500);
                        }
                      }
                    }
                  }
                }
                if (row5 == 0){}
                else if ((row5 == 1) && !$("#asteroid-5-1").hasClass("active")) {
                  $("#asteroid-5-1").addClass("active").removeClass("hidden");
                } else if ((row5 == 1) && $("#asteroid-5-1").hasClass("active")) {
                  if (!$("#asteroid-5-2").hasClass("active")){
                    $("#asteroid-5-2").addClass("active").removeClass("hidden");
                  } else {
                      if (!$("#asteroid-5-3").hasClass("active")){
                        $("#asteroid-5-3").addClass("active").removeClass("hidden");
                    } else {
                        if (!$("#asteroid-5-4").hasClass("active")){
                          $("#asteroid-5-4").addClass("active").removeClass("hidden");
                      } else {
                          if (!$("#asteroid-5-5").hasClass("active")){
                            $("#asteroid-5-5").addClass("active").removeClass("hidden");
                          } else {
                            $("#asteroid-5-6").addClass("active").removeClass("hidden").addClass("game-over").animate({top: "57"}, 1000);
                            setTimeout(function (){
                              $("#explosion5").attr("src","images/cloud.png")}, 1500);
                          }

                        }
                      }
                    }
                  }
          };

    setInterval(add_asteroids, 250);

/* KILLING ASTEROID LOGIC */
  var asteroid_kills = 0

    function collision() {
    if (ready_to_fire == 0) {
      var x1 = $("img.fireball").offset().left;
      var y1 = $("img.fireball").offset().top;

      if ((x1 == 95) && (y1 < 135) && $("#asteroid-1-1").hasClass("active")) {
        $("#asteroid-1-1").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 95) && ((176 < y1) && (y1 < 217)) && $("#asteroid-1-2").hasClass("active")) {
        $("#asteroid-1-2").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 95) && ((258 < y1) && (y1 < 296)) && $("#asteroid-1-3").hasClass("active")) {
        $("#asteroid-1-3").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 95) && ((336 < y1) && (y1 < 379)) && $("#asteroid-1-4").hasClass("active")) {
        $("#asteroid-1-4").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 95) && ((416 < y1) && (y1 < 457)) && $("#asteroid-1-5").hasClass("active")) {
        $("#asteroid-1-5").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 155) && (y1 < 135) && $("#asteroid-2-1").hasClass("active")) {
        $("#asteroid-2-1").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 155) && ((176 < y1) && (y1 < 217)) && $("#asteroid-2-2").hasClass("active")) {
        $("#asteroid-2-2").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 155) && ((258 < y1) && (y1 < 296)) && $("#asteroid-2-3").hasClass("active")) {
        $("#asteroid-2-3").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 155) && ((336 < y1) && (y1 < 379)) && $("#asteroid-2-4").hasClass("active")) {
        $("#asteroid-2-4").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 155) && ((416 < y1) && (y1 < 457)) && $("#asteroid-2-5").hasClass("active")) {
        $("#asteroid-2-5").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 215) && (y1 < 135) && $("#asteroid-3-1").hasClass("active")) {
        $("#asteroid-3-1").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 215) && ((176 < y1) && (y1 < 217)) && $("#asteroid-3-2").hasClass("active")) {
        $("#asteroid-3-2").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 215) && ((258 < y1) && (y1 < 296)) && $("#asteroid-3-3").hasClass("active")) {
        $("#asteroid-3-3").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 215) && ((336 < y1) && (y1 < 379)) && $("#asteroid-3-4").hasClass("active")) {
        $("#asteroid-3-4").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 215) && ((416 < y1) && (y1 < 457)) && $("#asteroid-3-5").hasClass("active")) {
        $("#asteroid-3-5").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 275) && (y1 < 135) && $("#asteroid-4-1").hasClass("active")) {
        $("#asteroid-4-1").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 275) && ((176 < y1) && (y1 < 217)) && $("#asteroid-4-2").hasClass("active")) {
        $("#asteroid-4-2").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 275) && ((258 < y1) && (y1 < 296)) && $("#asteroid-4-3").hasClass("active")) {
        $("#asteroid-4-3").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 275) && ((336 < y1) && (y1 < 379)) && $("#asteroid-4-4").hasClass("active")) {
        $("#asteroid-4-4").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 275) && ((416 < y1) && (y1 < 457)) && $("#asteroid-4-5").hasClass("active")) {
        $("#asteroid-4-5").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 335) && (y1 < 135) && $("#asteroid-5-1").hasClass("active")) {
        $("#asteroid-5-1").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 335) && ((176 < y1) && (y1 < 217)) && $("#asteroid-5-2").hasClass("active")) {
        $("#asteroid-5-2").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 335) && ((258 < y1) && (y1 < 296)) && $("#asteroid-5-3").hasClass("active")) {
        $("#asteroid-5-3").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 335) && ((336 < y1) && (y1 < 379)) && $("#asteroid-5-4").hasClass("active")) {
        $("#asteroid-5-4").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((x1 == 335) && ((416 < y1) && (y1 < 457)) && $("#asteroid-5-5").hasClass("active")) {
        $("#asteroid-5-5").removeClass("active").addClass("hidden");
        $(".fireball").hide();
        asteroid_kills += 1;
        $("#total-score").text(asteroid_kills);
      }
      if ((asteroid_kills >= 10) && (asteroid_kills <= 24)) {
        $("#total-level").text("2");
        current_level = 18
      } else if ((asteroid_kills >= 25) && (asteroid_kills <= 49)) {
        $("#total-level").text("3");
        current_level = 16
      } else if ((asteroid_kills >= 50) && (asteroid_kills <= 99)) {
        $("#total-level").text("4");
        current_level = 14
      } else if ((asteroid_kills >= 100) && (asteroid_kills <= 149)) {
        $("#total-level").text("5");
        current_level = 12
      } else if (asteroid_kills > 150) {
        $("#total-level").text("6");
        current_level = 10
      }
    }
  }
    setInterval(collision, 10);

    function end_game() {
    var its_over = $('.game-over').length;
    if ((its_over > 0) && !$(".end-game-message").hasClass("active")) {
      $(".ship").css("display", "none");
      $(".earth").append('<div class="end-game-message active">GAME OVER</div>');
    }
  }
    setInterval(end_game, 500);
  }
});
