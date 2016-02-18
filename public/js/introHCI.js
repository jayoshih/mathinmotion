'use strict';
var start;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	window.performance.mark();
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".likeBtn").click(registerClick);

	// Feature detects Navigation Timing API support.
	if (window.performance) {
	  var timeSincePageLoad = Math.round(performance.now());
	  ga('send', 'timing', 'like', 'click', timeSincePageLoad);
	}
}

function registerClick(){
	ga("send", "event", "like", "click");
}