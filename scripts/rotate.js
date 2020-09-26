/* eslint-disable no-undef */
/**
 * @param {Object} msg
 * @param {Number} msg.angle - 角度
 * @param {String} msg.expansionRate - 拡大率
*/
chrome.runtime.onMessage.addListener((msg) => {
  const video = document.querySelector('video')
  video.style.transform = `rotate(${msg.angle}deg) scale(${msg.expansionRate})`
})
