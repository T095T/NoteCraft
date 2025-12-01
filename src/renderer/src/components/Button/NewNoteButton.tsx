import { LuSignature } from 'react-icons/lu'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { useSetAtom } from 'jotai'
import { createNoteAtom } from '@renderer/store'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createNote = useSetAtom(createNoteAtom)
  
const handleCreation= async()=>{
  await createNote()
}

  return (
    <ActionButton 
    onClick={handleCreation}
    {...props}>
      <LuSignature className="w-4 h-4 text-zinc-400" />
    </ActionButton>
  )
}

export default NewNoteButton
