/*
tweelyne
Version 0.1
 */
/**
 * This file contains the initialization code for Porcupine.
 */
var spybug = new SpyBug();

spybug.spy("SpyBug initialized. Starting application...");
spybug.spy("Registering with jQuery(document).ready()...");

jQuery(document).ready(function(){
	var table;
	spybug.spy("Successfully registered with jQuery(document).ready()!");

	spybug.spy("Initializing the timeglider plugin...");
	
	spybug.spy("Done initializing the timeglider plugin!");
	jQuery("#go").click(function(){
		
		table=getTwitterData();
		spybug.spy("Before setting table to div:"+table);
		jQuery("#timeline-html").html(table);
		jQuery("#placement").timeline({
		"min_zoom":18,
		"max_zoom":55,
		"data_source":"#mylife"
	});
	});
});

