//init vars
var boxClass = [];
var currentColor = '#22A7F0';
var cursorColor = 'blue.png';

//Dom Ready =============================
$(document).ready(function(){

	//When a specific box has been clicked
	$('.box').on('click', boxClicked);

	$('#colorPicker a').on('click', chooseColor);


});


//Functions =============================
function boxClicked() {

	$(this).attr('data-background', currentColor);

}

function chooseColor() {

	currentColor = $(this).attr('data-color');
	cursorColor = $(this).attr('data-cursor');
	$('body').css('cursor', 'url(../images/' + cursorColor + '), auto');

}