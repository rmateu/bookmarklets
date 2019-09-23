// Reference drafts5://x-callback-url/create?text=Hello%20World
// Note that the x-callback-url host is optional in all drafts5 URLs. It is supported for consistency with the specification, but functionally it is not required and drafts5://[actionName]... will have the same result as drafts5://x-callback-url/[actionName]...
// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/

var url = document.URL;
        t = location.host;
        t = t.replace(/^www./, "");
	selectedText = window.getSelection().toString();
        idRef =  t.substring(0, 4) + Math.floor((Math.random() * 898) + 101);
	mdRef = '[' + document.title + '][' + idRef + ']'
        mdLink = '[' + idRef + ']:%20' + url + " \"" +document.title + "\"" +"%0A";



window.location.href = 'drafts5://create?'
                        + 'text=%23%23%20' 
                        +  mdRef
                        + '%0A%0A'
                        + '[' + t + '][' + idRef + ']:'
                        + '%0A%0A'
                        + '>%20' + selectedText
                        + '%0A%0A'
                        + mdLink
                        + '&tag=5typos.net'
                        + '&tag=Snippet'