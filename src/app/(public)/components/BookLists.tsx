import { BookInformation } from '../interface/book'
import Card from './Card'
interface Props {
  bookData: BookInformation[]
}

const BooksLists: React.FC<Props> = ({ bookData }) => {
  return bookData.map((bookItem, index) => (
    <div key={index} className="m-10">
      <Card book={bookItem} />
    </div>
  ))
}
export default BooksLists
