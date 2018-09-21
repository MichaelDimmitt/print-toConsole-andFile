// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  var action_url = "javascript:console.log(document.getElementsByTagName('body')[0].outerHTML);";

  chrome.tabs.update(tab.id, {url: action_url});
});
