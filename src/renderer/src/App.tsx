import { Content, RootLayout, Sidebar } from './components'
import { ActionButtons } from './components/ActionButtons'
import { DragabbleTopBar } from './components/DragabbleTopBar'
import { NotesPreviewList } from './components/NotesPreviewList'

const App = () => {
  return (
    <>
      <DragabbleTopBar />
      <RootLayout>
        <Sidebar className="p-2 border-t-2 border-yellow-500">
          <ActionButtons className="flex justify-center mt-2" />
          <NotesPreviewList className="mt-2 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
