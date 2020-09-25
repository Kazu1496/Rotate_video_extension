const prefix = 'rotate-'
const regexp = new RegExp('^' + prefix)

chrome.runtime.onMessage.addListener((msg) => {
    const video = document.querySelector('video')

    video.pause() // 再生中の場合、別のショートカットキーに引っかかる場合があるので回避策

    video.classList.forEach(c => {
        if (c.match(regexp)) {
            video.classList.remove(c)
        }
    })
    video.classList.add(prefix + msg.direction)

    video.play()
});