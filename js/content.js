var jsPath = "js/injected.js";
var temp = document.createElement("script");
temp.setAttribute("type", "text/javascript");
temp.src = chrome.extension.getURL(jsPath);
document.head.appendChild(temp);


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  window.postMessage(request.info, "*");
});
