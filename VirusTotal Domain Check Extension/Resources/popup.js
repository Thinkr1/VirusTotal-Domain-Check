document.getElementById('check-domain').addEventListener('click', () => {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
        const activeTab = tabs[0];
        const domain = new URL(activeTab.url).hostname;
        browser.runtime.sendMessage({ action: "openVirusTotal", domain: domain });
    });
});
