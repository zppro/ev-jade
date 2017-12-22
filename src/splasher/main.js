const ipc = require('electron').ipcRenderer
// const channel = 'splasher'
const { splasherChan } = require('../constants/channels')

const skipper = document.getElementById('skipper')
const countdown = document.getElementById('countdown')
skipper.addEventListener('click', function () {
  ipc.send(splasherChan, 'skip')
})

ipc.on(splasherChan, (event, sec, tag) => {
  console.log(sec, tag)
  tag === 'countdown' && (skipper.style.display = 'block')
  countdown.innerHTML = sec
  sec == -1 && ipc.send(splasherChan, 'skip')
})