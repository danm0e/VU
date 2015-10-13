/************************************************************************\
	VuSystems
	---------------------------------------------------------------------
	MODULE:		main.js
	PURPOSE:	main scripts for interactive functionality
	@author:	dan moe & chris grace
/************************************************************************/

$(document).ready(function() {
/*----------------------------------------------------------------------*/	

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



/*----------------------------------------------------------------------*/	
}) // END doc ready