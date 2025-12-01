import { FaRegTrashCan } from 'react-icons/fa6'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { useSetAtom } from 'jotai'
import { deleteNoteAtom } from '@renderer/store'

export const DeleteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDeletion = () => {
    deleteNote()
  }
  return (
    <ActionButton onClick={handleDeletion} {...props}>
      <FaRegTrashCan className="w-4 h-4  text-zinc-400" />
    </ActionButton>
  )
}

export default DeleteButton
