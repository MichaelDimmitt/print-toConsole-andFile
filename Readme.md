## First Chrome Extension: print-toConsole-andFile

## Installation
1) Download it on the chrome extension store, for free!

2) Set the extention up for development:
```bash 
git clone https://github.com/MichaelDimmitt/print-toConsole-andFile.git
cd print-toConsole-andFile
## open chrome extension tab on a mac
osascript <<EOD
set theURL to "chrome://extensions/"
tell application "Google Chrome"
 if windows = {} then
  make new window
  set URL of (active tab of window 1) to theURL
 else
  make new tab at the end of window 1 with properties {URL:theURL}
 end if
 activate
end tell
EOD
```
ensure dev tools are enabled in the top right corner of this page
<br>and click load unpacked and go to select the directory for this project

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
