// Background randomizer 0.1
// mail@ottoquattro.com

(function($) {

	$.fn.randomizza = function(options){
		
		var settings = $.extend({
            time: 300,
            color: ['#000', '#333', '#999'],
            images : []
        }, options);

		var divs = $(".random");
		
		if (typeof settings.images !== 'undefined' && settings.images.length > 0)
		{
      function immagini (){
        var image = settings.images[Math.floor(Math.random()*settings.images.length)];
        var div = divs[Math.floor(Math.random()*divs.length)];
        $(div).css('background-image', 'url(' + image + ')');
      };
      setInterval(immagini, settings.time); // Time in milliseconds     
		} 
		else
		{
			function colori() {
        var color = settings.color[Math.floor(Math.random()*settings.color.length)];
        var div = divs[Math.floor(Math.random()*divs.length)];

        //Changin' one div background at a time
        $(div).css("background-color", color);

      };
      setInterval(colori, settings.time); // Time in milliseconds
	 	};
	};

})(jQuery);
