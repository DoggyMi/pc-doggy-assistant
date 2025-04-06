import { BrowserWindow } from 'electron'
import path from 'path'

export const createPomodoroWindow = (): BrowserWindow => {
  const window = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js')
    }
  })

  window.loadFile(path.join(__dirname, '../renderer/newPage.html'))

  return window
}
