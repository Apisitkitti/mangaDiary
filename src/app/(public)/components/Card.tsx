import Image from 'next/image'
import { BookInformation } from '../interface/book'
interface Props {
  book: BookInformation
}
const Card: React.FC<Props> = ({ book }) => {
  return (
    <div className="relative m-5">
      <div className="relative w-max">
        <Image
          src={
            book.tag.type === 'manga'
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
          className="rounded-xl object-contain"
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
        <p className="text-xs">{book.name}</p>
      </div>
    </div>
  )
}
export default Card
