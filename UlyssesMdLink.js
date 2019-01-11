// Reference ulysses://x-callback-url/new-sheet?text=document.title sheet&index=2 
// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/


var url = document.URL;
	title = document.title;
	text = window.getSelection().toString();
	mdLink = '[' + title + ']' + '(' + url + ')';


window.location.href = "ulysses://x-callback-url/"
                        + "new-sheet?text="
                        + '%23%23' + mdLink
                        + '%0A'
                        + ">" + text
                        + '%0A%0A'
                        + "&group=5typos"