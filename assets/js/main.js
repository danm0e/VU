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
			$('html, body, main').animate({ scrollTop: targetOffset }, 1000, 'swing')
			// console.log('page scrolling to ' + $(this).attr('href'))
		})
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
        	objectBottom = $(this).offset().top + $(this).outerHeight()
            // if the object is completely visible in the window
            if( windowBottom > objectBottom ){
                // fade it in 
                $(this).animate({'opacity':'1', 'margin-top':'0'}, 500, 'swing')
                // non js fallback set in globals.scss
            }
        })
    }



/*----------------------------------------------------------------------*/	
}) // END doc ready