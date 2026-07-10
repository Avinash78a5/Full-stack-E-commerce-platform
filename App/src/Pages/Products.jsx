import React from 'react'
// import { ProductsData as productsData } from '../data/ProductsData'
import ProductDetailCard from '../Components/ProductDetailCard'
import { ProductRegistry } from '../data/ProductRegistry.js'
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import { useSearchParams, useParams, useNavigate } from "react-router-dom";

const Products = () => {

  const { category } = useParams();

  //search params is used to get the current page number so that we can track of pagination suppose if page refreshes it navigates to page 1 so to avoid that we keep track of page number for that we use search params to keep track the page in url and use that to set the current page number on page load

  const [searchParams, setSearchParams] = useSearchParams();

  const productsData = ProductRegistry[category] || ProductRegistry['mobile']; // Default to mobile if category not found

  const pageFromURL = parseInt(searchParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(pageFromURL);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const productsPerPage = 5;

  //We calculate the start and end index of products to be shown on current page based on current page number and products per page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;


  //Filter products based on search
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) =>
      product.Product.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [productsData, searchTerm]);

  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);


  const navigate = useNavigate();

  return (
    <>
      <div className="mt-4 p-4">
        <div className="flex flex-col md:flex-row gap-2 min-h-screen relative">

          <div className="flex items-center justify-between mb-4 md:hidden">
            <button
              type="button"
              onClick={() => setIsFilterOpen(true)}
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Menu className="h-5 w-5" />
              Filters
            </button>
          </div>

          {isFilterOpen && (
            <div
              className="fixed inset-0 z-30 bg-black/20 md:hidden"
              onClick={() => setIsFilterOpen(false)}
            />
          )}

          {/* Filter section */}
          <div className={`${isFilterOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-40 w-[300px] max-w-full overflow-y-auto border-black bg-white p-4 shadow-xl/20 transition-transform duration-300 md:static md:translate-x-0 md:w-[300px] md:block`}>
            <div className="flex items-center justify-between mb-4 md:hidden">
              <p className="text-lg font-semibold">Filters</p>
              <button
                type="button"
                onClick={() => setIsFilterOpen(false)}
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white p-2 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Select option */}

            <select value={category}
              onChange={(e) => {
                navigate(`/products/${e.target.value}`)
                setCurrentPage(1);
                setSearchParams({
                  page: 1
                })
              }
              }

              className=" w-full p-2 mt-2 border border-gray-300 rounded-md bg-white text-gray-700 shadow-sm cursor-pointer outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="mobile">Mobile</option>
              <option value="laptop">Laptop</option>
              <option value="grocery">Grocery</option>
              <option value="books">Books</option>
            </select>

            <p className="p-2 font-bold">Brand</p>
            <input type="text" className="p-2  border-1 outline-none border-gray-500" placeholder="Enter product name" value={searchTerm} onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
              setSearchParams({
                page: 1
              });
            }} />
          </div>

          {/* Product section */}
          <div className="flex-1 border-black p-4 inset-shadow-sm shadow-xl/20 ">
            <p className="text-xl font-bold my-2">{`Showing ${startIndex + 1}-${Math.min(endIndex, filteredProducts.length)} of ${filteredProducts.length} results`}</p>
            <ul className="flex flex-row flex-wrap gap-4 list-none">
              <li className="font-md text-semibold text-gray-500">Sort By</li>
              <li className="font-md text-semibold text-gray-500">Relevance</li>
              <li className="font-md text-semibold text-gray-500">Popularity</li>
              <li className="font-md text-semibold text-gray-500">Price</li>
              <li className="font-md text-semibold text-gray-500">Price-Low to High</li>
              <li className="font-md text-semibold text-gray-500">Price-High to Low</li>
              <li className="font-md text-semibold text-gray-500">Newest First</li>
            </ul>

            {/* Product detail Card */}
            {
              currentProducts.length > 0 ?
                currentProducts.map((item, index) => (
                  //Link to product details page
                  <Link to={`/productDetails/${category}/${item.id}`} key={index}>

                    {/* Product detail card component */}
                    <ProductDetailCard data={item} />
                  </Link>
                ))
                :
                <div className="py-10 text-center">

                  <h2 className="text-xl font-semibold">
                    No products found
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Try a different search
                  </p>

                </div>
            }

            {
              totalPages > 0 &&
              (
                <div className="mt-2 flex gap-5 mx-auto justify-center">
                  {

                    [...Array(totalPages)].map((_, index) => (
                      <button className={`p-2 rounded cursor-pointer ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} key={index} onClick={() => {
                        setCurrentPage(index + 1); setSearchParams({
                          page: index + 1
                        })
                      }}>
                        {index + 1}
                      </button>
                    ))
                  }
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Products