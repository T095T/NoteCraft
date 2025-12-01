import { selectedNoteAtom } from "@renderer/store"
import { useAtomValue } from "jotai"

export const useMarkDownEditor = () => {
const selectedNode  = useAtomValue(selectedNoteAtom)
return{
    selectedNode
}
}