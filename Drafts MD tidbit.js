//drafts5://x-callback-url/create?text=Hello%20World
// https://reference.getdrafts.com/topics/urls

var md = "-%20[" + window.getSelection().toString() + "]" + "%0A%0A" + "[" + window.getSelection().toString() + "]: " + document.URL + " \"" +document.title + "\"" +"%0A" ;

window.location.href = "drafts5://prepend?uuid=981735F6-1304-4735-A679-4EB05333763F&text=" + md