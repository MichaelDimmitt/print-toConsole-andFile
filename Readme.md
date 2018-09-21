## First Chrome Extension: print-toConsole-andFile
## Originally Sourced from example,
https://github.com/orbitbot/chrome-extensions-examples/tree/master/print
<br>https://developer.chrome.com/extensions/samples#search:print</br>

## What the example provided:
  1) onclick event on the extension icon runs some javascript.
  2) window.print() - javascript -- sends the rendered html to a physical printer! 
  <br>but I did not want to use a printer.</br>

## My Changes:
  1) console.log(window.body)
  2) saveAs(window.body)

  note: could have also used: 
  <br>window.document.getElementsByTagName('body')[0].outerHTML</br>
