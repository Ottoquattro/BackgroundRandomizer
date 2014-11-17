// Background randomizer 0.1
// mail@ottoquattro.com

(function($) {

	'use strict'

	$.fn.randomizza = function(options){
		
		var settings = $.extend({
            time        : 300,
            color        : ['#000', '#333', '#999']
        }, options);

		var divs = $(".random");
		
		function colori() {
			var color = settings.color[Math.floor(Math.random()*settings.color.length)];
			var div = divs[Math.floor(Math.random()*divs.length)];

			//Changin' one div background at a time
			$(div).css("background-color", color);

		};
	 	setInterval(colori, settings.time); // Time in milliseconds
	};

})(jQuery);
