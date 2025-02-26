import Card from './components/Card'
import { BookType } from './interface/book'

export default function Home() {
  return (
    <div className="">
      <Card
        book={{
          name: 'สถาปนิกผู้พิทักษ์อาณาจักร',
          image: '/manga_test.jpg',
          alt: 'สถาปนิกผู้พิทักษ์อาณาจักร',
          tag: {
            isHasColor: true,
            type: BookType.MANHWA,
          },
        }}
      />
    </div>
  )
}
