var url = document.URL;
	title = document.title;
	text = window.getSelection().toString();
	Link = url;

window.location.href = "things:///add?"
                        + "title=" + title
                        + '&notes=' + text
                        + '%0a%0a'
                        + Link
