/* eslint-disable no-undef */
import { angles, zoomType } from './constant.js'

let expansionRate = 1.0 // 拡大率
let angle = 0 // 角度

const query = (obj) => {
  if (obj.angle !== undefined) angle = obj.angle

  // 拡大率調整
  if (obj.zoomType === zoomType.IN) expansionRate += 0.1
  if (obj.zoomType === zoomType.OUT && expansionRate !== 0) expansionRate -= 0.1

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      angle,
      expansionRate
    })
  })
}

document.getElementById('rotate-btn-right').addEventListener('click', () => {
  query({ angle: angles.RIGHT })
})
document.getElementById('rotate-btn-left').addEventListener('click', () => {
  query({ angle: angles.LEFT })
})
document.getElementById('rotate-btn-top').addEventListener('click', () => {
  query({ angle: angles.TOP })
})
document.getElementById('rotate-btn-bottom').addEventListener('click', () => {
  query({ angle: angles.BOTTOM })
})

document.getElementById('zoom-in-btn').addEventListener('click', () => {
  query({ zoomType: zoomType.IN })
})

document.getElementById('zoom-out-btn').addEventListener('click', () => {
  query({ zoomType: zoomType.OUT })
})
