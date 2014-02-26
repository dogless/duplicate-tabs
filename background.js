chrome.commands.onCommand.addListener(function(command) {
  if (command == "MAC" || command == "WINDOWS") {
    // Get the currently selected tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var current = tabs[0].id
      chrome.tabs.duplicate(current);
    });
  }

});
