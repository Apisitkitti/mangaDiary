import BooksLists from './components/BookLists'
import { BOOKS } from '../database/books'

export default function Home() {
  return (
    <div className="m-5 flex items-center space-x-5 bg-red-400">
      <BooksLists bookData={BOOKS} />
    </div>
  )
}
