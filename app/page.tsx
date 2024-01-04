import NotesListNoStore from './components/notes-list-nostore'
import NotesList from './components/notes-list'
import TimerCounter from './components/timer-counter'
import { Suspense } from 'react'
import Spinner from './components/spinner'
import RefreshBtn from './components/refresh-btn'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <Suspense fallback={<Spinner color="border-green-500" />}>
          <NotesListNoStore />
        </Suspense>

        <TimerCounter />
        <RefreshBtn />
      </div>
    </main>
  )
}
