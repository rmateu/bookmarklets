var url = document.URL ;
var title = document.title ;
var description = $('meta[name=description]').attr("content") ;

window.prompt("Copy to clipboard: ⌘+C or Ctrl+C then Enter", description)