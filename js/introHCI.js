'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Javascript has been tested.");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("div.project").click(projectClick);
	$(".project-media").hide();
}

function projectClick(e) {
	// prevent the page from reloading
	e.preventDefault();

	// In an event handler, $(this) refers to
	// the object that triggered the event
	var projectTitle = $(this).find("a").find("p.project-title").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	var media = $(containingProject).find(".project-media");
	$(media).fadeToggle()
}