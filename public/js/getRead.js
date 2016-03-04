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
	$('#likeBtn').click(likeClick);
	$('#recBtn').click(recClick);
	$('#home').click(homeClick);
	$('#liked').click(historyClick);
	$('#friends').click(friendsClick);
	$('#profile').click(profileClick);
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

/* note: likeClick is for the big heart button, historyClick is for the navbar page */
function likeClick(e) {
	ga("send", "event", "like", "click");
}

function recClick(e) {
	ga("send", "event", "recommend", "click");
}

function homeClick(e) {
	ga("send", "event", "home", "click");
}

/* note: historyClick is for the navbar "liked books" page, not the heart button */
function historyClick(e) {
	ga("send", "event", "history", "click");
}

function friendsClick(e) {
	ga("send", "event", "friends", "click");
}

function profileClick(e) {
	ga("send", "event", "profile", "click");
}