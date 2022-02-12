var app = document.querySelector('#ps')

var link = document.createElement('a')
var textLink = document.createTextNode('Visitar Google')

link.setAttribute('href', 'http://google.com')
link.setAttribute('target', '_blank')
link.appendChild(textLink)

app.appendChild(link)

// --------------------------------------------

var cont = document.querySelector('#ps')
var text = document.querySelector('#ps p' )

cont.removeChild(text)