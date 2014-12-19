$(document).ready(function() {
//When a user types into the top and bottom text inputs
	//The users text should show in the img holder top and bottom h1 elements
	var $textOnTop;
	var $textOnBottom;
	var $memeImage;

	$(".form #topText").keyup(function() {
		var $textOnTop = $("#topText").val();
		$('.meHigh').html($textOnTop);
	});

	$(".form #bottomText").keyup(function() {
		var $textOnBottom = $("#bottomText").val();
		$('.meLow').html($textOnBottom);
	})

	$(".form #imageURL").keyup(function() {
		var $memeImage = $("#imageURL").val();
		$('#imgHolder').css('background-image', 'url('+$memeImage+')');
	});
});