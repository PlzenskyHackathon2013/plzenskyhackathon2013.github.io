$(document).ready(function(){
	// Registrační formulář
	$('#contact-form.register form').validate({ onsubmit: true, onkeyup: false, onfocusout: false, messages: { email: { required: "Potřebujeme váš e-mail, abychom vás mohli zaregistrovat.", email: "Váš e-mail musí mít správný formát." } } });
	$('#contact-form.register form').submit(function() {
		var $formParent = $(this).parent();
		var $inputField = $('input#email', this);
		var $allInputs = $('input', this);
		var isValid = $(this).valid();

		if (isValid) {
			$allInputs.prop('disabled', true);
			$.ajax({
				url: '/user/register/',
				type: 'POST',
				data: { email: $inputField.attr('value') }
			}).done(function() {
				$formParent.hide();
				$.showFlashMessage('info', 'Na váš e-mail byl zaslán ověřovací kód. Po jeho zadání bude registrace dokončena.');
			}).fail(function(jqXhr, textStatus) {
				$allInputs.prop('disabled', false);
				if (jqXhr.status === 409 && jqXhr.responseText === 'exists') {
					$.showFlashMessage('warning', 'E-mailová adresa je již zaregistrována. Zkontrolujte si, prosím, vaší e-mailovou schránku. Měli byste dostat potvrzovací zprávu.');
				}
				else if (jqXhr.status === 400 && jqXhr.responseText === 'invalid') {
					$.showFlashMessage('error', 'E-mailová adresa není ve správném formátu.');
				}
				else {
					$.showFlashMessage('error', 'Nastala neznámá chyba při registraci. Zkuste to znovu, prosím.');
				}
			});
		}

		return false;
	});

	// Twitter tlačítko
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="http://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
});
