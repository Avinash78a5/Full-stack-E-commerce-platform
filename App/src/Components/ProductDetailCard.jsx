import React from 'react'

const ProductDetailCard = ({ data }) => {
  return (
    <div className="mb-4 overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-lg">
      <div className="flex items-start gap-4">
        <img
          src={data?.url}
          alt={data?.Product}
          className="h-[180px] w-[180px] rounded-3xl bg-slate-100 object-contain"
        />

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="text-lg font-semibold text-slate-900 truncate">
                {data?.Product}
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                {data?.Descripition}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">
                {data?.rating} ★
              </span>
              <span className="text-slate-500">
                {data?.reviews?.toLocaleString()} reviews
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-2xl font-bold text-slate-900">₹{data?.Sellingprice}</span>
            <span className="text-sm text-slate-500 line-through">₹{data?.Orginalprice}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
            <span className="rounded-full border border-slate-200 px-3 py-1">
              {data?.Display}
            </span>
            <span className="rounded-full border border-slate-200 px-3 py-1">
              {data?.Camera}
            </span>
            {data?.Battery && (
              <span className="rounded-full border border-slate-200 px-3 py-1">
                {data.Battery}
              </span>
            )}
            {data?.Proccessor && (
              <span className="rounded-full border border-slate-200 px-3 py-1">
                {data.Proccessor}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailCard