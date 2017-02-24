var userLives= 3;
var points = 0;
var y = "850px";
var hiddenDavid5 =  $('.hiddenDavid-5');
var hiddenDavid4 = $('.hiddenDavid-4');
  
function flash(a){
        a.fadeIn(100);
        a.fadeOut(100);
        a.fadeIn(100);
        a.fadeOut(100);
}
//----BUTTON FUNCTIONS START----//
function restartFunction(){
  location.href="";
}
function playAudio(){
  var audio = document.getElementById("audio1");
  audio.play();
}
function pauseAudio(){
  var audio = document.getElementById("audio1");
  audio.pause();
}
function startGame() { 
    $('.Pizza-1').animate({top: '1000px'}, 6000,pizzaLoop);
    $('.Pizza-2').animate({top: '1000px'}, 5000, pizzaLoop2);
    $('.Money-1').animate({top: '1000px'}, 7000, moneyLoop);
    $('.Spaghetti-1').animate({top: '1000px'}, 3500, spaghettiLoop);
    $('.Spaghetti-3').animate({top: '1000px'},9000, spaghettiLoop3);
    $('.Spaghetti-2').animate({top: '1000px'}, 4750, spaghettiLoop2);
    $('.Sandwich-1').animate({top: '1000px'}, 5500, sandwichLoop);
    $('.Sandwich-2').animate({top: '1000px'}, 5500, sandwichLoop2);
    $('.Ice-Cream-1').animate({top: '1000px'}, 8000, iceCreamLoop);
    $('.Ice-Cream-2').animate({top: '1000px'}, 5000, iceCreamLoop2);
    $('.Broccoli').animate({top: '1000px'}, 4500, broccoliLoop);
    $('.OJ').animate({top: '1000px'}, 5000, ojLoop);
    $('.OJ-2').animate({top: '1000px'}, 7000, ojLoop2);
    $('.Fish').animate({top: '1000px'}, 6500, fishLoop);
    $('.Fish-2').animate({top: '1000px'}, 4750, fishLoop2);
    $('.Fish-3').animate({top: '1000px'}, 8000, fishLoop3);
    $('.Hotdog').animate({top: '1000px'}, 6750, hotdogLoop);
    $('.Hotdog-2').animate({top: '1000px'}, 5000, hotdogLoop2);
    $('.Hotdog-3').animate({top: '1000px'}, 8000, hotdogLoop3);
    $('.Trash').animate({top: '1000px'}, 4500, trashLoop);
    $('.Trash-2').animate({top: '1000px'}, 5000, trashLoop2);
    $('.Burger-1').animate({top: '1000px'}, 8000, burgerLoop);
    $('.Burger-2').animate({top: '1000px'}, 7500, burgerLoop2);
    $('.Burger-3').animate({top: '1000px'}, 8500, burgerLoop3);
    $('.Jennifer').animate({top: '1000px'}, 5000, jenniferLoop);
    $('.Jennifer-2').animate({top: '1000px'}, 6000, jenniferLoop2);
    $('.Jennifer-3').animate({top: '1000px'}, 6000, jenniferLoop3);
    }
 //---------------BUTTON FUNCTIONS END-----------------------//
    
