var url = document.URL ;
var title = document.title ;
var ogTitle = document.querySelector("meta[property='og:site_name']").getAttribute("content");
var author = document.querySelector("meta[property='author']").getAttribute("content");


window.prompt("Copy to clipboard: ⌘+C or Ctrl+C then Enter", author)