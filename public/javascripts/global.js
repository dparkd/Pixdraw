//init vars
var boxClass = [];
var currentColor = '#22A7F0';
var cursorColor = 'blue.png';
var isDragging = false;


//Dom Ready =============================
$(document).ready(function(){

	//When a specific box has been clicked
	$('.box').on('click', boxClicked);

	$('#colorPicker a').on('click', chooseColor);

	$('.box').on('mousedown', startDrag);
	$('.box').on('mouseup', removeDrag);

	$('.box').on('mouseenter', enterBox);


});


//Functions =============================
//Change color on click
function boxClicked() {

	$(this).attr('data-background', currentColor);

}

//Choose a color
function chooseColor() {

	currentColor = $(this).attr('data-color');
	cursorColor = $(this).attr('data-cursor');
	$('body').css('cursor', 'url(../images/' + cursorColor + '), auto');

}

//draggingMouse
function startDrag() {
	isDragging = true;
	console.log('isDraggin');
}
function removeDrag() {
	isDragging = false;
	console.log('nodrag');
}

//Enter box
function enterBox() {
	
	if (isDragging) {
		$(this).attr('data-background', currentColor);
	}
	else{
		return;
	}
	
	
}








