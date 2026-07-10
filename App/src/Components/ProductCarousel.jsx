import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryBanner from './CategoryBanner';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";



const Next = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdArrowForwardIos
        style={{ color: "black", fontSize: 25, fontWeight: 900, marginRight: '5px' }}
      />
    </div>
  );
};
const Prev = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <MdOutlineArrowBackIosNew
        style={{ color: "black", fontSize: 25, fontWeight: 900 }}
      />
    </div>
  );
};

const ProductCarousel = ({ BgImg, Title, Data, category }) => {

  const Slick = Slider?.default || Slider;

  const Settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <div className="w-full overflow-hidden mx-4 px-4 py-6">
      <div className="rounded-3xl bg-slate-50 shadow-sm">
        <div className="grid gap-4 px-4 py-6 grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)] md:px-6">
          <div
            className="relative flex min-h-[220px] flex-col justify-between w-full max-w-[250px] mx-auto overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100 p-6 text-slate-900 md:w-[250px]"
            style={{ background: `url(${BgImg}) no-repeat 0px 120px `, backgroundSize: 'cover' }}
          >
            <div className="max-w-[220px]">
              <p className="text-2xl font-semibold leading-tight text-slate-950">
                {Title}
              </p>
            </div>
            <Link
              to={`/products/${category}`}
              className="inline-flex mx-auto items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 mt-4"
            >
              View All
            </Link>
          </div>

          <div className="w-full">
            <Slick nextArrow={<Next />} prevArrow={<Prev />} {...Settings}>
              {Data.slice(0, 7).map((item, index) => (
                <div key={index} className="px-2">
                  <Link to={`/products/${category}`} className="block">
                    <CategoryBanner
                      ImgSrc={item.url}
                      Title={item.Product}
                      Category={category}
                    />
                  </Link>
                </div>
              ))}
            </Slick>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCarousel