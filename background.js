chrome.commands.onCommand.addListener((command) => {
  if (command === "search_youtube") {
    const popupUrl = chrome.runtime.getURL("index.html");

    chrome.tabs.query({}, (tabs) => {
      const existingTab = tabs.find(tab => tab.url?.startsWith(popupUrl));

      if (existingTab) {
        chrome.tabs.update(existingTab.id, { active: true }, () => {
          void chrome.scripting.executeScript({
            target: { tabId: existingTab.id },
            func: () => {
              const input = document.getElementById("searchQuery");
              if (input) input.focus();
            }
          });
        });
      } else {
        void chrome.tabs.create({ url: popupUrl });
      }
    });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "search_youtube_context",
    title: "Search on YouTube",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "search_youtube_context" && info.selectionText) {
    const query = encodeURIComponent(info.selectionText.trim());
    const url = `https://www.youtube.com/results?search_query=${query}`;
    void chrome.tabs.create({ url });
  }
});
