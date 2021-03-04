/*

TESTED ON: Sisense 8.2.5.10151 (Windows)

ABOUT:

If you change the background color of cells in a pivot table, the text color doesn't change.  Black on blue, for example, is really hard on the eyes!

This script calculates the relative luminance of each colored pivot cell, then colors the text either white or black accordingly.

***Acknowledgements***

All credit goes to John Schulz (https://github.com/jfsiii) for the relativeLuminanceW3C function: see https://gist.github.com/jfsiii/5641126 for original.

*/
function relativeLuminanceW3C(R8bit, G8bit, B8bit) {

var RsRGB = R8bit/255;
var GsRGB = G8bit/255;
var BsRGB = B8bit/255;

var R = (RsRGB <= 0.03928) ? RsRGB/12.92 : Math.pow((RsRGB+0.055)/1.055, 2.4);
var G = (GsRGB <= 0.03928) ? GsRGB/12.92 : Math.pow((GsRGB+0.055)/1.055, 2.4);
var B = (BsRGB <= 0.03928) ? BsRGB/12.92 : Math.pow((BsRGB+0.055)/1.055, 2.4);

// For the sRGB colorspace, the relative luminance of a color is defined as: 
var L = 0.2126 * R + 0.7152 * G + 0.0722 * B;

return L;


}

dashboard.on("widgetready", function(w, args){

setTimeout(function(){

$("td.colorable").each(function(i) {
	var backgroundColor = $(this).css("background-color");
	if (backgroundColor.substring(0, 4) === "rgba") {
		backgroundColor = backgroundColor.substring(5, backgroundColor.length-1)
     	.replace(/ /g, '')
     	.split(',');
	} else {
		backgroundColor = backgroundColor.substring(4, backgroundColor.length-1)
     	.replace(/ /g, '')
     	.split(',');
	}
	
	var backgroundLuminance = relativeLuminanceW3C(parseFloat(backgroundColor[0]), parseFloat(backgroundColor[1]), parseFloat(backgroundColor[2]));
	
	if (backgroundLuminance < 0.5) {
		$(this).css({"color": "white"});
	} else {
		$(this).css({"color": "black"});
	}
	
});

}, 250);

});
