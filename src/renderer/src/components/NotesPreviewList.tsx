import { ComponentProps } from 'react'

import { notesMock } from '@/store/mocks'

const NotesPreviewList = ({ ...props }: ComponentProps<'ul'>) => {
  return (
    <ul {...props}>
      {notesMock.map((note) => (
        <li key={note.title}>{note.title}</li>
      ))}
    </ul>
  )
}

export { NotesPreviewList }
