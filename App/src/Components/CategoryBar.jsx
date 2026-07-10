import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBar = ({ Imgsrc, CategoryName }) => {
  return (
    <>
      <div className='flex flex-col items-center gap-1 cursor-pointer'>
        <div>
          <Link to="/products/mobile">
            <img src={Imgsrc} />
          </Link>
        </div>
        <p className="text-sm font-medium text-gray-700">{CategoryName}</p>
      </div>
    </>
  )
}

export default CategoryBar;