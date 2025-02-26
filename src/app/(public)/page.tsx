import BooksLists from './components/BookLists'
import { BookType } from './interface/book'

export default function Home() {
  return (
    <div className="flex justify-between">
      <BooksLists
        bookData={[
          {
            name: 'สถาปนิกผู้พิทักษ์อาณาจักร',
            image: '/manga_test.jpg',
            alt: 'สถาปนิกผู้พิทักษ์อาณาจักร',
            tag: {
              isHasColor: true,
              type: BookType.MANHWA,
            },
          },
          {
            name: 'สถาปนิกผู้พิทักษ์อาณาจักร',
            image: '/manga_test.jpg',
            alt: 'สถาปนิกผู้พิทักษ์อาณาจักร',
            tag: {
              isHasColor: true,
              type: BookType.MANHWA,
            },
          },
          {
            name: 'สถาปนิกผู้พิทักษ์อาณาจักร',
            image: '/manga_test.jpg',
            alt: 'สถาปนิกผู้พิทักษ์อาณาจักร',
            tag: {
              isHasColor: true,
              type: BookType.MANHWA,
            },
          },
        ]}
      />
    </div>
  )
}
