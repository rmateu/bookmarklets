// Reference drafts5://x-callback-url/create?text=Hello%20World
// Note that the x-callback-url host is optional in all drafts5 URLs. It is supported for consistency with the specification, but functionally it is not required and drafts5://[actionName]... will have the same result as drafts5://x-callback-url/[actionName]...
// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/

var url = document.URL;
        t = location.host;
        t = t.replace(/^www./, "");
	text = window.getSelection().toString();
	tlmdRef = '[' + document.title + '][idk]';
        mdSite = '%20[' + t + '][' + text + ']'
        mdLink = '[' + text + ']:%20' + url + " \"" +document.title + "\"" +"%0A";
        tkmdLink = '[idk]:%20' + url + " \"" +document.title + "\"" +"%0A";


window.location.href = 'drafts5://prepend?uuid=981735F6-1304-4735-A679-4EB05333763F&'
                        + 'text=-%20' 
                        + document.title
                        + mdSite
                        + '%0A%0A'
                        + mdLink
                        + '&tag=5typos.net'
                        + '&tag=tibits'