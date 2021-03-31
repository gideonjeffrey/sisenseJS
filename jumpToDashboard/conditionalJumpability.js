/*
TESTED ON: Windows v. 8.2.5.10151

ABOUT: This script makes a jumpable widget *conditionally* jumpable based on what dimension field is being used in the widget. 
It can be used in tandem with something like the Dimension Changer plugin, where the user can switch which dimensions / values appear
in a widget.  So, for example, you could have a pivot table jump to a Customer Report *if* the dimension in the widget is Customer
Description, but *not be jumpable* if the dimension is set to something else.
*/

widget.on("ready", function(w, args) {
  
  var jumpableDimension = "myDimension"; // insert name of dimension which, if displayed in the dashboard, makes the widget jumpable
  var conditionalTarget = {
    oid: "dashboardoid", // insert the oid of the target dashboard
    caption: "captiondisplayed", // insert the caption or dashboard title you want displayed to the user ("Jump to " + this caption)
    folder: "folderoftargetdashboard" // insert folder ID of the target dashboard
  };
	
	var currentDimension = w.metadata.panels[0].items[0].jaql.title; //insert appropriate panel index / item index 
  
	if (currentDimension === jumpableDimension) {
		w.options.drillTarget = conditionalTarget; // make widget jumpable
		$("widget[widgetid='" + w.oid + "'] .drillImg").show() // display "This widget is jumpable" icon
	} else {
		w.options.drillTarget = undefined; // make widget not jumpable
		$("widget[widgetid='" + w.oid + "'] .drillImg").hide() // hide "This widget is jumpable" icon
	}
	
});
