import { LuSignature } from 'react-icons/lu'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <LuSignature className="w-4 h-4 text-zinc-400" />
    </ActionButton>
  )
}

export default NewNoteButton
