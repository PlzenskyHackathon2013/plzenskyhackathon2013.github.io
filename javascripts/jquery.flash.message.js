(function createFlashMessageFactoryFn($) {
	$.showFlashMessage = function(type, message, clickCallback) {
		var $container, height;

		$('.flash-message').trigger('click'); // close existing flash messages

		$container = $('<div>').addClass('flash-message').addClass(type);
		$container.prependTo($('body'));
		$close = $('<div>').addClass('close').html('&times;');

		$container.html(message);
		$container.show();

		$close.appendTo($container);

		height = $container.outerHeight(true);
		$container.css({ opacity: 0, top: -height });
		$container.animate({ opacity: 1, top: 0 }, 500);

		$container.click(function(event) {
			$container.animate({ opacity: 0, top: -height }, 250, function() {
				$container.remove();
				if (clickCallback) clickCallback();
			});
		});
	};
	$.hideFlashMessage = function() {
		$('.flash-message').trigger('click'); // close existing flash messages
	};
})(jQuery);
