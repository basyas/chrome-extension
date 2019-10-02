const TOKOPEDIA = {
    url   : 'staging.tokopedia.com',
    cookie: '_SID_Tokopedia_',
};

chrome.runtime.onInstalled.addListener(function() {  

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostEquals: TOKOPEDIA.url},
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });

      
    openTokopedia = () => {
        chrome.tabs.create({
            url: 'https://' +TOKOPEDIA.url + '/logout',
        });
    };


    chrome.contextMenus.create({
        title: "[TETRA] - Start Recording",
        contexts:['page'],  // ContextType
        onclick: openTokopedia
    });
});

chrome.runtime.onMessage.addListener(
    function(message, callback) {
        console.error('xxxxxx', message);
        if (message == "changeColor"){
            chrome.tabs.executeScript({
            code: 'document.body.style.backgroundColor="orange"'
        });
    }
});
