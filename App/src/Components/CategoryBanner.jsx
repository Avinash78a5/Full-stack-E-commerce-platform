import React from 'react'

const CategoryBanner = ({ ImgSrc, Title, Category }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-200 p-4">
        <img src={ImgSrc} className="h-[200px] w-[250px] max-w-full object-contain sm:h-[220px] md:h-[200px]" />
        <div className="flex flex-col items-center justify-center gap-1 mt-1">
          <p >
            {Title.length < 25 ? Title : Title.slice(0, 25) + "..."}
          </p>
          <p >Shop Now!</p>
          <p >{Category}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">View all</button>
        </div>
      </div>
    </>
  )
}

export default CategoryBanner