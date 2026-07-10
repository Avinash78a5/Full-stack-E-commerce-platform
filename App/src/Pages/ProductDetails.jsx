import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import { ProductsData as productsData } from '../data/ProductsData'
import { addCart } from '../Slices/cartSlice'
import { useDispatch } from 'react-redux'
import { ProductRegistry } from '../data/ProductRegistry.js'

const ProductDetails = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addCart({
      ...product,
      category
    }));
  };

  const handleBuyNow = () => {
    dispatch(addCart({
      ...product,
      category
    }));
    navigate('/cart');
  };

  const products = ProductRegistry[category] || [];

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === parseInt(id, 10))
    setProduct(foundProduct)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-[60vh] px-6 py-8">
        <p className="text-slate-700 text-base">Loading product details...</p>
      </div>
    )
  }

  return (
    <div className="max-w-[1120px] mx-auto px-4 py-8 text-slate-900">
      <div className="mb-6">
        <p className="text-sm text-slate-500">Product Details</p>
        <h1 className="mt-2 text-3xl font-semibold leading-tight">{product.Product}</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm">
          <img
            src={product.url}
            alt={product.Product}
            className="mx-auto h-full max-h-[520px] w-full max-w-[420px] rounded-3xl object-contain"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
                {product.rating} ★
              </span>
              <span className="text-sm text-slate-500">{product.reviews.toLocaleString()} ratings & reviews</span>
            </div>

            <div className="flex flex-wrap items-baseline gap-4 mb-4">
              <span className="text-4xl font-bold text-slate-950">₹{product.Sellingprice}</span>
              <span className="text-sm text-slate-500 line-through">₹{product.Orginalprice}</span>
              <span className="text-sm font-semibold text-emerald-700">Best price</span>
            </div>

            <p className="text-sm leading-7 text-slate-600">{product.Descripition}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="w-full rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto cursor-pointer" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="w-full rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 sm:w-auto cursor-pointer"
                onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-950">Available Offers</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>Bank offer: 5% Cashback on Flipkart Axis Bank Card T&C</li>
              <li>Partner offer: Purchase now & get a surprise cashback coupon</li>
              <li>Partner offer: Sign up for Flipkart Pay Later and get a gift card up to ₹500</li>
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-950">Highlights</h2>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                <li>{product.Descripition}</li>
                <li>{product.Display}</li>
                <li>{product.Camera}</li>
                <li>{product.Battery || 'Battery details not available'}</li>
                <li>{product.Proccessor}</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-950">Product Info</h2>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <p><span className="font-semibold text-slate-900">Color & Storage:</span> {product.Product.split('(')[1] || product.Product}</p>
                <p><span className="font-semibold text-slate-900">Warranty:</span> {product.Proccessor}</p>
                <p><span className="font-semibold text-slate-900">Rating:</span> {product.rating} / 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails