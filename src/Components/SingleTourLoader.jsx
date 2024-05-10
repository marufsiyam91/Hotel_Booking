

const SingleTourLoader = () => {
  return (
    <div className="h-[500px] md:h-[380px] w-full bg-white rounded-2xl">
        <div className="w-full h-[56%] md:h-[40%] bg-gray-100 roundex-2xl relative">
            <div className="absolute w-12 h-6 bg-white top-2 right-2 rounded-md fadeIn"></div>
        </div>
        <div className="flex flex-col gap-4 p-4 justify-center">
            <div className="w-[25%]  h-4 bg-gray-100 fadeIn rounded-md"></div>
            <div className="w-[90%]  h-5 bg-gray-100 fadeIn rounded-xl"></div>
            <div className="w-[35%]  h-4 bg-gray-100 fadeIn rounded-xl mt-2"></div>
            <div className="w-[50%]  h-4 bg-gray-100 fadeIn rounded-xl"></div>
            <div className="w-[60%]  h-4 bg-gray-100 fadeIn rounded-xl mt-3"></div>
        </div>
    </div>
  )
}

export default SingleTourLoader