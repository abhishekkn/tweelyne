/*
tweelyne
Version 0.1
 */
/**
 * This file contains the networking code for Porcupine.
 */

/**
 * Fetches the twitter data from the tweelyne Yahoo! pipe.
 */
function getTwitterData() {
	var username=jQuery("#username").val();	
	var urlString="http://pipes.yahoo.com/pipes/pipe.run?_id=4d192193a355e9c4eaca53fc06bef1c5&_render=json&twitter_name="+username;
	var table;
	jQuery.ajax({
		beforeSend: function (){
			spybug.spy("Fetching data for " + username + " from " + urlString);
		},
		async: false,
		url: urlString,
		dataType: "json",
		type: "GET",
		error: function (requestObject, textStatusObject, errorThrownObject){
			spybug.spy("Error...");
		},
		success: function (data) {
			spybug.spy("AJAX request successful.");
			spybug.spy(data.value.items[0].status[0].text);
			spybug.spy(data.value.items[0].status[0].created_at);
			table=parseTwitterData(data.value.items[0].status);
		},
		complete: function (requestObject, textStatusObject) {
			
			spybug.spy("Complete...");
		}
	});
	return table;
}