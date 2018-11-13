
	

// Navigation style change with scrolling
$(document).ready(function() {	   

  $(window).scroll(function() {
	  if ($(this).scrollTop() > 0) {
		  $('nav.navbar-color').css('transition-duration', '1s');
		  $('nav.navbar-color').css('background-color','#FFFFFF');
		  $('.home-icon').css('color','#666');
		  $('.products-icon').css('color','#666');
		  $('.services-icon').css('color','#666');
		  $('.home-icon path').css('fill','#666');
		  $('.products-icon path').css('fill','#666');
		  $('.services-icon path').css('fill','#666');
		  $('li.home-icon').hover(function() {
　　				//〜マウスを乗せたときの処理〜
			  	$('.home-icon path').css('fill','#2BBF82');			  
		  	}, function() {
　				//　〜マウスを離したときの処理〜
			   $('.home-icon path').css('fill','#666');
		  	});
		  $('li.products-icon').hover(function() {
　　				//〜マウスを乗せたときの処理〜
		  		$('.products-icon path').css('fill','#E88080');  
			}, function() {
　				//　〜マウスを離したときの処理〜
				$('.products-icon path').css('fill','#666');
			});
		  $('li.services-icon').hover(function() {
					//〜マウスを乗せたときの処理〜
			  	$('.services-icon path').css('fill','#49A7FC');		
		  	}, function() {
　				//　〜マウスを離したときの処理〜
			   $('.services-icon path').css('fill','#666');
		  	});
		  $('cls-1 , a.cls-1').css('color','#2BBF82');
		  $('.cls-1').css('fill','#2BBF82');
		  $('nav').removeClass('navbar-color');
		  
    } else {
		  $('nav.navbar-wrap').css('background','linear-gradient(180deg, rgba(0,0,0,0.4) 10%, transparent 80%)');
    }
  });
} );


// 矢印キー　左右スイッチ
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



