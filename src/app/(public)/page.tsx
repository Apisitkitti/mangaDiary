import BooksLists from './components/BookLists'
import { BOOKS } from '../database/books'

export default function Home() {
  return (
    <div className="m-5 flex h-max space-x-5 bg-red-400 p-4">
      <BooksLists bookData={BOOKS} />
    </div>
  )
}
