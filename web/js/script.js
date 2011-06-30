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
});
