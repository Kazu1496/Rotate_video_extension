const directions = {
    TOP: 'top',
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right'
}

const query = (dir) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            direction: dir
        })
    })
}

document.getElementById('btn-right').addEventListener('click', () => {
    query(directions.RIGHT)
})
document.getElementById('btn-left').addEventListener('click', () => {
    query(directions.LEFT)
})
document.getElementById('btn-top').addEventListener('click', () => {
    query(directions.TOP)
})
document.getElementById('btn-bottom').addEventListener('click', () => {
    query(directions.BOTTOM)
})