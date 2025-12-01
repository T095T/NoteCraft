import { ComponentProps } from 'react'

import { useNotesList } from '@renderer/hooks/useNotesList'
import { twMerge } from 'tailwind-merge'
import NotePreview from './NotePreview'
import isEmpty from 'lodash/isEmpty'
export type  NotePreviewListProps  = ComponentProps<'ul'>&{
  onSelect?:() => void
}

const NotesPreviewList = ({ onSelect,className, ...props }: NotePreviewListProps) => {
  const { notes, selectedNoteIndex, handleNotesSelect } = useNotesList({onSelect})

if(!notes) return null

  if (isEmpty(notes)) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No notes found</span>
      </ul>
    )
  }
  return (
    <ul className={className} {...props}>
      {notes.map((note, index) => (
        <NotePreview
          key={note.title + note.lastEditTime}
          isActive={selectedNoteIndex === index}
          onClick={() => handleNotesSelect(index)}
          {...note}
        />
      ))}
    </ul>
  )
}

export { NotesPreviewList }
