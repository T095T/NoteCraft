import React, { ComponentProps } from 'react'

import { cn, formatDateFromMS } from '@/utils/index'
import { NoteInfo } from '@/shared/models'
import { format } from 'util'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
    const Date = formatDateFromMS(lastEditTime)
  return (
    <div
      className={cn(
        'cursor-pointer px-2 py-3 rounded-md transition-colors duration-75',
        { 'bg-zinc-400/75': isActive, 'hover:bg-zinc-500/75': !isActive },
        className
      )}
    >
      <h3 className="mb-1 font-semibold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{Date}</span>
    </div>
  )
}

export default NotePreview
