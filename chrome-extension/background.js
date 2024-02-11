// APIからデータを取得する関数
function fetchDataFromAPI(url) {
    if (!url) {
        throw new Error('URL is not defined');
    }
    return fetch(`https://backend.iemong.workers.dev/api/articles/detail?url=${encodeURIComponent(url)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => console.error('Error fetching data:', error));
}

// メッセージリスナーを追加（コンテンツスクリプトからのメッセージを受け取る）
chrome.runtime.onMessage.addListener(
    function (message, sender) {
        console.log(message, sender)
        if (message.message === "run") {
            console.log('run')
            fetchDataFromAPI(message.url).then(data => {
                // メッセージを送信
                chrome.tabs.sendMessage(sender.tab.id, {data: data});
            });
        }
    }
);
