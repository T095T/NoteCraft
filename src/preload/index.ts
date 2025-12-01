import { contextBridge, ipcRenderer } from 'electron'

import { getNotes, readNoteContent, writeNote, createNote, deleteNote } from '@/lib'


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
    getNotes: (...args: Parameters<typeof getNotes>) => ipcRenderer.invoke('getNotes', ...args),

    readNoteContent:(...args: Parameters<typeof readNoteContent>) => ipcRenderer.invoke('readNoteContent', ...args),
    

    writeNote: (...args: Parameters<typeof writeNote>) => ipcRenderer.invoke('writeNoteContent', ...args),

    createNote:(...args: Parameters<typeof createNote>) => ipcRenderer.invoke('createNote', ...args),

    deleteNote:(...args: Parameters<typeof deleteNote>) => ipcRenderer.invoke('deleteNote', ...args)
  })
} catch (error) {
  console.log(error)
}
