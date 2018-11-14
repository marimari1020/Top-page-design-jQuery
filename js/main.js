
	

// Navigation style change with scrolling
$(document).ready(function() {	   

  $(window).scroll(function() {
	  if ($(this).scrollTop() > 0) {
		  
		  $('nav.navbar-color').css('transition-duration', '1s');
		  
		  $('nav.navbar-color').css('background-color','#FFFFFF');
		  $('a.nav-link').css('color','#666');
		  $('cls-1 , a.cls-1').css('color','#2BBF82');
		  $('.cls-1').css('fill','#2BBF82');
		  $('nav').removeClass('navbar-color');
		  
		  
    } else {
      $('nav.navbar-wrap').css('background','linear-gradient(180deg, rgba(0,0,0,0.4) 10%, transparent 80%)');
	
		
		
    }
  });
} );



$("#target").one("mouseover",  function ()  {
    $("#target").animate({
        "left": "60px"
    });
}  );

	
$("#target1").one("mouseover",  function ()  {
    $("#target1").animate({
        "left": "60px"
    });
}  );

		
						  


$("#target2").one("mouseover",  function ()  {
    $("#target2").animate({
        "left": "60px"
    });
}  );

		
				   
			   
				   
		