//----------------BEGINNING OF LOOP--------------------------// 
function jenniferLoop3(){
  var x = Math.random() * 700;
  $('.Jennifer-3').css({"left": x, "top": "0px"});
  $('.Jennifer-3').animate({top: '950px'}, 6000, jenniferLoop3);
}
function jenniferLoop2(){
    var x = Math.random() * 700;
    $('.Jennifer-2').css({"left": x, "top": "0px"});
    $('.Jennifer-2').animate({top: '950px'}, 6000, jenniferLoop2);
}
function jenniferLoop(){
    var x = Math.random() * 700;
    $('.Jennifer').css({"left": x, "top": "0px"});
    $('.Jennifer').animate({top: '950px'}, 5000, jenniferLoop);
}
function burgerLoop(){
    var x = Math.random() * 850;
    $('.Burger-1').css({"left": x, "top": "0px"});
    $('.Burger-1').animate({top: '950px'}, 6000, burgerLoop);
}
function burgerLoop2(){
    var x = Math.random() * 800;
    $('.Burger-2').css({"left": x, "top": "0px"});
    $('.Burger-2').animate({top: '950px'}, 7500, burgerLoop2);
}
function burgerLoop3(){
    var x = Math.random() * 800;
    $('.Burger-3').css({"left": x, "top": "0px"});
    $('.Burger-3').animate({top: '950px'}, 8500, burgerLoop3);
}
function trashLoop(){
    var x = Math.random() * 700;
    $('.Trash').css({"left": x, "top": "0px"});
    $('.Trash').animate({top: '950px'}, 4000, trashLoop);
} 
function trashLoop2(){
    var x = Math.random() * 700;
    $('.Trash-2').css({"left": x, "top": "0px"});
    $('.Trash-2').animate({top: '950px'}, 5000, trashLoop2);
} 
function hotdogLoop3(){
    var x = Math.random() * 800;
    $('.Hotdog-3').css({"left": x, "top": "0px"});
    $('.Hotdog-3').animate({top: '950px'}, 8000, hotdogLoop3);
}
function hotdogLoop2(){
    var x = Math.random() * 800;
    $('.Hotdog-2').css({"left": x, "top": "0px"});
    $('.Hotdog-2').animate({top: '950px'}, 5000, hotdogLoop2);
}   
function hotdogLoop(){
    var x = Math.random() * 800;
    $('.Hotdog').css({"left": x, "top": "0px"});
    $('.Hotdog').animate({top: '950px'}, 6750, hotdogLoop);
}   
function moneyLoop(){
    var x = Math.random() * 800;
    $('.Money-1').css({"left": x, "top": "0px"});
    $('.Money-1').animate({top: '950px'}, 7000, moneyLoop);
}
 function pizzaLoop(){
      var x = Math.random() * 800;
     $('.Pizza-1').css({"left": x, "top": "0px"});
   $('.Pizza-1').animate({top: '950px'}, 6000, pizzaLoop); 
}
function pizzaLoop2(){
    var x = Math.random() * 800;
    $('.Pizza-2').css({"left": x, "top": "0px"});
    $('.Pizza-2').animate({top: '950px'}, 5000, pizzaLoop2);
}
function broccoliLoop(){
    var x = Math.random() * 850;
    $('.Broccoli').css({"left": x, "top": "0px"});
    $('.Broccoli').animate({top: '950px'}, 4000, broccoliLoop);
}
function sandwichLoop(){
    var x = Math.random() * 850;
    $('.Sandwich-1').css({"left": x, "top": "0px"});
    $('.Sandwich-1').animate({top: '950px'}, 5000, sandwichLoop);
}
function sandwichLoop2(){
    var x = Math.random() * 850;
    $('.Sandwich-2').css({"left": x, "top": "0px"});
    $('.Sandwich-2').animate({top: '950px'}, 4000, sandwichLoop2);
}
function iceCreamLoop(){
    var x = Math.random() * 850;
    $('.Ice-Cream-1').css({"left": x, "top": "0px"});
    $('.Ice-Cream-1').animate({top: '950px'}, 4000, iceCreamLoop);
}
function iceCreamLoop2(){
    var x = Math.random() * 650;    
    $('.Ice-Cream-2').css({"left": x, "top": "0px"});
    $('.Ice-Cream-2').animate({top: '950px'}, 5000, iceCreamLoop2);
}
function spaghettiLoop(){
    var x = Math.random() * 850;
    $('.Spaghetti-1').css({"left": x, "top": "0px"});
    $('.Spaghetti-1').animate({top: '950px'}, 7000, spaghettiLoop);
}
function spaghettiLoop2(){
    var x = Math.random() * 850;
    $('.Spaghetti-2').css({"left": x, "top": "0px"});
    $('.Spaghetti-2').animate({top: '950px'}, 5500, spaghettiLoop2);
}
function spaghettiLoop3(){
    var x = Math.random() * 600;
    $('.Spaghetti-3').css({"left": x, "top": "0px"});
    $('.Spaghetti-3').animate({top: '950px'}, 4250, spaghettiLoop3);
}
function ojLoop(){
    var x = Math.random() * 600;
    $('.OJ').css({"left": x, "top": "0px"});
    $('.OJ').animate({top: '950px'}, 4000, ojLoop);
}
function ojLoop2(){
    var x = Math.random() * 600;
    $('.OJ-2').css({"left": x, "top": "0px"});
    $('.OJ-2').animate({top: '950px'}, 7000, ojLoop2);
}
function fishLoop(){
    var x = Math.random() * 700;
    $('.Fish').css({"left": x, "top": "0px"});
    $('.Fish').animate({top: '950px'}, 6500, fishLoop);
}
function fishLoop2(){
    var x = Math.random() * 700;
    $('.Fish-2').css({"left": x, "top": "0px"});
    $('.Fish-2').animate({top: '950px'}, 4750, fishLoop2);
}

