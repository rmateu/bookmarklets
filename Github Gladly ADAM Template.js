// bookmarklet_title: Github ADAM Issue from Gladly
// bookmarklet_about: Create a draft ADAM issue with Window Title, linkback and any selected text. 
// https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue#supported-query-parameters
// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/
// Optimizer https://chriszarate.github.io/bookmarkleter/
// DO minify JavaScript https://www.digitalocean.com/community/tools/minify

var url = document.URL;
        title = document.title;
        text = window.getSelection().toString();
        mdLink = '[' + title + ']' + '(' + url + ')';


        window.open('https://github.com/pricesmart/adam/issues/new?'
                        + 'title='
                        + '[Gladly]%20' + title
                        + '&labels=Gladly'
                        + '&body='
                        +  mdLink + '%20(Gladly Link)'
                        + '%0A%0A'
                        + '>%20' + text
                        ,'_blank') 

