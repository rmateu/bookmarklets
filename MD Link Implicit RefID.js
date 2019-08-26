// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/

var url = document.URL;
        t = location.host;
        t = t.replace(/^www./, "");
		text = window.getSelection().toString();
        idRef =  t.substring(0, 4) + Math.floor((Math.random() * 100) + 1);
        mdSite = '[' + idRef + ']';
        mdLink = '[' + idRef + ']: ' + url + " \"" +document.title + "\"" +"\n";

content = text
		+ " "
		+ mdSite
		+ "\n\n"
		+ mdLink


window.prompt("Copy to clipboard: ⌘+C or Ctrl+C then Enter", content)