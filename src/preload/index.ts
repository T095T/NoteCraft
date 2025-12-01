import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { getNotes } from '@/lib'

//For frame-less application window
contextBridge.exposeInMainWorld('windowControls', {
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  close: () => ipcRenderer.send('window-close')
})

// Custom APIs for renderer
if (!process.contextIsolated) {
  throw new Error('Context isolation is not enabled')
}

try {
  contextBridge.exposeInMainWorld('context', {
    getNotes: (...args: Parameters<typeof getNotes>) => ipcRenderer.invoke('getNotes', ...args)
  })
} catch (error) {
  console.log(error)
}
