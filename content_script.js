(() => {
  var target = null;
  document.addEventListener('mousedown', ev => {
    if(ev.button == 2) target = ev.target;
  }, true);
  chrome.runtime.onMessage.addListener((message, sender, callback) => {
    switch (message.action) {
      case 'clicked': callback({target:{style:target.style}});
    }
  });
})();
