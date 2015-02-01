//init vars
var boxClass = [];
var currentColor = '#22A7F0';
var isDragging = false;


//Dom Ready =============================
$(document).ready(function(){

	//When a specific box has been clicked
	$('.box').on('click', boxClicked);

	$('.box').on('mousedown', startDrag);
	$('.box').on('mouseup', removeDrag);

	$('.box').on('mouseenter', enterBox);

	$("#colorPicker").spectrum({
    color: "#22A7F0",
    change: function(color) {
        currentColor = color.toHexString();
        console.log(currentColor);
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








