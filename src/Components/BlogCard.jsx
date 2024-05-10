import { FaCalendarMinus } from "react-icons/fa6";


const BlogCard = ({image, category, date, title}) => {
  return (
    <div>
        <div className=" w-full h-auto rounded-md overflow-hidden">
            <img className="w-full" src={image} alt="" />
        </div>

        <div className="py-6 flex items-center gap-6">
            <button className="py-1 px-3 rounded-md bg-orange-50 text-[#FF6B00] transition hover:text-white hover:bg-[#FF6B00]  border">{category}</button>
            <p className="flex items-center gap-2">
                <span className="text-xl text-[#FF6B00]"><FaCalendarMinus /></span> {date}
            </p>
        </div>
        <h2 className="font-primary text-2xl font-semibold">{title}</h2>
    </div>
  )
}

export default BlogCard