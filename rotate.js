const video = document.querySelector('video')

const directions = {
    TOP: 'top',
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right'
}

const prefix = 'rotate-'
const regexp = new RegExp('^' + prefix)

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.shiftKey){
        if (event.keyCode == 37){         // 左キー
            rotate(directions.LEFT)
        } else if (event.keyCode == 39){　// 右キー
            rotate(directions.RIGHT)
        } else if (event.keyCode == 38){　// 上キー
            rotate(directions.TOP)
        } else if (event.keyCode == 40){　// 下キー
            rotate(directions.BOTTOM)
        }
    }
})

const rotate = (direction) => {
    video.pause() // 再生中の場合、別のショートカットキーに引っかかる場合があるので回避策

    video.classList.forEach(c => {
        if (c.match(regexp)) {
            video.classList.remove(c)
        }
    })
    video.classList.add(prefix + direction)

    video.play()
}