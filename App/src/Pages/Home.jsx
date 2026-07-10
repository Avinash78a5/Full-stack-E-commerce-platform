import React from 'react'
import { useState,useEffect } from 'react';
import { CategoryBarData,CarouselData,BestOf } from '../data';
import CategoryBar from '../Components/CategoryBar';
import BannerCarousel from '../Components/BannerCarousel';
import ProductCarousel from '../Components/ProductCarousel';


import { ProductsData as mobileData } from '../data/ProductsData'
import { LaptopProducts as laptopData } from '../data/LaptopProducts'
import { GroceryProducts as groceryData } from '../data/GroceryProducts'
import { BookProducts as booksData } from '../data/BookProducts'

const Home = () => {
  console.log(CategoryBarData);
  return (
    <>
      <div>
          {/* Category Bar */}
          <div className='flex flex-wrap items-center justify-between gap-2 p-4'>
          { CategoryBarData.map((item,index) => (
          <CategoryBar key={index}
            Imgsrc={item.imageSrc} 
            CategoryName={item.category} 
          />
          )) }
         </div>

         {/* Banner Carousel */}
         <div className ="mt-2">
           <BannerCarousel data={CarouselData}/>
         </div>


         {/* Product Carousel */}
          <div className="space-y-4">
          <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Best of Mobiles"}
            Data={mobileData} category={"mobile"}
          />
          <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Best of Laptops"}
            Data={laptopData} category={"laptop"} 
          />
          <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Best of Grocery"}
            Data={groceryData} category={"grocery"}
          />
          <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Best of Books"}
            Data={booksData} category={"books"}
          />
        </div>

      </div>
      
      
    </>
  )
}

export default Home