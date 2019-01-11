 var o = location.origin + location.pathname,
            t = (document.title, location.host),
            t = t.replace(/^www./, ""),
            t = t.substring(0, 4);
        text = window.getSelection().toString(), markdownLinkblog = "[" + t + "]: " + o + ' "' + document.title + '"', 

window.prompt("Copy to clipboard: ⌘+C or Ctrl+C then Enter", markdownLinkblog)