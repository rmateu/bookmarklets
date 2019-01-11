var url = document.URL;
	title = document.title;
	text = window.getSelection().toString();
	Link = url;

window.location.href = "things:///add?"
                        + "title=" + title
                        + '&notes=' + text
                        + '%0a%0a'
                        + Link                      
                        // + "&list=Tangents"
                        // + "&show-quick-entry=true"


// Reference https://support.culturedcode.com/customer/en/portal/articles/2803573
// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/