import { BookInformation, BookType } from '../(public)/interface/book'

export const BOOKS: BookInformation[] = [
  {
    name: 'ranker_return',
    image: '/books_img/ranker_return.jpg',
    alt: 'Ranker return',
    tag: {
      isHasColor: true,
      type: BookType.MANHWA,
    },
  },
  {
    name: 'My Exclusive Tower Guide',
    image: '/books_img/my_exclusive_tower_guide.webp',
    alt: 'My Exclusive Tower Guide',
    tag: {
      isHasColor: true,
      type: BookType.MANHWA,
    },
  },
  {
    name: 'Architecture',
    image: '/books_img/architect.jpg',
    alt: 'Architecture',
    tag: {
      isHasColor: true,
      type: BookType.MANHWA,
    },
  },
]
