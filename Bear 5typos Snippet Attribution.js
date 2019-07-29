// bear://x-callback-url/create?title=My%20Note%20Title&text=First%20line&tags=home,home%2Fgroceries
// https://bear.app/faq/X-callback-url%20Scheme%20documentation/#add-text
// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/

var url = document.URL;
        t = location.host;
        t = t.replace(/^www./, "");
	text = window.getSelection().toString();
	mdRef = '[' + document.title + '][idk]';
        nTitle = document.title ;
        mdLink = '[idk]:%20' + url + " \"" +document.title + "\"" +"%0A";


window.location.href = 'bear://x-callback-url/create?'
                        + 'text=%23%23%20' 
                        +  mdRef
                        + '%0A%0A'
                        + '[' + t + '][idk]:' 
                        + '%0A%0A'
                        + '>%20' + text
                        + '%0A%0A'
                        + mdLink
                        + '&tags=5typos%2Fsnippet'
                        + '&edit=yes'
