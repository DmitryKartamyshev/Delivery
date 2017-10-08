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
	

	$(document).ready(function() {

		var toggle = document.getElementById('toggle');
		var subMenu = document.getElementsByClassName('dropdown-menu');
		var navMenu = document.getElementsByClassName('nav-link');
		var navActive = document.querySelector('nav__active');

		for(var i = 0; i < navMenu.length; i++ ) {

			navMenu[i].onmouseover = function(event) {
				toggle.removeAttribute('id');
				event.target.classList.add("nav__active");
		  }

		  navMenu[i].onmouseout = function(event) {
		  	toggle.id = "toggle";
			 	event.target.classList.remove('nav__active');
		  }
		}

	});

