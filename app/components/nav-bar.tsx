import Link from 'next/link'

export default function NavBar() {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="space-x-4">
        <Link
          href="/"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          no-store
        </Link>
        <Link
          href="/cache"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          Cache
        </Link>
        <Link
          href="/blogs"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          Nested Layout with Blogs
        </Link>
        <Link
          href="/streaming-sr"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          Streaming SR
        </Link>
        <Link
          href="/auth"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          Auth with CRUD
        </Link>
        <Link
          href="/health-check"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          RDS
        </Link>
      </nav>
    </header>
  )
}
