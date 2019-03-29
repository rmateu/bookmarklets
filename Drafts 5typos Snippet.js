// Reference drafts5://x-callback-url/create?text=Hello%20World
// Note that the x-callback-url host is optional in all drafts5 URLs. It is supported for consistency with the specification, but functionally it is not required and drafts5://[actionName]... will have the same result as drafts5://x-callback-url/[actionName]...
// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/

var url = document.URL;
	title = document.title;
	text = window.getSelection().toString();
	mdLink = '[' + title + ']' + '(' + url + ')';


window.location.href = 'drafts5://create?'
                        + 'text=%20%23%23'
                        +  mdLink
                        + '%0A'
                        + '%0A'                        
                        + '> ' + text
                        + '%0A%0A'
                        + '&tag=5typos.net'
                        + '&tag=Snippet'