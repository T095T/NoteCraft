import { MDXEditorMethods } from '@mdxeditor/editor'
import { saveNoteAtom, selectedNoteAtom } from '@renderer/store'
import { useAtomValue, useSetAtom } from 'jotai'
import { throttle } from 'lodash'
import { useRef } from 'react'
import { autoSaveInterval } from '../../../shared/constants'
import { NoteContent } from '../../../shared/models'

export const useMarkDownEditor = () => {
  const selectedNode = useAtomValue(selectedNoteAtom)
  const saveNote = useSetAtom(saveNoteAtom)
  const editorRef = useRef<MDXEditorMethods>(null)

  //autosaving
  const handleAutoSave = throttle(
    async (content: NoteContent) => {
      if (!selectedNode) return

      console.info(`Auto Saving`, selectedNode.title)
      await saveNote(content)
    },
    autoSaveInterval,
    {
      leading: false,
      trailing: true
    }
  )
  const handleBlur = async () => {
    if (!selectedNode) return
    handleAutoSave.cancel() //cancel any pending autosave
    const content = await editorRef?.current?.getMarkdown()
    if (content !== undefined) {
      await saveNote(content)
    }
  }

  return {
    selectedNode,
    editorRef,
    handleAutoSave,
    handleBlur
  }
}
