import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { useMarkDownEditor } from '@renderer/hooks/useMarkDownEditor'

export default function FloatingNoteTitle({className,...props}:ComponentProps<'div'>) {
    const {selectedNode} = useMarkDownEditor()
    if(!selectedNode) return null
    const title = selectedNode.title
    return (
    <div className={twMerge('flex justify-center',  className)}{...props}>
      <span className='text-gray-600'>{title}</span>
    </div>
  )
}
