# Bookmarklets
Bookmarklets for my daily use.

- MD TextShot: 

TEst <a href="javascript:(function()%7Bvar%20url%20%3D%20document.URL%3B%0A%20%20%20%20%20%20%20%20t%20%3D%20location.host%3B%0A%20%20%20%20%20%20%20%20t%20%3D%20t.replace(%2F%5Ewww.%2F%2C%20%22%22)%3B%0A%09%09text%20%3D%20window.getSelection().toString()%3B%0A%20%20%20%20%20%20%20%20idRef%20%3D%20%20t.substring(0%2C%204)%20%2B%20Math.floor((Math.random()%20*%20100)%20%2B%201)%3B%0A%20%20%20%20%20%20%20%20mdSite%20%3D%20'%5B'%20%2B%20idRef%20%2B%20'%5D'%3B%0A%20%20%20%20%20%20%20%20mdLink%20%3D%20'%5B'%20%2B%20idRef%20%2B%20'%5D%3A%20'%20%2B%20url%20%2B%20%22%20%5C%22%22%20%2Bdocument.title%20%2B%20%22%5C%22%22%20%2B%22%5Cn%22%3B%0A%0Acontent%20%3D%20text%0A%09%09%2B%20%22%20%22%0A%09%09%2B%20mdSite%0A%09%09%2B%20%22%5Cn%5Cn%22%0A%09%09%2B%20mdLink%0A%0A%0Awindow.prompt(%22Copy%20to%20clipboard%3A%20%E2%8C%98%2BC%20or%20Ctrl%2BC%20then%20Enter%22%2C%20content)%7D)()%3B">bookmarklet</a>

List of all the bookmarklets.
