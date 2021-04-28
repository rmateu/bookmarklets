// Bookmarklet Maker: https://caiorss.github.io/bookmarklet-maker/
// Title or selection logic: https://quietmole.github.io/pages/

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        /*IE specific code path to prevent textarea being shown while dialog is visible.*/
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  /* Prevent scrolling to bottom of page in MS Edge.*/
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  /* Security exception may be thrown by some browsers.*/
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}


    function e() {
        var e = "";
        if (window.getSelection) e = window.getSelection().toString();
        else if (document.getSelection) e = document.getSelection().toString();
        else {
            if (!document.selection) return null;
            e = document.selection.createRange().text
        }
        return e
    }
    var t = e(),
        n = window.document.title,
        o = window.location.href,
        i = [];

    t ? i.push("[" + t + "]") : i.push("[" + n + "]"), i.push("(" + o + ")"), 

copyToClipboard(i.join(""));
