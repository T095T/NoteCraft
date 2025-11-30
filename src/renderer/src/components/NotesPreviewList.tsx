import { ComponentProps } from 'react'

import { notesMock } from '@/store/mocks'
import NotePreview from './NotePreview'
import { twMerge } from 'tailwind-merge'

const NotesPreviewList = ({className, ...props }: ComponentProps<'ul'>) => {
  if(notesMock.length===0){
    return (
      <ul className={twMerge('text-center pt-4',className)}{...props}>
        <span>No notes found</span>
      </ul>
    )
  }
  return (
    <ul className={className}{...props}>
      {notesMock.map((note) => (
        <NotePreview key={note.title + note.lastEditTime} {...note} />
      ))}
    </ul>
  )
}

export { NotesPreviewList }