function fishLoop3(){
    var x = Math.random() * 700;
    $('.Fish-3').css({"left": x, "top": "0px"});
    $('.Fish-3').animate({top: '950px'}, 8000, fishLoop3);
}
//-------------END OF LOOPS------------------//

//----------COLLISION SECTION---------------//
 function collisionPizza($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2; 
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else {
        points = points + 10;
        $('.Pizza-1').hide();
        document.getElementById("pointScore").innerHTML = points;
        flash(hiddenDavid5);
        $('.hiddenPoint-2').fadeIn(200);
        $('.hiddenPoint-2').fadeOut(250);
        $('.hiddenDavid').fadeIn(100);
        $('.hiddenDavid').fadeOut(100);
        $('.hiddenDavid').fadeIn(100);
        $('.hiddenDavid').fadeOut(100);
        $('.Pizza-1').show(pizzaLoop);
      }
    }
 window.setInterval(function() {
    $('.Results').text(collisionPizza($(".boxPizza-1"), $('.box1')));
 }, 200);
 function collisionPizza2($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2; 
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else {
        points = points + 10;
        $('.Pizza-2').hide();
        document.getElementById("pointScore").innerHTML = points;
        flash (hiddenDavid5);
        $('.hiddenPoint-2').fadeIn(200);
        $('.hiddenPoint-2').fadeOut(250);
        $('.hiddenDavid').fadeIn(100);
        $('.hiddenDavid').fadeOut(100);
        $('.hiddenDavid').fadeIn(100);
        $('.hiddenDavid').fadeOut(100);
        $('.Pizza-2').show(pizzaLoop2);
      }
    }
 window.setInterval(function() {
    $('.Results').text(collisionPizza2($(".boxPizza-2"),$('.box1')));
 }, 200);
 function collisionSandwich($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else {
        points = points + 10;
        $('.Sandwich-1').hide();
        document.getElementById("pointScore").innerHTML = points;
        $('.hiddenDavid-5').fadeIn(100);
        $('.hiddenDavid-5').fadeOut(100);
        $('.hiddenDavid-5').fadeIn(100);
        $('.hiddenDavid-5').fadeOut(100);
        $('.hiddenPoint-2').fadeIn(200);
        $('.hiddenPoint-2').fadeOut(250);
        $('.Sandwich-1').show(sandwichLoop);
      }
    }
 window.setInterval(function() {
    $('.Results').text(collisionSandwich($(".boxSandwich-1"), $('.box1')));
 }, 200);
  function collisionSandwich2($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else {
        points = points + 10;
        $('.Sandwich-2').hide();
        document.getElementById("pointScore").innerHTML = points;
        $('.hiddenDavid-5').fadeIn(100);
        $('.hiddenDavid-5').fadeOut(100);
        $('.hiddenDavid-5').fadeIn(100);
        $('.hiddenDavid-5').fadeOut(100);
        $('.hiddenPoint-2').fadeIn(200);
        $('.hiddenPoint-2').fadeOut(250);
        $('.Sandwich-2').show(sandwichLoop2);
      }
    }
 window.setInterval(function() {
    $('.Results').text(collisionSandwich2($(".boxSandwich-2"), $('.box1')));
 }, 200);
  function collisionIcecream($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2; 
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else {
        points = points + 10;
        $('.Ice-Cream-1').hide();      
        document.getElementById("pointScore").innerHTML = points;
        $('.hiddenDavid-5').fadeIn(100);
        $('.hiddenDavid-5').fadeOut(100);
        $('.hiddenDavid-5').fadeIn(100);
        $('.hiddenDavid-5').fadeOut(100);
        $('.hiddenPoint-2').fadeIn(200);
        $('.hiddenPoint-2').fadeOut(250);
        $('.Ice-Cream-1').show(iceCreamLoop);
      }
    }
 window.setInterval(function() {
    $('.Results').text(collisionIcecream($(".boxIce-Cream-1"), $('.box1')));
 }, 200);
  function collisionIcecream2($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;       
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else {
        points = points + 10;
        $('.Ice-Cream-2').hide();      
        document.getElementById("pointScore").innerHTML = points;
        $('.hiddenDavid-5').fadeIn(100);
        $('.hiddenDavid-5').fadeOut(100);
        $('.hiddenDavid-5').fadeIn(100);
        $('.hiddenDavid-5').fadeOut(100);
        $('.hiddenPoint-2').fadeIn(200);
        $('.hiddenPoint-2').fadeOut(250);
        $('.Ice-Cream-2').show(iceCreamLoop2);
      }
    }
 window.setInterval(function() {
    $('.Results').text(collisionIcecream2($(".boxIce-Cream-2"), $('.box1')));
 }, 200);
 function collisionSpaghetti($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;  
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else {
        points = points + 5;
        $('.Spaghetti-1').hide(); 
        document.getElementById("pointScore").innerHTML = points;
        $('.hiddenDavid-3').fadeIn(100);
        $('.hiddenDavid-3').fadeOut(100);
        $('.hiddenDavid-3').fadeIn(100);
        $('.hiddenDavid-3').fadeOut(100);
        $('.hiddenPoint-1').fadeIn(200);
        $('.hiddenPoint-1').fadeOut(250);
        $('.Spaghetti-1').show(spaghettiLoop);
      }
    }
    window.setInterval(function(){
        $('.Results').text(collisionSpaghetti($(".boxSpaghetti-1"), $('.box1')));
    }, 200);
