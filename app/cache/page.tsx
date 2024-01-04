import NotesList from '../components/notes-list'
import Spinner from '../components/spinner'
import { Suspense } from 'react'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <Suspense fallback={<Spinner color="border-green-500" />}>
          <NotesList />
        </Suspense>
      </div>
    </main>
  )
}
