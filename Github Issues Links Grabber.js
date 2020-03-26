// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/
//Use looks for issues/ in github pages. 

javascript: var a = '';
for (var ln = 0; ln < document.links.length; ln++) {
	if(document.links[ln].href.match('issues\/')) {
    var lk = document.links[ln]; } 
    a += lk + '<br>\n';

}
w = window.open('', 'Links', ' scrollbars,resizable,width= 400,height=600');
w.document.write(a)