function collisionSpaghetti2($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else {
        points = points + 5;
        $('.Spaghetti-2').hide();    
        document.getElementById("pointScore").innerHTML = points;
        $('.hiddenDavid-3').fadeIn(100);
        $('.hiddenDavid-3').fadeOut(100);
        $('.hiddenDavid-3').fadeIn(100);
        $('.hiddenDavid-3').fadeOut(100);
        $('.hiddenPoint-1').fadeIn(200);
        $('.hiddenPoint-1').fadeOut(250);
        $('.Spaghetti-2').show(spaghettiLoop2);
      }
    }
    window.setInterval(function(){
        $('.Results').text(collisionSpaghetti2($(".boxSpaghetti-2"), $('.box1')));
    }, 200);
    function collisionSpaghetti3($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;       
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else {
        points = points + 5;
        $('.Spaghetti-3').hide();    
        document.getElementById("pointScore").innerHTML = points;
        $('.hiddenDavid-3').fadeIn(100);
        $('.hiddenDavid-3').fadeOut(100);
        $('.hiddenDavid-3').fadeIn(100);
        $('.hiddenDavid-3').fadeOut(100);
        $('.hiddenPoint-1').fadeIn(200);
        $('.hiddenPoint-1').fadeOut(250);
        $('.Spaghetti-3').show(spaghettiLoop3);
      }
    }
    window.setInterval(function(){
        $('.Results').text(collisionSpaghetti3($(".boxSpaghetti-3"), $('.box1')));
    }, 200);
