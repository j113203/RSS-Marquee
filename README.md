# j1Lib_RSS_Marquee
Rss Feed Reader with marquee effect

The javascript specifies a way to embed a news bar in a web page.

###Element


Example:

    var rss = document.getElementById("bottom");
		j1Lib_rss_marquee("http://rthk.hk/rthk/news/rss/c_expressnews_clocal.xml",rss,function(item){
	
	    var title = item.getElementsByTagName("title")[0].textContent;
	
        var time = new Date(item.getElementsByTagName("pubDate")[0].textContent);
	
	    return title + " ["+ ("0" + time.getHours()).slice(-2)  + ":" + ("0" + time.getMinutes()).slice(-2) + ":" + ("0" + time.getSeconds()).slice(-2) +"]"+Array(20).join("&nbsp;");
	});

![img](https://i.imgur.com/cMldGNX.png)

###Parameter Reference
- url

the rss provider url

- target 

the dom element to display

- process

how to process the xml item element
