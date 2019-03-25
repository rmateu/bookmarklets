var md = "[" + window.getSelection().toString() + "]" + "\n\n" + "[" + window.getSelection().toString() + "]: " + document.URL + " \"" +document.title + "\"" ;

window.prompt("Copy to clipboard: ⌘+C or Ctrl+C then Enter", md)