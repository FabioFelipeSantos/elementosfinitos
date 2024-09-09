$(document).ready(function () {
	$("#telefone").mask("(00) 00000 0000");

	const date = new Date();

	$("#footer-date-time").attr(
		"datetime",
		[
			date.getUTCFullYear(),
			date.getUTCMonth() + 1 < 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1,
			date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate(),
		].join("-")
	);

	$("#footer-date-time").html(date.getUTCFullYear());

	$("#contact-form").validate({
		errorClass: "invalid-labels",
		rules: {
			Nome: {
				required: true,
				minlength: 2,
			},
			"E-Mail": {
				email: true,
				required: true,
			},
			Mensagem: {
				required: true,
				minlength: 2,
			},
		},
		messages: {
			Nome: {
				required: "Por favor, entre com seu nome.",
				minlength: "Seu nome deve ter pelo menos duas letras...",
			},
			"E-Mail": {
				email: "Digite um e-mail válido da forma abc@mail.com.",
				required: "Digite seu melhor e-mail.",
			},
			Mensagem: {
				required: "Digite sua mensagem para nós...",
				minlength: "Sua mensagem deve possuir mais de duas letras.",
			},
		},
		submitHandler: function (form) {
			const toastLiveExample = $("#liveToast");
			$(toastLiveExample).css("background-color", "rgba(33, 33, 41, 1)");

			const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
			toastBootstrap.show();

			form.reset();
		},
		invalidHandler: function (form, validator) {
			alert("Formulário não enviado, preencha os campos corretamente!");
		},
	});
});
