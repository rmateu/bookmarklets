// bear://x-callback-url/add-text?text=new%20line&id=4EDAF0D1&mode=append
// https://bear.app/faq/X-callback-url%20Scheme%20documentation/#add-text

var md = "-%20[" + 
window.getSelection().toString() + 
"]" + 
"%0A%0A" + 
"[" + 
window.getSelection().toString() + 
"]: " + 
document.URL + 
" \"" +document.title + 
"\"" +"%0A" ;

window.location.href = "bear://x-callback-url/add-text?id=F795E28C-AEB3-4A19-8982-B1E490126325-4890-0000021B9F47BB22&mode=prepend&text=" + md