(async () => {
  const currentTab = await getCurrentTab();
  const element = document.querySelector("#qrcode");

  new QRCode(element, currentTab.url);
})();

async function getCurrentTab() {
  const queryOptions = { active: true, lastFocusedWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
