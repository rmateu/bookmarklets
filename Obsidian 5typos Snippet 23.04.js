// Reference https://help.obsidian.md/Advanced+topics/Using+obsidian+URI
// Example obsidian://new?vault=main&file=Personal%2FPosts%2FSnippets%2Fsnippet&content=
// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/
// Make Bookmarklets · Make it easy https://make-bookmarklets.com/
// URL Decoder/Encoder https://meyerweb.com/eric/tools/dencoder/
// DO minify JavaScript https://www.digitalocean.com/community/tools/minify
// arc://bookmarks/


var url = document.URL;
        t = location.host;
        t = t.replace(/^www./, "");
        selectedText = window.getSelection().toString();
        mdTitle = '[' + document.title + '](' + url + ')';
        mdURL = '(' + url + ')';


window.location.href = 'obsidian://new?vault=5typos.net'
                        + '&file=drafts' 
                        + '%2Fsnippet' 
                        + '&content='
                        +  '---%0ADraft%3A%20yes%0ADate%3A%0ASafeTitle%3A%0A---%0A' 
                        + '%23%23%20' + mdTitle
                        + '%0A%0A'
                        + '[' + t + ']' + mdURL
                        + '%0A%0A'
                        + '>%20' + selectedText
                        + '%0A%0A'

