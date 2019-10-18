// Reference drafts5://x-callback-url/create?text=Hello World
// Note that the x-callback-url host is optional in all drafts5 URLs. It is supported for consistency with the specification, but functionally it is not required and drafts5://[actionName]... will have the same result as drafts5://x-callback-url/[actionName]...
// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        /*IE specific code path to prevent textarea being shown while dialog is visible.*/
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  /* Prevent scrolling to bottom of page in MS Edge.*/
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  /* Security exception may be thrown by some browsers.*/
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

var url = document.URL;
        t = location.host;
        t = t.replace(/^www./, "");
	text = window.getSelection().toString();
        idRef =  t.substring(0, 4) + Math.floor((Math.random() * 100) + 1);
        mdSite = ' [' + t + '][' + idRef + ']'
        mdLink = '[' + idRef + ']: ' + url + " \"" +document.title + "\"" +"\n";

var markdown =  document.title
                + mdSite
                + '\n\n'
                + mdLink ;

copyToClipboard(markdown);