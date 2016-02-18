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
	$('#recBtn').click(recBook);
}

function likeBook(e) {
	e.preventDefault();

	var bookTitle = $('.title').text();
	var url = '/like/' + bookTitle;
	$.get(url, function(result) {
		$('#likeBtn').blur();
		if(result["liked"]) {
			$('#likeBtn').css({
				'color':'red',
				'background-color': '#fff'
			});
		}
		else {
			$('#likeBtn').css({
				'color': '#333',
				'background-color': '#fff'
			});
		}
	})
}

function recBook(e) {
	e.preventDefault();

	var bookTitle = $('.title').text();
	var url = '/recommend/' + bookTitle;
	$.get(url, function(result) {
		$('#recBtn').blur();
		if(result["recommended"]) {
			$('#recBtn').css({
				'background-color': '#6600cc',
				'color': 'white'
			});
		}
		else {
			$('#recBtn').css({
				'background-color': '#fff',
				'color': '#333'
			});
		}
	})
}