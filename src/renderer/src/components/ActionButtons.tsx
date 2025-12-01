import { ComponentProps } from 'react'
import { DeleteButton, NewNoteButton } from './Button/index'
// import ToggleTheme from './Button/ToggleTheme'

export const ActionButtons = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div className="w-full px-1" {...props}>
      <div className="flex justify-between  items-center w-full">
        <NewNoteButton />
        <DeleteButton />
        {/* <ToggleTheme/> */}
      </div>
    </div>
  )
}
