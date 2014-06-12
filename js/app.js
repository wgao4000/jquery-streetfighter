$(document).ready(function(){
  var mouseenter;
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
    playHadouken();
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
  })
  
  .mouseup(function(){
  	 $('.ryu-throwing').hide();
  	 $('.ryu-ready').show();
  });
  
  $(this).keydown(function(event){
  	 if(event.which==88){
  	 	$('.ryu-still').hide();
  	 	$('.ryu-ready').hide();
  	    $('.ryu-cool').show();
     }
   })
  
  .keyup(function(event){
  	 if(event.which==88){
  	    $('.ryu-cool').hide();
  	    if(mouseenter==0)
  	     $('.ryu-still').show();
  	    else if(mouseenter==1)
         $('.ryu-ready').show();
  	 }
   });
});

function playHadouken(){
	 $('#hadouken-sound')[0].volume=0.5;
	 $('#hadouken-sound')[0].load();
     $('#hadouken-sound')[0].play();
}