function collisionJuice($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;  
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } 
      else {
        points = points + 25; 
        $('.OJ').hide();
       document.getElementById("pointScore").innerHTML = points;
       $('.hiddenDavid-4').fadeIn(100);
       $('.hiddenDavid-4').fadeOut(100);
       $('.hiddenDavid-4').fadeIn(100);
       $('.hiddenDavid-4').fadeOut(100);
       $('.hiddenPoint-5').fadeIn(150);
       $('.hiddenPoint-5').fadeOut(150);
       $('.hiddenPoint-5').fadeIn(150);
       $('.hiddenPoint-5').fadeOut(150);
       $('.OJ').show(ojLoop);
        }
    }
     window.setInterval(function(){
        $('.Results').text(collisionJuice($(".OJ"), $('.box1')));
    }, 200);
function collisionJuice2($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;      
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } 
      else {
        points = points + 25; 
        $('.OJ-2').hide();
       document.getElementById("pointScore").innerHTML = points;
       $('.hiddenDavid-4').fadeIn(100);
       $('.hiddenDavid-4').fadeOut(100);
       $('.hiddenDavid-4').fadeIn(100);
       $('.hiddenDavid-4').fadeOut(100);
       $('.hiddenPoint-5').fadeIn(150);
       $('.hiddenPoint-5').fadeOut(150);
       $('.hiddenPoint-5').fadeIn(150);
       $('.hiddenPoint-5').fadeOut(150);
       $('.OJ-2').show(ojLoop2);
        }
    }
     window.setInterval(function(){
        $('.Results').text(collisionJuice2($(".OJ-2"), $('.box1')));
    }, 200);
function collisionBurger($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;       
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } 
      else {
        points = points + 5; 
        $('.Burger-1').hide();
       document.getElementById("pointScore").innerHTML = points;
       $('.hiddenDavid-7').fadeIn(100);
       $('.hiddenDavid-7').fadeOut(100);
       $('.hiddenDavid-7').fadeIn(100);
       $('.hiddenDavid-7').fadeOut(100);
       $('.hiddenPoint-1').fadeIn(150);
       $('.hiddenPoint-1').fadeOut(150);
       $('.hiddenPoint-1').fadeIn(150);
       $('.hiddenPoint-1').fadeOut(150);
       $('.Burger-1').show(burgerLoop);
        }
    }
     window.setInterval(function(){
        $('.Results').text(collisionBurger($(".Burger-1"), $('.box1')));
    }, 200);
function collisionBurger2($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;       
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } 
      else {
        points = points + 5; 
        $('.Burger-2').hide();
       document.getElementById("pointScore").innerHTML = points;
        $('.hiddenDavid-7').fadeIn(150);
        $('.hiddenDavid-7').fadeOut(150);
        $('.hiddenDavid-7').fadeIn(150);
        $('.hiddenDavid-7').fadeOut(150);
        $('.hiddenPoint-1').fadeIn(150);
        $('.hiddenPoint-1').fadeOut(150);
        $('.hiddenPoint-1').fadeIn(150);
        $('.hiddenPoint-1').fadeOut(150);
        $('.Burger-2').show(burgerLoop2);
        }
    }
     window.setInterval(function(){
        $('.Results').text(collisionBurger2($(".Burger-2"), $('.box1')));
    }, 200);
     function collisionBurger3($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;      
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } 
      else {
        points = points + 5; 
        $('.Burger-3').hide();
       document.getElementById("pointScore").innerHTML = points;
       $('.hiddenDavid-7').fadeIn(100);
       $('.hiddenDavid-7').fadeOut(100);
       $('.hiddenDavid-7').fadeIn(100);
       $('.hiddenDavid-7').fadeOut(100);
       $('.hiddenPoint-1').fadeIn(150);
       $('.hiddenPoint-1').fadeOut(150);
       $('.hiddenPoint-1').fadeIn(150);
       $('.hiddenPoint-1').fadeOut(150);
       $('.Burger-3').show(burgerLoop3);
        }
    }
     window.setInterval(function(){
        $('.Results').text(collisionBurger3($(".Burger-3"), $('.box1')));
    }, 200);
