'use strict'
import path from 'path'
import { app, BrowserWindow, ipcMain } from 'electron'
import { splasherChan } from '../constants/channels'
import NSQListener from './nsq-listener'
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */

if (process.env.NODE_ENV !== 'development') {
  global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let isMainWinReady = false
let splashWin
let mainWindow
let splasherCounterId
let nsqListener

const splashURL = process.env.NODE_ENV === 'development' ? `http://localhost:9081/splash.html` : `file://${__dirname}/splash.html`
const winURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080` : `file://${__dirname}/index.html`
console.log('splashURL 1', `file://${__dirname}/splash.html`)
function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 768,
    useContentSize: true,
    width: 1024,
    show: false,
    title: 'jade-护士台'
  })
  mainWindow.setMenu(null)
  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  splashWin = new BrowserWindow({
    width: 600,
    height: 360,
    frame: false,
    transparent: true,
    useContentSize: true,
    title: '正在启动...'
  })

  splashWin.loadURL(splashURL)

  splashWin.on('closed', () => {
    mainWindow.maximize()
    mainWindow.show()
  })

  let delaySec = 5
  mainWindow.once('ready-to-show', () => {
    isMainWinReady = true
    splashWin.webContents.send(splasherChan, delaySec, 'countdown')
    splasherCounterId = setInterval(() => {
      // delaySec--
      splashWin.webContents.send(splasherChan, --delaySec)
    }, 1000)
    // add nsqListener
    nsqListener = new NSQListener('test', {lookupdHTTPAddresses: '139.224.70.118:4161'})
    nsqListener.add((msg) => {
      console.log('1 ---- get msg => ', msg)
    })
  })
  delayClose()
}

const delayClose = () => {
  if (isMainWinReady) {
    splasherCounterId && clearInterval(splasherCounterId)
    splashWin && splashWin.close()
  }
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * 通信接收部分
 *
 */
ipcMain.once(splasherChan, (event, arg) => {
  console.log('main:', arg)
  if (arg === 'skip') {
    delayClose(0)
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
