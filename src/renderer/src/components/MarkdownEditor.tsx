//Used MDX EDITOR and tailwind typography plugin for markdown editing and styling


import {
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin
} from '@mdxeditor/editor'
import { useMarkDownEditor } from '@renderer/hooks/useMarkDownEditor'
import React from 'react'

export default function MarkdownEditor() {
  const {selectedNode} = useMarkDownEditor()
  if(!selectedNode)return null
  return (
    <MDXEditor
    key={selectedNode.title}
      markdown={selectedNode.content}
      plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
      contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
    />
  )
}
