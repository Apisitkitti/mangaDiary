import Image from 'next/image'

interface Props {
  image: string
  name: string
  alt: string
  tag: { isHasColor: boolean; author: string }
}
const Card: React.FC<Props> = ({
  image = '/assets/no_image.jpg',
  alt = 'no image',
  name,
  tag = { author: 'manga', isHasColor: false },
}) => {
  return (
    <div className="relative w-max">
      <div className="relative">
        <Image
          src={
            tag.author === 'manga'
              ? '/assets/japan_flag.png'
              : '/assets/korea_flag.png'
          }
          alt={tag.author}
          className="absolute right-0 object-contain"
          width={50}
          height={20}
        />
        <Image
          src={image}
          alt={alt}
          className="rounded object-contain"
          width={50}
          height={150}
        />
        {tag.isHasColor && <div>COLOR</div>}
      </div>
      <div>
        <p>{name}</p>
      </div>
    </div>
  )
}
export default Card
