/*
TESTED ON: Windows v. 8.2.5.10151

ABOUT: Sometimes you want one or more of your dashboard's default filters to appear on the target dashboard after your user jumps to it - 
*even if* that filter doesn't appear on the *source* dashboard from which the user jumps.  This script helps make that happen.
*/

dashboard.on("initialized", function(d, args) {
	
  var myDefaultFilterDim = "[tablename.columnname]"; //insert appropriate table name and column name associated with the default filter you want displayed
	
	var isMyDefaultFilter = function(element) {
		if (typeof element.levels === "undefined") { //filter is NOT hierarchical
			return element.jaql.dim === myDefaultFilterDim;
		} else { //filter IS hierarchical
			return element.levels[0].dim === myDefaultFilterDim; //assumes that the top level of the hierarchical filter will have the same dimension as myDefaultFilterDim
		}
	};
	
	var filterCheck = d.filters.$$items.find(isMyDefaultFilter); //checks to see whether default filter is on dashboard
	
	if (typeof filterCheck === "undefined") { //if not, put it on the dashboard
		var myDefaultFilter = d.defaultFilters.find(isMyDefaultFilter);
		d.filters.update(myDefaultFilter, { refresh: true, save: true }); //see documentation of Sisense JavaScript API
	}
	
});
