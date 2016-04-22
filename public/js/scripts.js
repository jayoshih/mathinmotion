'use strict';
var start;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	$("#submit_url").keydown(updatePreview);
});

function updatePreview(){
	$("#submit_preview").attr("src", $("#submit_url").val().trim());
}
