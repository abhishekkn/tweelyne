/*
<PROJECT NAME>
Version <VERSION NUMBER>

Developed by <DEVELOPER NAME>

Copyright, <YEAR>
 */
/**
 * This file contains the initialization code for Porcupine.
 * @author Rishabh Rao
 */
var spybug = new SpyBug();

spybug.spy("SpyBug initialized. Starting application...");
spybug.spy("Registering with jQuery(document).ready()...");

jQuery(document).ready(function(){
    spybug.spy("Successfully registered with jQuery(document).ready()!");

	spybug.spy("Initializing the timeglider plugin...");
	var tg1 = jQuery("#placement").timeline({
		"min_zoom":18,
		"max_zoom":55, 
		"data_source":"#mylife"
	});
	spybug.spy("Done initializing the timeglider plugin!");
});
