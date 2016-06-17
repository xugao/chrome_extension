// no access to DOM. runs in an isolated enviornment

chrome.runtime.onMessage.addListener(
  function(response, sender, sendResponse) {
    console.log(response);
  }
);
