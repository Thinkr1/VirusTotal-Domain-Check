browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
    
    if (request.greeting === "hello")
        sendResponse({ farewell: "goodbye" });
});

browser.runtime.onMessage.addListener((message) => {
    if (message.action === "openVirusTotal" && message.domain) {
        const url = `https://www.virustotal.com/gui/domain/${message.domain}`;
        browser.tabs.create({ url: url });
    }
});
