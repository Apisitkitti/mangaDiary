import Image from 'next/image'
import { BookInformation, BookType } from '../interface/book'
import Link from 'next/link'
interface Props {
  book: BookInformation
}
const Card: React.FC<Props> = ({ book }) => {
  return (
    <Link href="#" className="relative">
      <div className="relative">
        <Image
          src={
            book.tag.type === BookType.MANGA
              ? '/assets/japan_flag.png'
              : '/assets/korea_flag.png'
          }
          alt={book.tag.type}
          className="absolute top-0 right-0 rounded-xs object-contain"
          width={40}
          height={20}
        />
        <Image
          src={book.image}
          alt={book.alt}
          className="rounded-xl object-contain hover:scale-125"
          width={160}
          height={100}
        />
        {book.tag.isHasColor && (
          <p className="absolute bottom-0 bg-amber-300 text-xs font-semibold">
            COLOR
          </p>
        )}
      </div>
      <div>
        <p className="text-xs text-amber-50">{book.name}</p>
      </div>
    </Link>
  )
}
export default Card
