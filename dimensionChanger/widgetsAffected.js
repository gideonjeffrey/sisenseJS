widget.on('ready', function(w, args) {
  
  //This script should be the widget script for the dimension changer widget itself.

	//define widgetsAffected as an array of objects, one for each widget 
  //you want to be affected by the dimension changer; ensure objects are comma-
  //separated if you want multiple widgets affected.
	
	var widgetsAffected = [
		{
			'id': 'exampleID', //insert OID of widget to be affected here
			'panelToChange': 'examplePanelName', //insert appropriate panel name, like "X-Axis" or "Values"
			'index': 0 
		}
	];
	
	args.widget.style.selectedWidgets = widgetsAffected;
	
});
