/*
TESTED ON: Sisense 8.2.5.10151 (Windows)
ABOUT:
You can use this script to conditionally color pivot table grand total rows and grand total columns.
The native conditional coloring works on non-total values, but *not* on grand totals, for whatever reason.
So, if you have conditional coloring rules in place and want to see them on grand total rows/columns, this script (appropriately modified) will let you do so.
*/

widget.on('domready', function(w, args) {
	
	// conditionally color grand totals, which Sisense doesn't do natively.
	// adapted from script posted by Yuri Nazarov at https://support.sisense.com/hc/en-us/community/posts/360028866974-Conditional-Formatting-of-Grand-Totals.
	
	var indexOfFormattedField = 4; //index of the field you'll be formatting (NOTE: index count starts at 0 and goes in order *row*, *column*, *value* - 
	//so if there are 3 rows and 1 column, index 4 = the first value column.
  
    $("td.p-total-row-val[fidx='" + indexOfFormattedField.toString() + "']",element) //format the GRAND TOTAL ROW (below the pivot)
  
        .each((index, item) => { // loop. For each of these <td> cells,  
            var myItemNum = parseFloat($(item).attr("val")); // grab the "val" attribute of the cell, convert to number, and format based on the logic below.
			
			//Insert your own conditions and CSS styling in place of these
		
            if (myItemNum > 0) {  
                $(item).css({  
                    "backgroundColor": "#5ca793",  
                    "color": "white" 
                });  
            }                                     
            else if (myItemNum < 0) {  
                $(item).css({  
                    "backgroundColor": "#ff6a37",  
                    "color": "white"
                });  
            }                                     
            else {  
                $(item).parent().css("backgroundColor", "")  
            }   
        });  
	
	$("td.p-total-col-val[fidx='" + indexOfFormattedField.toString() + "']",element) //format the GRAND TOTAL COLUMN (to the right of the pivot)
  
        .each((index, item) => { // loop. For each of these <td> cells  
            var myItemNum = parseFloat($(item).attr("val")); // grab the "val" attribute of the cell, convert to number, and format based on the logic below.
		
			//Insert your own conditions and CSS styling in place of these
		
            if (myItemNum > 0) {  
                $(item).css({  
                    "backgroundColor": "#5ca793",  
                    "color": "white" 
                });  
            }                                     
            else if (myItemNum < 0) {  
                $(item).css({  
                    "backgroundColor": "#ff6a37",  
                    "color": "white"
                });  
            }                                     
            else {  
                $(item).parent().css("backgroundColor", "")  
            }   
        });  
  
	
});
