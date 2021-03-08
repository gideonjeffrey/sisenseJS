/*

TESTED ON: Sisense 8.2.5.10151 (Windows)

ABOUT:

This script bolds the grand total and subtotal roles in any pivot widget on the dashboard.

*/

dashboard.on('widgetready', function(w, args){
    
    $(".p-total-row-val",element).css({'font-weight': 'bold'})
    $(".p-grand-total-row-head",element).css({'font-weight': 'bold'})

});
