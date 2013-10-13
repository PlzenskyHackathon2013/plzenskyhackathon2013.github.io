$(document).ready(function(){
	// Formulář
	$('#additional-info form').submit(function() {
		var userId = $('#user-id', this).attr('value');
		var $formParent = $(this).parent();
		var $nameField = $('#name', this);
		var $phoneField = $('#phone', this);
		var $transportField = $('#transport', this);
		var $allInputs = $('input', this);
		var $successMessage = $('#success-message');

		$allInputs.prop('disabled', true);
		$.hideFlashMessage();
		$.ajax({
			url: '/user/confirm/additional-info/' + userId,
			type: 'POST',
			data: {
				name: $nameField.attr('value'),
				phone: $phoneField.attr('value'),
				transport: $transportField.attr('value')
			}
		}).done(function() {
			$formParent.hide();
			$successMessage.show();
		}).fail(function(jqXhr, textStatus) {
			$allInputs.prop('disabled', false);
			$.showFlashMessage('warning', 'Nastala chyba při odesílání formuláře, zkuste to prosím znovu.');
		});

		return false;
	});
});
