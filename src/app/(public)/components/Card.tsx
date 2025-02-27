import Image from 'next/image'
import { BookInformation, BookType } from '../interface/book'
import Link from 'next/link'
interface Props {
  book: BookInformation
}
const Card: React.FC<Props> = ({ book }) => {
  return (
    <Link href="#" className="break-words">
      <div className="relative w-max">
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
          className="h-[200px] w-[150px] rounded-xs object-fill"
          width={150}
          height={100}
        />
        {book.tag.isHasColor && (
          <p className="absolute bottom-0 bg-amber-300 text-xs font-semibold">
            COLOR
          </p>
        )}
      </div>
      <div>
        <p className="w-36 text-lg font-bold break-words text-amber-50">
          {book.name}
        </p>
      </div>
    </Link>
  )
}
export default Card
