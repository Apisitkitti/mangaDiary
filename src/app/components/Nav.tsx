'use client'
interface Props {
  title?: string
}

const Nav: React.FC<Props> = ({ title = 'MangaDiary' }) => {
  return (
    <div className="w-full bg-blue-950 px-5 py-5 text-2xl font-bold text-white">
      {title}
    </div>
  )
}
export default Nav
