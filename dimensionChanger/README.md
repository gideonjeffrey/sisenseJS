## Scripts for Using the Dimension Changer Plugin

The Dimension Changer plugin is a Sisense community-created plugin, and therefore not officially Sisense supported.  It is extremely useful, however, as it allows the dashboard user to click buttons and toggle between different visualizations effortlessly - say, gallons vs. GP vs. GP/gallon over a 12-month period, or GP by customer, salesperson, or region.  

For full documentation, I recommend the official Sisense forum page for the plugin - https://support.sisense.com/hc/en-us/community/posts/221225468-The-Measure-Changer-Widget- - plus the first "Official Comment" which I wrote detailing the script workaround for Windows Sisense 8.2 - https://support.sisense.com/hc/en-us/community/posts/221225468/comments/360011336794.

At the moment, one script is essential to allow Dimension Changers to work in Sisense (Windows version, 8.2.5.10151).  This is the `widgetsAffected.js` script in this folder.  This script should be used as a widget script *on the dimension changer widget itself* to tell it which *other* widgets to change dimensions of

Sometimes, however, you'll also want to change the formatting of the target (affected) widget, say if you're toggling between a raw quantity and a monetary value (different rounding, $ prefix or not, and so on).  The `changeMask.js` script gives you an example of how to do this.  It should be used as a widget script *on the widget affected by the dimension changer*.