function collisionHotdog($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;       
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } 
      else {
        points = points + 5; 
        $('.Hotdog').hide();
       document.getElementById("pointScore").innerHTML = points;
       $('.hiddenDavid-6').fadeIn(100);
       $('.hiddenDavid-6').fadeOut(100);
       $('.hiddenDavid-6').fadeIn(100);
       $('.hiddenDavid-6').fadeOut(100);
       $('.hiddenPoint-1').fadeIn(150);
       $('.hiddenPoint-1').fadeOut(150);
       $('.hiddenPoint-1').fadeIn(150);
       $('.hiddenPoint-1').fadeOut(150);
       $('.Hotdog').show(hotdogLoop);
        }
    }
     window.setInterval(function(){
        $('.Results').text(collisionHotdog($(".Hotdog"), $('.box1')));
    }, 200);
function collisionHotdog2($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } 
      else {
        points = points + 5; 
        $('.Hotdog-2').hide();
       document.getElementById("pointScore").innerHTML = points;
       $('.hiddenDavid-6').fadeIn(100);
       $('.hiddenDavid-6').fadeOut(100);
       $('.hiddenDavid-6').fadeIn(100);
       $('.hiddenDavid-6').fadeOut(100);
       $('.hiddenPoint-1').fadeIn(150);
       $('.hiddenPoint-1').fadeOut(150);
       $('.hiddenPoint-1').fadeIn(150);
       $('.hiddenPoint-1').fadeOut(150);
       $('.Hotdog-2').show(hotdogLoop2);
        }
    }
     window.setInterval(function(){
        $('.Results').text(collisionHotdog2($(".Hotdog-2"), $('.box1')));
    }, 200);
     function collisionHotdog3($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;   
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } 
      else {
        points = points + 5; 
        $('.Hotdog-3').hide();
       document.getElementById("pointScore").innerHTML = points;
       $('.hiddenDavid-6').fadeIn(100);
       $('.hiddenDavid-6').fadeOut(100);
       $('.hiddenDavid-6').fadeIn(100);
       $('.hiddenDavid-6').fadeOut(100);
       $('.hiddenPoint-1').fadeIn(150);
       $('.hiddenPoint-1').fadeOut(150);
       $('.hiddenPoint-1').fadeIn(150);
       $('.hiddenPoint-1').fadeOut(150);
       $('.Hotdog-3').show(hotdogLoop3);
        }
    }
     window.setInterval(function(){
        $('.Results').text(collisionHotdog3($(".Hotdog-3"), $('.box1')));
    }, 200);
function collisionBroccoli($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;    
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else {
        points = points - 25; 
        $('.Broccoli').hide();
        document.getElementById("pointScore").innerHTML = points;
         $('.hiddenDavid-2').fadeIn(150);
        $('.hiddenDavid-2').fadeOut(150);
        $('.hiddenDavid-2').fadeIn(150);
        $('.hiddenDavid-2').fadeOut(150);
        $('.hiddenPoint-3').fadeIn(250);
        $('.hiddenPoint-3').fadeOut(250);
        $('.Broccoli').show(broccoliLoop);
      }
    }
     window.setInterval(function(){
        $('.Results').text(collisionBroccoli($(".Broccoli"), $('.box1')));
    }, 200);
