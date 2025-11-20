import { contextBridge,ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'


//For frame-less application window
contextBridge.exposeInMainWorld("windowControls", {
  minimize: () => ipcRenderer.send("window-minimize"),
  maximize: () => ipcRenderer.send("window-maximize"),
  close: () => ipcRenderer.send("window-close"),
});



// Custom APIs for renderer
if(!process.contextIsolated){
  throw new Error('Context isolation is not enabled')
}

try {
  contextBridge.exposeInMainWorld('context',{

  })
} catch (error) {
  console.log(error)
}