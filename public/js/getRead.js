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
		$("#recommendFriendModal").modal();
	})
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
				'background': 'url("../images/heart2.png") center no-repeat',
				'background-size':' 46.2px 42px',
				'background-color': '#fff'
			});
		}
		else {
			$('#likeBtn').css({
				'background': 'url("../images/heart.png") center no-repeat',
				'background-size':' 46.2px 42px',
				'background-color': '#fff'
			});
		}
	})
}

function recBookFriend(e) {
	e.preventDefault();
	
	var bookTitle = $('.title').text();
	var friend = $('#selFriend').val();

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