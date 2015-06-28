/**
 * Main JavaScript
 * Site Name
 *
 * Copyright (c) 2015. by Way2CU, http://way2cu.com
 * Authors:
 */

// create or use existing site scope
var Site = Site || {};

// make sure variable cache exists
Site.variable_cache = Site.variable_cache || {};


/**
 * Check if site is being displayed on mobile.
 * @return boolean
 */
Site.is_mobile = function() {
	var result = false;

	// check for cached value
	if ('mobile_version' in Site.variable_cache) {
		result = Site.variable_cache['mobile_version'];

	} else {
		// detect if site is mobile
		var elements = document.getElementsByName('viewport');

		// check all tags and find `meta`
		for (var i=0, count=elements.length; i<count; i++) {
			var tag = elements[i];

			if (tag.tagName == 'META') {
				result = true;
				break;
			}
		}

		// cache value so next time we are faster
		Site.variable_cache['mobile_version'] = result;
	}

	return result;
};

/**
 * Function called when document and images have been completely loaded.
 */
Site.on_load = function() {


	$('div.controls a:first').on('click',function() {
		$(this).addClass('active');
		$('div.controls a:first').next().removeClass('active');
		$('div.controls a:last').removeClass('active');
		$('div.testimonial:first').css('left','0%')
								  .css('opacity','1');

		$('div.testimonial:first').next().css('left','-150%')
						  				 .css('opacity','0');

		$('div.testimonial:last').css('left','-150%')
							     .css('opacity','0');

	});

	$('div.controls a:first').next().on('click',function() {
		$(this).addClass('active');
		$('div.controls a:first').removeClass('active');
		$('div.controls a:last').removeClass('active');
		$('div.testimonial:first').next().css('left','0%')
								  .css('opacity','1');

		$('div.testimonial:first').css('left','-150%')
						  				 .css('opacity','0');

		$('div.testimonial:last').css('left','-150%')
							     .css('opacity','0');

	});

	$('div.controls a:last').on('click',function() {
		$(this).addClass('active');
		$('div.controls a:first').removeClass('active');
		$('div.controls a:first').next().removeClass('active');
		$('div.testimonial:last').css('left','0%')
								 .css('opacity','1');

		$('div.testimonial:first').css('left','-150%')
						  		  .css('opacity','0');

		$('div.testimonial:first').next().css('left','-150%')
							     		 .css('opacity','0');

	});

	// Function for close button
	$('a.close').on('click',function(){
		$('div.testimonial').css('opacity','0')
							.css('left','-150%');
		$('div.controls a').removeClass('active');
	});

	// Function for showing form
	$('a.callback').on('click',function(){
		$('div.lightbox').css('top','15%');
	});

	// Function for closing form
	$('div.lightbox a').on('click',function(){
		$('div.lightbox').css('top','-100%');
	})

};


// connect document `load` event with handler function
$(Site.on_load);
