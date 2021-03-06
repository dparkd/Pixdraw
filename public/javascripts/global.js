//init vars
var boxClass = [];
var currentColor = '#22A7F0';
var isDragging = false;
var previousColors = [];
var eraserColor = '#333';
var cursorCount = 1;


//Dom Ready =============================
$(document).ready(function(){

	//When a specific box has been clicked
	$('.box').on('click', boxClicked);
	//When a prevcolor has been clicked
	$('.colors').on('click', colorClicked);

	$('.box').on('mousedown', startDrag);
	$('.box').on('mouseup', removeDrag);

	$('.box').on('mouseenter', enterBox);

	//Eraser function
	$("body").keydown(function(e) {
	  if(e.keyCode == 69 && cursorCount == 1) { // e
	  	currentColor = eraserColor;
	  	$('#square').css('cursor', 'cell');
	  	cursorCount = 2;
	  }
	  else { // other
	  	if (previousColors.length == 0){
	  		currentColor = '#22A7F0';
	  	}else{
	  		currentColor = previousColors[0];
	  	}
	  	$('#square').css('cursor', 'crosshair');
	  	cursorCount = 1;
	  }
	});

	$("#colorPicker").spectrum({
    color: "#22A7F0",
    change: function(color) {
        currentColor = color.toHexString();
        $('#square').css('cursor', 'crosshair');
        if (previousColors.length === 10){
        	previousColors.pop();
        	previousColors.unshift(color.toHexString());
        }
        else{
        	previousColors.unshift(color.toHexString());	
        }
        prevColor();
    }
	});

	$('#image').on('click', toImg);

});

//Functions =============================
function toImg() {
	html2canvas($('#square'), {
	  onrendered: function(canvas) {
	    var img = canvas.toDataURL()
	    window.open(img);
	  }
	});
}

//Change color on click
function boxClicked() {

	$(this).css('background', currentColor);

}

//draggingMouse
function startDrag() {
	isDragging = true;
}
function removeDrag() {
	isDragging = false;
}

//Enter box
function enterBox() {
	
	if (isDragging) {
		$(this).css('background', currentColor);
	}
	else{
		return;
	}
	
}

//Previous Colors
function prevColor() {
	for (var i=0; i< 10; i++ ){
		$('#color-' + i.toString()).css('background', previousColors[i]);
	}
}

function colorClicked(){

	var colorString = $(this).attr('id')
	var colorNumber = colorString.substr(colorString.length -1);
	currentColor = $('#color-' + colorNumber).css('background');

}

//Eraser Function
function eraserClick() {
	console.lo
}






