
function click(e) {
  chrome.tabs.executeScript({code:"console.log('HI')"});
  console.log({file:"script.js"})
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
