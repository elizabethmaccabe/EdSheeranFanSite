/* Facebook Widget jQuery */

jQuery(document).ready(function()
{
	jQuery(".theblogwidgets").hover(function()
	{
		jQuery(this).stop().animate({right: "0"}, "medium");
	}, function() 
	{
		jQuery(this).stop().animate({right: "-250"}, "medium");
	}, 500);
});