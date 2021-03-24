widget.on('ready', function(w, args) {
/*
TESTED ON: Sisense 8.2.5.10151 (Windows)
ABOUT:
You can use this script to add hover text to an indicator widget explaining the metric or sharing any information you want with the dashboard user.
*/
  
  var hoverText = 'Put some hover text of your own here.\nWhen a user hovers over the indicator,\nthey will see this text.';
	$("widget[widgetid='" + w.oid + "'] canvas").attr('title', hoverText)
	
});
