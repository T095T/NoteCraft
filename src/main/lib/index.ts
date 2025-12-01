//Node JS ENV

import { dialog } from 'electron'
import { ensureDir, remove, writeFile } from 'fs-extra'
import { readdir, readFile, stat } from 'fs/promises'
import isEmpty from 'lodash/isEmpty'
import { homedir } from 'os'
import path from 'path'
import welcomeNoteFile from '../../../resources/welcomeNote.md?asset'
import { appDirectoryName, fileEncoding, welcomeNoteFileName } from '../../shared/constants'
import { NoteInfo } from '../../shared/models'
import {
  CreateNote,
  DeleteNote,
  GetNotes,
  ReadNoteContent,
  WriteNoteContent
} from '../../shared/types'

export const getRootDir = () => {
  return path.join(homedir(), 'Desktop', appDirectoryName)
}
export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir) //Ensure whether rootDir is present or not

  const notesFilesNames = await readdir(rootDir, {
    encoding: 'utf8',
    withFileTypes: false
  })

  const notes = notesFilesNames.filter((filename) => filename.endsWith('.md'))
  if (isEmpty(notes)) {
    console.info('NO Notes found:,creating welcome note')
    const content = await readFile(welcomeNoteFile, { encoding: fileEncoding })

    //create welcome note
    await writeFile(`${rootDir}/${welcomeNoteFileName}`, content, { encoding: fileEncoding })
    notes.push(welcomeNoteFileName)
  }

  return Promise.all(notes.map(getNoteInfoFromFilename))
}

export const getNoteInfoFromFilename = async (filename: string): Promise<NoteInfo> => {
  const fileStats = await stat(`${getRootDir()}/${filename}`)

  return {
    title: filename.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  }
}

export const readNoteContent: ReadNoteContent = async (filename) => {
  const rootDir = getRootDir()

  return readFile(`${rootDir}/${filename}.md`, fileEncoding)
}

export const writeNote: WriteNoteContent = async (filename, content) => {
  const rootDir = getRootDir()
  console.info(`Writing note to ${filename}`)
  return writeFile(`${rootDir}/${filename}.md`, content, fileEncoding)
}

export const createNote: CreateNote = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  const { filePath, canceled } = await dialog.showSaveDialog({
    title: 'New Note',
    defaultPath: `${rootDir}/Untitled.md`,
    buttonLabel: 'Create Note',
    properties: ['showOverwriteConfirmation'],
    showsTagField: false,
    filters: [{ name: 'Markdown Files', extensions: ['md'] }]
  })

  if (canceled || !filePath) {
    console.info('Note Creation Canceled')
    return false
  }
  const { name: filename, dir: parentDir } = path.parse(filePath)
  if (parentDir !== rootDir) {
    await dialog.showMessageBox({
      type: 'error',
      title: 'Creation Failed',
      message: 'Notes must be created inside the Root Directory.Avoid using other directories'
    })
    return false
  }

  console.info(`Creating new note: ${filename}`)
  await writeFile(filePath, '', fileEncoding)
  return filename
}
export const deleteNote: DeleteNote = async (filename) => {
  const rootDir = getRootDir()
  const { response } = await dialog.showMessageBox({
    title: 'Delete Note',
    message: 'Are you sure you want to delete this note?',
    buttons: ['Delete', 'Cancel'], //0 is delete and 1 is cancel
    defaultId: 1,
    cancelId: 1,
    type: 'warning'
  })
  if (response === 1) {
    console.info('Note deletion canceled')
    return false
  }
  console.info(`Deleting note: ${filename}`)
  await remove(`${rootDir}/${filename}.md`)
  return true
}
