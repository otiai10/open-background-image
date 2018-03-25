chrome.contextMenus.create({
  title: "背景画像を別タブで表示する",
  contexts: ["all"],
  documentUrlPatterns: ["<all_urls>"]
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.sendMessage(tab.id, {action:'clicked'}, res => {
    if (!res || !res.target || !res.target.style) return;
    const bgimage = res.target.style.backgroundImage;
    if (!bgimage || !/url\(.+\)/.test(bgimage)) return;
    const url = bgimage.split('"')[1];
    window.open(url);
  });
})
