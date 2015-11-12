/************************************************************************\
	VuSystems
	---------------------------------------------------------------------
	MODULE:		main.js
	PURPOSE:	main scripts for interactive functionality
	@author:	dan moe & chris grace
/************************************************************************/

$(document).ready(function() {
/*----------------------------------------------------------------------*/	

    // LAZY LOADING
    /********************************************************************/
    
    // find all child elements of this and add the class for lazyloading
    $('.fade-children').find('*').addClass('fadein')

    // call lazy load function on page load
    lazyload()

    // call lazy load function on scroll
    $(window).scroll( function() {
        lazyload()
    })

    function lazyload() {
        // cache each lazyload object
        $('.fadein').each( function(){
            // cache viewport height and object offset
            var windowBottom = $(window).scrollTop() + $(window).height(),
            objectBottom = $(this).offset().top //+ $(this).outerHeight()
            // if the object is completely visible in the window
            if( windowBottom >= objectBottom ){
                // fade it in 
                $(this).animate({'opacity':'1', 'margin-top':'0'}, 500, 'swing')
                // $(this).addClass('inView') // handle with css?
                // non js fallback set in globals.scss
            }
        })
    }


	// ARROW JUMP NAVIGATION
	/********************************************************************/
	// cache each link with a hashtag
	$('a[href*=#]').each(function() {
		$(this).click(function(e) {
			e.preventDefault()
			var targetOffset = $($(this).attr('href')).offset().top +1 // +1px to initiate navIn on homepage
			$('html, body').animate({ scrollTop: targetOffset }, 1000, 'swing')
			// console.log('page scrolling to ' + $(this).attr('href'))
		})
	})
	// make sure the links to the top go to the absolute top of the page
    $('a[href=#top]').click(function() {
    	$('html, body').animate({ scrollTop: 0 }, 1000, 'swing')
    })

    // ITEMS TO FADE IN
	/********************************************************************/

    $(window).scroll( function() {
		// change states on scroll up/down
		$(window).scrollTop() >= $('main').offset().top ? navIn() : navOut()
		$('.jumptop').hasClass('in') ? $('.jumptop').addClass('in') : $('.jumptop').removeClass('in')
    })

    $(window).resize( function() {
		// change states on window resize
		$(window).scrollTop() >= $('main').offset().top ? navIn() : navOut()
    })

    if( !$('body').hasClass('home') ) {
    	navIn()
    }

    $(window).scroll( function() {
    	if ( $(window).scrollTop() >= $('main').offset().top ) {
			$('.jumptop').addClass('in')
    	}

    	if ( $(window).scrollTop() <= $('main').offset().top ) {
    		$('.jumptop').removeClass('in')
    	}
    })

    // functions for adding/removing classes for nav positioning
    function navIn() {
    	$('.dark-logo').addClass('in')
    	$('#sidenav').addClass('push-down')
        $('.nav-position').addClass('fixed')
    }

    function navOut() {
    	$('.dark-logo').removeClass('in')
    	$('#sidenav').removeClass('push-down')
        $('.nav-position').removeClass('fixed')
    }


/*----------------------------------------------------------------------*/	
}) // END doc ready