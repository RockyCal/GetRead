'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#likeBtn').click(likeBook);
}

function likeBook(e) {
	e.preventDefault();

	var bookTitle = $('.title').text();
	var url = '/like/' + bookTitle;
	$.get(url, function(result) {
		if(result["liked"]) {
			$('#likeBtn').css('color', 'red');
		}
	})
}