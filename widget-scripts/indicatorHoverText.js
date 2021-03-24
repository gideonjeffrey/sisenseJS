widget.on('ready', function(w, args) {
  
  var hoverText = 'Put some hover text of your own here.\nWhen a user hovers over the indicator,\nthey will see this text.';
	$("widget[widgetid='" + w.oid + "'] canvas").attr('title', hoverText)
	
});