function collisionFish($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;    
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else {
        points = points - 25; 
        $('.Fish').hide();
        document.getElementById("pointScore").innerHTML = points;
         $('.hiddenDavid-2').fadeIn(150);
        $('.hiddenDavid-2').fadeOut(150);
        $('.hiddenDavid-2').fadeIn(150);
        $('.hiddenDavid-2').fadeOut(150);
        $('.hiddenPoint-3').fadeIn(250);
        $('.hiddenPoint-3').fadeOut(250);
        $('.Fish').show(fishLoop);
      }
    }
     window.setInterval(function(){
        $('.Results').text(collisionFish($(".Fish"), $('.box1')));
    }, 200);
  function collisionFish2($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;    
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else {
        points = points - 25; 
        $('.Fish-2').hide();
        document.getElementById("pointScore").innerHTML = points;
         $('.hiddenDavid-2').fadeIn(150);
        $('.hiddenDavid-2').fadeOut(150);
        $('.hiddenDavid-2').fadeIn(150);
        $('.hiddenDavid-2').fadeOut(150);
        $('.hiddenPoint-3').fadeIn(250);
        $('.hiddenPoint-3').fadeOut(250);
        $('.Fish-2').show(fishLoop2);
      }
    }
     window.setInterval(function(){
        $('.Results').text(collisionFish2($(".Fish-2"), $('.box1')));
    }, 200);  
 function collisionFish3($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;    
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else {
        points = points - 25; 
        $('.Fish-3').hide();
        document.getElementById("pointScore").innerHTML = points;
         $('.hiddenDavid-2').fadeIn(150);
        $('.hiddenDavid-2').fadeOut(150);
        $('.hiddenDavid-2').fadeIn(150);
        $('.hiddenDavid-2').fadeOut(150);
        $('.hiddenPoint-3').fadeIn(250);
        $('.hiddenPoint-3').fadeOut(250);
        $('.Fish-3').show(fishLoop3);
      }
    }
     window.setInterval(function(){
        $('.Results').text(collisionFish3($(".Fish-3"), $('.box1')));
    }, 200);
 function collisionTrash($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;    
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else {
        points = points - 25; 
        $('.Trash').hide();
        document.getElementById("pointScore").innerHTML = points;
         $('.hiddenDavid-2').fadeIn(150);
        $('.hiddenDavid-2').fadeOut(150);
        $('.hiddenDavid-2').fadeIn(150);
        $('.hiddenDavid-2').fadeOut(150);
        $('.hiddenPoint-3').fadeIn(250);
        $('.hiddenPoint-3').fadeOut(250);
        $('.Trash').show(trashLoop);
      }
    }
     window.setInterval(function(){
        $('.Results').text(collisionTrash($(".Trash"), $('.box1')));
    }, 200);
function collisionTrash2($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;    
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else {
        points = points - 25; 
        $('.Trash-2').hide();
        document.getElementById("pointScore").innerHTML = points;
         $('.hiddenDavid-2').fadeIn(150);
        $('.hiddenDavid-2').fadeOut(150);
        $('.hiddenDavid-2').fadeIn(150);
        $('.hiddenDavid-2').fadeOut(150);
        $('.hiddenPoint-3').fadeIn(250);
        $('.hiddenPoint-3').fadeOut(250);
        $('.Trash-2').show(trashLoop2);
      }
    }
     window.setInterval(function(){
        $('.Results').text(collisionTrash2($(".Trash-2"), $('.box1')));
    }, 200);      
function collision4($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {

      } else {
        points = points + 25;
        $('.Money-1').hide();
        
        document.getElementById("pointScore").innerHTML = points;
        $('.hiddenDavid').fadeIn(150);
        $('.hiddenDavid').fadeOut(150);
        $('.hiddenDavid').fadeIn(150);
        $('.hiddenDavid').fadeOut(150);
        $('.hiddenDavid').fadeIn(150);
        $('.hiddenDavid').fadeOut(150);
        $('.hiddenPoint-5').fadeIn(150);
        $('.hiddenPoint-5').fadeOut(150);
        $('.hiddenPoint-5').fadeIn(150);
        $('.hiddenPoint-5').fadeOut(150);
        $('.Money-1').show(moneyLoop);
      }
    }
    window.setInterval(function(){
        $('.Results').text(collision4($(".Money-1"), $('.box1')));
    }, 200);
