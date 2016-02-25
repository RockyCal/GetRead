/* filename: bookpage.js
	created: 2/24/16 
	in which Marisa attempts to implement a rating system */

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$('#1').click(rateBook);
	$('#2').click(rateBook);
	$('#3').click(rateBook);
	$('#4').click(rateBook);
	$('#5').click(rateBook);
}

function rateBook(e) {
	e.preventDefault();
	
}