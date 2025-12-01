import { GetNotes, ReadNoteContent, WriteNoteContent } from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string
      getNotes: GetNotes
      readNoteContent: ReadNoteContent
      writeNote: WriteNoteContent
      createNote: CreateNote
      deleteNote: DeleteNote
    }
  }
}
