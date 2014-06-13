$(document).ready(function(){
   var mouseenter,mousedown;
   $('.ryu').mouseenter(function(){
     $('.ryu-still').hide();
     $('.ryu-ready').show();
     mouseenter=1;
   })
   
   .mouseleave(function(){
     $('.ryu-ready').hide();
     $('.ryu-still').show();
     mouseenter=0;
   })
   .mousedown(function(){
     mousedown=1;
     playHadouken();
     anima();
   })
   
   .mouseup(function(){
      mousedown=0;
      $('.ryu-throwing').hide();
      $('.ryu-ready').show();
      });
  
   $(this).keydown(function(event){
      if(event.which==88){
       $('.ryu-still').hide();
       $('.ryu-ready').hide();
       $('.ryu-throwing').hide();
       $('.ryu-cool').show();
       $('.hadouken').hide()
      }
    })
   
    .keyup(function(event){
      if(event.which==88){
         $('.ryu-cool').hide();
         if(mouseenter==0)
          $('.ryu-still').show();
         else if(mouseenter==1){
            if(mousedown==0)
             $('.ryu-ready').show();
            else if(mousedown==1){
             playHadouken();
             anima();
            }   
         }
       }
   });
 });
 function playHadouken(){
    $('#hadouken-sound')[0].volume=0.5;
    $('#hadouken-sound')[0].load();
      $('#hadouken-sound')[0].play();
 }

 function anima(){
     $('.ryu-ready').hide();
     $('.ryu-throwing').finish().show();
     $('.hadouken').show()
    .animate(
      {'left':'520px'},
       500,
       function(){
           $(this).hide();
           $(this).css('left','500px');
       }
      )
}    