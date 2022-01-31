// Reference https://help.obsidian.md/Advanced+topics/Using+obsidian+URI
// Requires Plugin https://github.com/Vinzent03/obsidian-advanced-uri#advanced-obsidian-uri
// Example obsidian://advanced-uri?vault=main&filepath=Personal%2FPosts%2F5typos%20Weekly%20Tidbits&data=Hello%20World&mode=append
// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/

var url = document.URL;
        t = location.host;
        t = t.replace(/^www./, "");
	selectedText = window.getSelection().toString();
        idRef =  t.substring(0, 4) + Math.floor((Math.random() * 898) + 101);
        mdSelected = '%20[' + selectedText + '][' + idRef + ']'
        mdSite = '%20[' + t + '][' + idRef + ']'
        mdLink = '[' + idRef + ']:%20' + url + " \"" +document.title + "\"" +"%0A";

window.location.href = 'obsidian://advanced-uri?vault=main&filepath=Personal%2FPosts%2F5typos%20Weekly%20Tidbits'
                        + '&data=-%20'
                        + mdSelected
                        + '%0A%0A'
                        + mdLink
                        + '&mode=prepend'



obsidian://open?vault=main&file=Personal%2FPosts%2F5typos%20Weekly%20Tidbits
obsidian://advanced-uri?vault=<your-vault>&daily=true&data=Hello%20World&mode=append
obsidian://advanced-uri?vault=<your-vault>&filepath=my-file&data=Hello%20World

obsidian://advanced-uri?vault=main&filepath=Personal%2FPosts%2F5typos%20Weekly%20Tidbits&data=Hello%20World&mode=append

obsidian://advanced-uri?vault=main&filepath=Personal%2FPosts%2F5typos%20Weekly%20Tidbits&data=-%20