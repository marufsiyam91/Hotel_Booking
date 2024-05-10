import BlogCard from "./BlogCard"


const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-[8rem]">
        <div className="max-w-[95%] mx-auto">
        <p className="text-center font-cursive text-3xl font-medium text-[#FFCA42]">Our Blog</p>
        <h2 className="font-primary text-center text-4xl font-bold py-4 mb-4">Get Latest News Update</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard image={'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} category={'Travel Blog'} date={'20 Mar, 2023'} title={'10 European ski destinations you should visit this winter'}/>
            <BlogCard image={'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} category={'Covid Travel'} date={'19 Mar, 2023'} title={'Booking travel during Corona: Find who are giving service'}/>
            <BlogCard image={'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} category={'Europe'} date={'18 Mar, 2023'} title={'Change your place and get the fresh air from the nature'}/>
        </div>
        </div>
    </div>
  )
}

export default Blog