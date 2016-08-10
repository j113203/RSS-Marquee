var j1Lib_rss_marquee = function(url, target , process) {
    j1Lib_ajax(url+"?"+(new Date().getTime()), function(data) {
        data = data.responseXML;
        var item = data.getElementsByTagName("item");
        var news = "";
        for (var i = 0; i < item.length; i++) {
			news += process(item[i]);
        }
        target.innerHTML = news;
        target.scrollLeft=0;
		var autoScroll = setInterval(function() {
            target.scrollLeft++;
            if (target.scrollLeft+target.offsetWidth >= target.scrollWidth) {
                clearInterval(autoScroll);
                j1Lib_rss_marquee(url, target);
            }
        }, 10);
    }, function() {}).send();
};