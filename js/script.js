	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).fadeIn(500);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).fadeOut(150);
	});
	
	$('.slider__block').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});
	
		window.onload = function(){

	  var toggle = document.getElementById('toggle');

		var subMenu = document.getElementsByClassName('dropdown-menu');

		toggle.onmouseover = function() {
			    toggle.style.backgroundColor = '#242424';
			    toggle.style.borderBottom = '8px solid #e91b24';
			    toggle.style.color = '#fff';
		  	}
		toggle.onmouseout = function(){
			    toggle.style.backgroundColor = '#fff';
			    toggle.style.borderBottom = 'none';
			    toggle.style.color = '#000';
		}
		for(var i = 0; i < subMenu.length; i++ ) {

		 		subMenu[i].onmouseover = function(){
			    toggle.style.backgroundColor = '#242424';
			    toggle.style.borderBottom = '8px solid #e91b24';
			    toggle.style.color = '#fff';
		  	}
		  	subMenu[i].onmouseout = function(){
			    toggle.style.backgroundColor = '#fff';
			    toggle.style.borderBottom = 'none';
			    toggle.style.color = '#000';
		  	}
		 }  
	}