function collisionJennifer($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
      } else if (userLives === 3){
          $('.lifeDavid-1').hide(200);
          $('.Jennifer').hide();
          userLives = userLives - 1;
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.Jennifer').show(jenniferLoop);
      } 
      else if (userLives === 2){
        $('.lifeDavid-2').hide(200);
        $('.Jennifer').hide();
        userLives = userLives - 1;
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.Jennifer').show(jenniferLoop);
      }
      else if(userLives === 1){
        $('.lifeDavid-3').hide(200);
        $('.Jennifer').hide();
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
         $(".icons").hide();
        $('.gameOver').fadeIn(400);
        $('.gameOver').fadeOut(400);
        $('.gameOver').fadeIn(400);
        $('.gameOver').fadeOut(400);
        $('.gameOver').fadeIn(400);
        $('.gameOver').fadeOut(400);
      }
      else {
        points = points + 0; 
        document.getElementById("pointScore").innerHTML = points;
        $('.Jennifer').show(jenniferLoop);
      }
    }
    window.setInterval(function(){
        $('.Results').text(collisionJennifer($(".Jennifer"), $('.box1')));
    }, 200);
    function collisionJennifer2($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {

      } else if (userLives === 3){
          $('.lifeDavid-1').hide(200);
          $('.Jennifer').hide();
          userLives = userLives - 1;
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.Jennifer-2').show(jenniferLoop);
      } 
      else if (userLives === 2){
        $('.lifeDavid-2').hide(200);
        $('.Jennifer-2').hide();
        userLives = userLives - 1;
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.Jennifer-2').show(jenniferLoop2);
      }
      else if(userLives === 1){
        $('.lifeDavid-3').hide(200);
        $('.Jennifer-2').hide();
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
         $(".icons").hide();
        $('.gameOver').fadeIn(400);
        $('.gameOver').fadeOut(400);
        $('.gameOver').fadeIn(400);
        $('.gameOver').fadeOut(400);
        $('.gameOver').fadeIn(400);
        $('.gameOver').fadeOut(400);
      }
      else {
        points = points + 0; 
        document.getElementById("pointScore").innerHTML = points;
        $('.Jennifer-2').show(jenniferLoop2);
      }
    }
    window.setInterval(function(){
        $('.Results').text(collisionJennifer2($(".Jennifer-2"), $('.box1')));
    }, 200);
    function collisionJennifer3($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
        
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {

      } else if (userLives === 3){
          $('.lifeDavid-1').hide(200);
          $('.Jennifer-3').hide();
          userLives = userLives - 1;
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.Jennifer-3').show(jenniferLoop3);
      } 
      else if (userLives === 2){
        $('.lifeDavid-2').hide(200);
        $('.Jennifer-3').hide();
        userLives = userLives - 1;
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.Jennifer-3').show(jenniferLoop3);
      }
      else if(userLives === 1){
        $('.lifeDavid-3').hide(200);
        $('.Jennifer-3').hide();
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
        $('.hiddenDavid-8').fadeIn(150);
        $('.hiddenDavid-8').fadeOut(150);
         $(".icons").hide();
        $('.gameOver').fadeIn(400);
        $('.gameOver').fadeOut(400);
        $('.gameOver').fadeIn(400);
        $('.gameOver').fadeOut(400);
        $('.gameOver').fadeIn(400);
        $('.gameOver').fadeOut(400);
      }
      else {
        points = points + 0; 
        document.getElementById("pointScore").innerHTML = points;
        $('.Jennifer-3').show(jenniferLoop3);
      }
    }
    window.setInterval(function(){
        $('.Results').text(collisionJennifer3($(".Jennifer-3"), $('.box1')));
    }, 200);
//-----------------COLLISION SECTION END---------------//

$(document).ready(function(){
    $('.hiddenDavid').hide();
    $('.hiddenDavid-2').hide();
    $('.hiddenDavid-3').hide();
    $('.hiddenDavid-4').hide();
    $('.hiddenDavid-5').hide();
    $('.hiddenDavid-6').hide();
    $('.hiddenDavid-7').hide();
    $('.hiddenDavid-8').hide();
    // HIDDEN POINTS BEGINS
    $('.gameOver').hide();
    $('.hiddenPoint-1').hide();
    $('.hiddenPoint-2').hide();
    $('.hiddenPoint-3').hide();
    $('.hiddenPoint-4').hide();
    $('.hiddenPoint-5').hide();
});

    $(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $('.David').stop().animate({
            left: '-=100px'
        }); //left arrow key
        break;
           
    case 39:
        $('.David').stop().animate({
            left: '+=100px'
        }); //right arrow key
        break;
        
        }
}); // closes document ready

