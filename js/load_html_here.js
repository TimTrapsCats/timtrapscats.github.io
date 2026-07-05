console.log(document.currentScript.attributes.filetoload)
req = new XMLHttpRequest
req.open("GET", document.currentScript.attributes.filetoload)
req.send()
console.log(req.responseText)
document.write("<h1>woof</h1>")
