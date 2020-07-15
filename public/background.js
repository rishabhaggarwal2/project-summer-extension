chrome.contextMenus.create({
  id: "ProjectSummer",
  title: "Project Summer Open",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { type: "openProjectSummer" });
  });
});
