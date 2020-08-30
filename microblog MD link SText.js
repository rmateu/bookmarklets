// Reference microblog://post?text=Hello%20world
// https://help.micro.blog/2018/url-schemes/
// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/

var url = document.URL;
	title = document.title;
	text = window.getSelection().toString();
	mdLink = '[' + text + ']' + '(' + url + ')';


window.location.href = 'microblog://post?'
                        + 'text='
                        +  mdLink
                        + '%0A%0A'
