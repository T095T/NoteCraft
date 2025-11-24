import { ComponentProps } from 'react'
import { DeleteButton, NewNoteButton } from './Button/index'

export const ActionButtons = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div className="w-full px-1" {...props}>
      <div className="flex justify-between w-full">
        <NewNoteButton />
        <DeleteButton />
      </div>
    </div>
  )
}
