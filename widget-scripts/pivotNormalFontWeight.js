/*

TESTED ON: Sisense 8.2.5.10151 (Windows)

ABOUT:

Fixing super-hard-to-read light pivot text.

Occasionally, depending on the combination of Sisense version and BloX add-on version, having a BloX widget on the same dashboard as a pivot table widget 
will cause the pivot table text to be light (font weight 300) instead of normal (font weight 400).  This fixes that problem.

*/

dashboard.on("widgetready", function(w, args) {
	$("td").css({"font-weight": "400"})
});
