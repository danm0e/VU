/************************************************************************\
	VuSystems
	---------------------------------------------------------------------
	MODULE:		main.js
	PURPOSE:	main scripts for interactive functionality
	@author:	dan moe & chris grace
/************************************************************************/

$(document).ready(function() {
/*----------------------------------------------------------------------*/	

	// FIX NAVIGATION
	/********************************************************************/
	triggerOffset = $('main').offset().top
	// console.log('Trigger is at ' + triggerOffset )

	$(window).scroll(function () {
		windowOffset = $(this).scrollTop()
		// console.log('Window is at ' + windowOffset )

	    if( windowOffset >= triggerOffset ) {
			// console.log('YEP!')
	    	// $('#nav').addClass('fixed-left')
	    } else {
	    	// $('#nav').removeClass('fixed-left')
	    }

	})

	// ARROW JUMP NAVIGATION
	/********************************************************************/
	// cache each link with a hashtag
	$('a[href*=#]').each(function() {
		$(this).click(function(e) {
			e.preventDefault()
			var targetOffset = $($(this).attr('href')).offset().top
			$('html, body').animate({ scrollTop: targetOffset }, 1000, 'swing')
			// console.log('page scrolling to ' + $(this).attr('href'))
		})
	})
	// make sure the links to the top go to the absolute top of the page
    $('a[href=#top]').click(function() {
    	$('html, body').animate({ scrollTop: 0 }, 1000, 'swing')
    })

    // LAZY LOADING
	/********************************************************************/
	
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
                // non js fallback set in globals.scss
            }
        })
    }

    // DARK LOGO FADE IN
	/********************************************************************/

    $(window).scroll( function() {
		var windowTop = $(window).scrollTop(),
			mainTop = $('main').offset().top

			// change states on scroll down
            if( windowTop >= mainTop ) {
            	$('.dark-logo').addClass('in')
            	$('#sidenav').addClass('push-down')
	            $('.nav-wrapper').addClass('fixed-left')
			}

			// return to original states on scroll up
			if ( windowTop <= mainTop ) {
            	$('.dark-logo').removeClass('in')
	            $('.nav-wrapper').removeClass('fixed-left')
            	$('#sidenav').removeClass('push-down')
			}

    })

/*----------------------------------------------------------------------*/	
}) // END doc ready