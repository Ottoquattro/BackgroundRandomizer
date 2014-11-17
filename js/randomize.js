(function($) {

	'use strict'

	$.fn.randomizza = function(options){
		
		var settings = $.extend({
            text         : 'Cacca',
            color        : ['#000', '#333', '#999']
        }, options);
		// var colors = ['#eee', '#f2f2f2', '#99cc00', '#999', '#cc0011'];
		var divs = $(".caso");
		

			function colori() {
				// var color = colors.sort(function() {return 0.5 - Math.random()});
				var color = settings.color[Math.floor(Math.random()*settings.color.length)];
				var divvi = divs.sort(function() {return 0.5 - Math.random()});
				var div = divs[Math.floor(Math.random()*divs.length)];

				//Changin' one div background
				$(div).css("background-color", color);

				//Changing each div background
				// $(divvi[0]).css("background-color", colors[0]);
			 	// 	$(divvi[1]).css("background-color", colors[1]);
			 	// 	$(divvi[2]).css("background-color", colors[2]);
			 	// 	$(divvi[3]).css("background-color", colors[3]);
			 	// 	$(divvi[4]).css("background-color", colors[4]);
			};
		 	setInterval(colori, 300); // Time in milliseconds
	};

})(jQuery);
