$(function () {
    var bar = '';

	  bar += '<section id="wrapper">';
	  bar += '<div id="headerwrap">';
	       bar += ' <header id="header">';
	      	 bar += '<img src ="images/index/Hal100Header.png" alt="Header logo" title="Halliburton Logo" />';
			 bar += '</header>';
           bar += ' </div>';
         bar += '</div>';

		 bar += '<div id="navigationwrap">';
          bar += ' <nav id="navbar">';
		     
           bar += '    <a class="active" href="index.html" target="_top"><i class="fa fa-fw fa-home" alt="home page link" title="Home"></i> Home</a>';
           bar += '    <a href="Health.html" target="_top"><i class="fa fa-fw fa-heartbeat" alt="health and welfare link" title="Health & Welfare"></i> Health & Welfare</a>';
           bar += '   <a href="Facilities.html" target="_top"><i class="fa fa-fw fa-sitemap" alt="facilties link" title="Arbroath Facilities"></i> Facilities</a>';
           bar += '   <a href="Communication.html" target="_top"><i class="fa fa-fw fa-envelope" alt="communication link" title="Communication"></i> Communication</a>';
           bar += '   <a href="Feedback.html" target="_top"><i class="fa fa-fw fa-comments" alt="feedback link" title="Feedback"></i> Feedback</a>';
           bar += '</div>';
         bar += '</nav>';
    bar += '</section>';	
 
    $("#main-bar").html(bar);
 
    var id = getValueByName("id");
    $("#" + id).addClass("active");
});
 
function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}