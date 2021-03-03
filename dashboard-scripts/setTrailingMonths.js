/*

TESTED ON: Sisense 8.2.5.10151 (Windows)

ABOUT:

This script dynamically sets the default date filter to be a trailing n months, where n is the value of "numberToInclude" defined below.

Example: if we're in March 2021, a trailing 12 months is March 2020 - February 2021.

Whenever a user clicks "Restore my default filters," they will see a trailing n months of data in the dashboard.

This script does *not* override currently selected date filters on dashboard refresh / reload - only when "Restore my default filters" is clicked.


  ********FIRST STEP*********
  
Make sure you have already performed "Set as my default filters" on the dashboard, or this script will not work (it depends on
there being default filters already, and just updates those depending on what month the viewer is using the dashboard.)  

Additionally, make sure that the date filter has a "months" level.

*/

dashboard.on("initialized", setTrailingMonths);


//******** PARAMETER SETTING - change variables below as needed *********

//dateColumnName: below, enter EXACT NAME of date column you're filtering on (e.g. "Order_Date"); only the column name, don't include the source table.

var dateColumnName = "Date";

//numberToInclude: enter how many of the most recent months to include by default

var numberToInclude = 12;


//*******************


var dateFilterLevel = "months"; // Do NOT change this one


//function to find date filter
var isDateFilter = function(item) {
    if (item.isCascading === true) {
        return item.levels[0].column === dateColumnName;
    } else {
        return item.jaql.column === dateColumnName;
    }
};

function setTrailingMonths() {
    //generate filter based on the parameters given

    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth() + 1;
    if (m === 1) {
        m = 12;
		y -= 1;
    } else {
        m -= 1;
    }
    var toInclude = [];
    while (numberToInclude > 0) {
        if (m < 10) {
            formattedYear = y.toString() + "-0" + m.toString() +
                "-01T00:00:00";
        } else {
            formattedYear = y.toString() + "-" + m.toString() +
                "-01T00:00:00";
        }
        toInclude.push(formattedYear);
        if (m === 1) {
            y -= 1;
            var mSub = 12;
        } else {
            var mSub = m - 1;
        }
        m = mSub;
        numberToInclude -= 1;
    }

    //generate the filter JAQL for the months filter
    var includeFilter = {
        "explicit": true,
        "multiSelection": true,
        "members": toInclude
    };

    //JAQL for every other filter
    var regularFilter = {
        "all": true,
        "explicit": false,
        "multiSelection": true
    };

    var dateFilter = prism.activeDashboard.defaultFilters.find(isDateFilter);
    if (dateFilter.isCascading === false) {
        dateFilter.jaql.filter = includeFilter;
    } else {
        for (i = 0; i < dateFilter.levels.length; i++) {
            if (dateFilter.levels[i].level === dateFilterLevel) {
                dateFilter.levels[i].filter = includeFilter;
            } else {
                dateFilter.levels[i].filter = regularFilter;
            }
        }
    }
}
