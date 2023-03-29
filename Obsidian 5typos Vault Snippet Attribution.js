// Reference https://help.obsidian.md/Advanced+topics/Using+obsidian+URI
// Example obsidian://new?vault=main&file=Personal%2FPosts%2FSnippets%2Fsnippet&content=
// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/

var url = document.URL;
        t = location.host;
        t = t.replace(/^www./, "");
	selectedText = window.getSelection().toString();
        idRef =  t.substring(0, 4) + Math.floor((Math.random() * 898) + 101);
	mdRef = '[' + document.title + '][' + idRef + ']'
        mdLink = '[' + idRef + ']:%20' + url + " \"" +document.title + "\"" +"%0A";



//obsidian://open?vault=5typos.net&file=DailyPosts%2F2022-10-24
// obsidian://open?obsidian://open?vault=5typos.net&file=%5Bsnippets%5D%2F2022-07-01%20MacSparky%20Initial%20Thoughts%20on%20Stage%20Manager%5D%2F2022-07-01%20MacSparky%20Initial%20Thoughts%20on%20Stage%20Manager
window.location.href = 'obsidian://new?vault=5typos.net'
                        + '&file=%5Bsnippets%5D' 
                        + '%2Fsnippet' 
                        + '&content='
                        +  '%23%23%20' + mdRef
                        + '%0A%0A'
                        + '[' + t + '][' + idRef + ']:'
                        + '%0A%0A'
                        + '>%20' + selectedText
                        + '%0A%0A'
                        + mdLink

