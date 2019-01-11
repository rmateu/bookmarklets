// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/


var o = (location.origin + location.pathname, document.title),
            t = location.host,
            t = t.replace(/^www./, ""),
            t = t.charAt(0).toUpperCase() + t.substr(1),
            n = window.getSelection().toString(),
            i = ">" + n + "\n\n**" + o + "**  \n" + t;
       
window.prompt("Copy to clipboard: ⌘+C or Ctrl+C then Enter", i)

