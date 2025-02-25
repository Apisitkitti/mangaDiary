'use client'
interface Props {
  title?: string
}


const Nav: React.FC<Props> = ({ title = "MangaDiary" }) => {
  return (
    <div className="w-full bg-blue-950 text-2xl text-white font-bold py-5 px-5">
      {title}
    </div>
  )
}
export default Nav