import { Content, RootLayout, Sidebar } from './components'
import { ActionButtons } from './components/ActionButtons'
import { DragabbleTopBar } from './components/DragabbleTopBar'
import { NotesPreviewList } from './components/NotesPreviewList'
import MarkDownEditor from './components/MarkdownEditor'
import FloatingNoteTitle from './components/FloatingNoteTitle'
import { useRef } from 'react'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)
  const resetScroll=()=>{
    contentContainerRef.current?.scrollTo(0,0)
  }
  return (
    <>
      <DragabbleTopBar />
      <RootLayout>
        <Sidebar className="p-2 border-t-2 border-yellow-500">
          <ActionButtons className="flex justify-center mt-2" />
          <NotesPreviewList 
          onSelect={resetScroll}
          className="mt-2 space-y-1" />
        </Sidebar>
        <Content 
        ref={contentContainerRef}
        className="border-l bg-zinc-900/50 border-l-white/20">
        <FloatingNoteTitle className='pt-2'/>
          <MarkDownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
