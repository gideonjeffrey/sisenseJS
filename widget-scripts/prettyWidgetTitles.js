/*
Sisense uses a JavaScript library called Highcharts to create their chart widgets; full documentation is here - https://api.highcharts.com/highcharts/.  

Highcharts gives you the ability to add and style widget titles.  
I've used this to create nice-looking centered titles into widgets using scripts like the one below.  

This is just one way you can style widget titles - read the Highcharts documentation to find much, much more!
*/

var widgetTitle = ""; //insert a title for the widget between the double quotes
var titleMargin = 15; //title margin in pixels; change to any value desired
var titleStyle = {
  "color": "#5B6372"
}; //can add any style you want; see linked Highcharts documentation

widget.on("processresult", function(w, args) {
	args.result.title.text = widgetTitle;
	args.result.title.margin = titleMargin;
	args.result.title.style = titleStyle;
});
