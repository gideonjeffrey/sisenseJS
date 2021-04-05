/*
The function of this script is to change the formatting of values in a chart widget, as needed, when the user toggles between different values with 
a dimension changer.  The assumption in the way the script is written is that the values panel is Panel 1, and the value to change is at index 0 within
that panel.  

This script is written with only two options to toggle between, "Gallons" and "GP" - you could add as many as you want, depending on your use case.

To explore the first value's formatting in a chart widget, open the console in your browser in widget editor mode and type 
prism.activeWidget.metadata.panels[1].items[0].format and look around!  Tweak the formatting in the user interface and see how the 
"mask" JSON changes.  This will give you a sense of how to change the "mask" to what you want. 

*/

widget.on("beforequery", function(w, args) {
	var title = w.metadata.panels[1].items[0].jaql.title; // get the title of the *first* item from the *value* panel in a chart widget
	if (title === "GP") { // If the title of the value in the chart is "GP," format as currency with auto decimals / abbreviations for 1000+ and above.
		args.widget.metadata.panels[1].items[0].format.mask = {
			"abbreviations": {
				"t": true,
				"b": true,
				"m": true,
				"k": true
			},
			"decimals": "auto",
			"currency": {
				"position": "pre",
				"symbol": "$"
			}
		};
	} else if (title === "Gallons") { // If the title of the value in the chart is "Gallons," format as a number, comma-separated, with abbreviations at 1 M
    // and above and auto decimals
		args.widget.metadata.panels[1].items[0].format.mask = {
			"abbreviations": {
				"t": true,
				"b": true,
				"m": true,
				"k": false
			},
			"decimals": "auto",
			"number": {
				"separated": true
			}
		};
	}
});
