

const TourlistLoader = () => {
  return (
    <div className="w-full h-[30rem] md:h-[13rem] bg-white rounded-2xl flex md:flex-row flex-col">
      <div className="w-full md:w-2/6 bg-gray-50 h-full"></div>
      <div className="w-4/6 h-full justify-center p-6 flex flex-col gap-4">
        <div className="w-[35%] h-3 bg-gray-100 rounded-md fadeIn"></div>
        <div className="w-[45%] h-4 bg-gray-100  rounded-md fadeIn"></div>
        <div className="w-full  mt-4 flex flex-col gap-3">
            <div className="w-[95%] h-3 bg-gray-100 rounded-md fadeIn"></div>
            <div className="w-[75%] h-3 bg-gray-100 rounded-md fadeIn"></div>
        </div>
        <div className="flex gap-8 mt-4">
            <div className="w-[25%] h-3 bg-gray-100 rounded-md fadeIn "></div>
            <div className="w-[15%] h-3 bg-gray-100 rounded-md fadeIn "></div>
        </div>
      </div>
    </div>
  )
}

export default TourlistLoader