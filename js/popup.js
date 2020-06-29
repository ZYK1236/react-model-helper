var btn = document.querySelector("button");
function search() {
  var value = document.querySelector("input").value;
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      let message = {
        info: value,
      };
      chrome.tabs.sendMessage(tabs[0].id, message);
    }
  );
  document.querySelector("input").value = "";
}
btn.addEventListener("click", search);
document.onkeydown = function (e) {
  var keyNum = window.event ? e.keyCode : e.which;
  if (keyNum === 13) {
    search();
  }
};
