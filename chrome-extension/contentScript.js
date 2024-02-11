// Qiitaのページにデータを表示する関数
function displayDataOnPage(data) {
    const parent = document.createElement('div');
    const container = document.createElement('div');
    const counter = document.createElement('div');

    container.style.width = '40px';
    container.style.height = '40px';
    container.style.display = 'grid';
    container.style.placeItems = 'center';
    container.style.backgroundColor = 'white';
    container.style.border = '1px solid #ccc';
    container.style.borderRadius = '50%';
    container.style.padding = '10px';
    container.style.lineHeight = '1';

    const img = document.createElement('img');
    img.src = chrome.runtime.getURL('images/icon.png');
    img.style.width = '100%';
    img.alt = '隠れいいね';
    container.appendChild(img);

    counter.style.color = 'rgb(0 0 0 / 60%)'
    counter.style.fontSize = '14px'
    counter.style.textAlign = 'center'
    counter.style.fontWeight = 'bold'
    counter.innerText = data && data.data ? data.data.count : 0

    parent.appendChild(container)
    parent.appendChild(counter)

    setTimeout(() => {
        const targetElement = document.querySelector('.style-yrmhnf');
        if (targetElement) {
            // 見つかった要素の中に新しいdivを追加
            targetElement.appendChild(parent);
        } else {
            // 指定されたクラス名の要素が見つからない場合のフォールバック処理
            console.error('Target element not found.');
        }
    }, 3000)
}

// バックグラウンドスクリプトにデータ取得を依頼
chrome.runtime.onMessage.addListener((response) => {
    console.log(response)
    displayDataOnPage(response.data);
});


const currentPageUrl = window.location.href.split('?')[0];

chrome.runtime.sendMessage({
    message: 'run',
    url: currentPageUrl
})