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
	$('#recBtn').click(function(){
		$("#recommendModal").modal();
	})
	$('#recCommunity').click(recBookCommunity);
	$('#recommendToFriendSubmit').click(recBookFriend);
}

function likeBook(e) {
	e.preventDefault();

	var bookTitle = $('.title').text();
	var url = '/like/' + bookTitle;
	$.get(url, function(result) {
		$('#likeBtn').blur();
		if(result["liked"]) {
			$('#likeBtn').css({
				'color':'#F784C9',
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

function recBookCommunity(e) {
	e.preventDefault();

	var bookTitle = $('.title').text();
	var url = '/recommend/' + bookTitle;
	$.get(url, function(result) {
		$('#recBtn').blur();
		if(result["recommended"]) {
			$('#recBtn').css({
				'background-color': '#7A21C6',
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

function recBookFriend(e) {
	e.preventDefault();
	console.log('recommending to friend');
	var bookTitle = $('.title').text();
	var friend = $('#selFriend').val();

	console.log("selFriend: " + friend);

	var url = '/recommend/' + bookTitle + '/' + friend;
	$.get(url, function(result) {
		$('#recBtn').blur();
		if(result["recommended"]) {
			$('#recBtn').css({
				'background-color': '#7A21C6',
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