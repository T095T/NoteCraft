//Node JS ENV

import { appDirectoryName } from '@shared/constants'
import { readdir } from 'fs/promises'
import { ensureDir } from 'fs-extra'
import { homedir } from 'os'
import { stat } from 'fs/promises'
import { NoteInfo } from '@shared/models'
import { GetNotes } from '@shared/types'

export const getRootDir = () => {
  return `${homedir()}/${appDirectoryName}`
}
export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir) //Ensure whether rootDir is present or not

  const notesFilesNames = await readdir(rootDir, {
    encoding: 'utf8',
    withFileTypes: false
  })

  const notes = notesFilesNames.filter((filename) => filename.endsWith('.md'))

  return Promise.all(notes.map(getNoteInfoFromFilename))
}

export const getNoteInfoFromFilename = async (filename: string): Promise<NoteInfo> => {
  const fileStats = await stat(`${getRootDir()}/${filename}`)

  return {
    title: filename.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  }
}
