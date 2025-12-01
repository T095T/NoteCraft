import { notesAtom, selectedNoteIndexAtom } from "@renderer/store"
import { useAtom, useAtomValue } from "jotai"
import { use } from "react"

export const useNotesList = ({onSelect}:{onSelect?: () => void}) => {
    const notes= useAtomValue(notesAtom)

    const [selectedNoteIndex,setSelectedNoteIndex]=useAtom(selectedNoteIndexAtom)

    const handleNotesSelect = (index: number) => {
        setSelectedNoteIndex(index)


        if(onSelect){
            onSelect()
        }
    }
    return{
        notes,
        selectedNoteIndex,
        handleNotesSelect
    }
}