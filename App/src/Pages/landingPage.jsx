import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Smartphone, 
  Laptop, 
  Book, 
  ShoppingBag, 
  ShieldCheck, 
  CreditCard, 
  Zap, 
  PackageCheck, 
  Star, 
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

// Import actual product data from data files
import { ProductsData as mobileData } from '../data/ProductsData'
import { LaptopProducts as laptopData } from '../data/LaptopProducts'
import { BookProducts as booksData } from '../data/BookProducts'
import { GroceryProducts as groceryData } from '../data/GroceryProducts'

const LandingPage = () => {
  const navigate = useNavigate();

  // Curate a set of real products for visual landing page presentation
  const featuredProducts = [
    { ...mobileData[0], category: 'mobile' },
    { ...laptopData[0], category: 'laptop' },
    { ...booksData[0], category: 'books' },
    { ...groceryData[0], category: 'grocery' }
  ];

  return (
    <div className="bg-white text-slate-900 font-sans min-h-screen">
      
      {/* SECTION 1 - HERO BANNER */}
      <section className="relative overflow-hidden py-20 lg:py-32 border-b border-slate-100 bg-gradient-to-b from-blue-50/20 via-transparent to-transparent">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* Left Side Content */}
            <div className="flex flex-col space-y-8 max-w-xl">
              <div>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 tracking-wider uppercase mb-5">
                  Smart Shopping Made Easy
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  Everything You Need, <br />
                  <span className="text-blue-600">Delivered Smarter.</span>
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-light">
                  Shop mobiles, laptops, books, and groceries with a seamless shopping experience, secure payments, and fast delivery.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products/mobile"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-xl active:scale-98 cursor-pointer group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/products/mobile"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300 active:scale-98 cursor-pointer"
                >
                  Browse Products
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Free delivery over ₹500</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>24/7 Dedicated Support</span>
                </div>
              </div>
            </div>

            {/* Right Side - Dynamic E-Commerce Mock-up Graphic */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl bg-slate-50 border border-slate-200/60 p-6 shadow-sm overflow-hidden select-none">
                
                {/* Embedded Grid Background details */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>

                {/* Dashboard Frame */}
                <div className="relative h-full w-full flex flex-col justify-between">
                  
                  {/* Top Bar simulation */}
                  <div className="flex items-center justify-between border-b border-slate-200/50 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                    </div>
                    <div className="bg-slate-200/60 text-[10px] font-semibold text-slate-500 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Status: Active
                    </div>
                  </div>

                  {/* Graphic Dashboard Pieces */}
                  <div className="grid grid-cols-2 gap-4 my-auto relative">
                    
                    {/* Element A: Order Tracking Status */}
                    <div className="bg-white border border-slate-200/80 p-4 rounded-2xl shadow-sm space-y-3 transition-transform duration-300 hover:scale-103">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Smart Delivery</span>
                        <TrendingUp className="h-4 w-4 text-blue-500" />
                      </div>
                      <div className="text-lg font-bold text-slate-800">Order #3942</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                          <span className="text-[11px] font-medium text-slate-600">Dispatched</span>
                        </div>
                        <div className="w-1 h-3 bg-blue-200 ml-1 rounded-full"></div>
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex items-center justify-center">
                            <span className="w-1 h-1 rounded-full bg-white"></span>
                          </div>
                          <span className="text-[11px] font-semibold text-slate-800">Delivered Today</span>
                        </div>
                      </div>
                    </div>

                    {/* Element B: Featured Product Mock */}
                    <div className="bg-white border border-slate-200/80 p-4 rounded-2xl shadow-sm flex flex-col justify-between transition-transform duration-300 hover:scale-103">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider">Laptops</span>
                          <h4 className="text-xs font-bold text-slate-800 line-clamp-1">UltraBook Pro</h4>
                        </div>
                        <span className="text-[10px] font-semibold text-amber-500 flex items-center gap-0.5">
                          ⭐ 4.9
                        </span>
                      </div>
                      <div className="mt-4 flex items-baseline justify-between">
                        <span className="text-sm font-black text-slate-800">₹64,999</span>
                        <span className="text-[9px] font-medium text-slate-400 line-through">₹72,999</span>
                      </div>
                    </div>

                    {/* Element C: Secure Payment Card */}
                    <div className="col-span-2 bg-blue-600 text-white p-4 rounded-2xl shadow-md flex items-center justify-between border border-blue-500 transition-transform duration-300 hover:scale-102">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                          <CreditCard className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-blue-100">Secured Checkout</div>
                          <div className="text-sm font-bold tracking-wide">Visa & Mastercard Gateway</div>
                        </div>
                      </div>
                      <div className="bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold px-2 py-1 rounded-lg">
                        100% Secure
                      </div>
                    </div>
                  </div>

                  {/* Floating Micro elements */}
                  <div className="flex justify-between items-center text-[10px] text-slate-400 pt-2 border-t border-slate-200/40">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Est. Time: Same day delivery
                    </span>
                    <span>© 2026 E-Shop</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 - FEATURED CATEGORIES */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Shop by Featured Categories
            </h2>
            <p className="mt-4 text-slate-600">
              Browse through our handpicked selections across technology and lifestyle domains.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Category 1: Mobiles */}
            <Link 
              to="/products/mobile"
              className="group relative bg-white rounded-2xl border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-blue-100 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Smartphone className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Mobiles</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Explore next-gen smartphones, accessories, and power devices.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Shop Mobiles
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>

            {/* Category 2: Laptops */}
            <Link 
              to="/products/laptop"
              className="group relative bg-white rounded-2xl border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-blue-100 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Laptop className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Laptops</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Upgrade productivity with high-performance laptops and ultra slim gear.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Shop Laptops
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>

            {/* Category 3: Books */}
            <Link 
              to="/products/books"
              className="group relative bg-white rounded-2xl border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-blue-100 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Book className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Books</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Find top bestsellers in business, self-help, technology, and fiction.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Shop Books
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>

            {/* Category 4: Groceries */}
            <Link 
              to="/products/grocery"
              className="group relative bg-white rounded-2xl border border-slate-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-blue-100 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Groceries</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Stay stocked with fresh produce, kitchen staples, and dairy essentials.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Shop Groceries
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* SECTION 3 - WHY SHOP WITH US */}
      <section className="py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Shop With Us
            </h2>
            <p className="mt-4 text-slate-600">
              We design every feature around speed, reliability, and security to make e-commerce effortless.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Feature 1: Secure Authentication */}
            <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm text-left">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Secure Authentication</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enjoy peace of mind with password encryption and authenticated session tokens.
              </p>
            </div>

            {/* Feature 2: Stripe Secure Payments */}
            <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm text-left">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5">
                <CreditCard className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Stripe Secure Payments</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We integrate with credit card processors via Stripe for zero-risk, certified purchasing.
              </p>
            </div>

            {/* Feature 3: Fast Checkout */}
            <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm text-left">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fast Checkout</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Add products, save details securely, and finish purchases in moments with optimized grids.
              </p>
            </div>

            {/* Feature 4: Easy Order Tracking */}
            <div className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm text-left">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5">
                <PackageCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Easy Order Tracking</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Monitor products step-by-step from checkout confirmation straight to your shipping address.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 - FEATURED PRODUCTS PREVIEW */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Featured Product Preview
              </h2>
              <p className="mt-3 text-slate-600">
                A selection of high-quality items representing our tech, grocery, and book categories.
              </p>
            </div>
            <Link
              to="/products/mobile"
              className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer"
            >
              Browse All Catalog
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Products Horizontal list */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((item) => (
              <div 
                key={`${item.category}-${item.id}`} 
                className="group relative bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-slate-300"
              >
                
                {/* Product Image Container */}
                <div className="relative aspect-square w-full bg-slate-50 flex items-center justify-center p-6 sm:p-8 overflow-hidden select-none border-b border-slate-100">
                  <img
                    src={item.url}
                    alt={item.Product}
                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Info Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-3">
                    
                    {/* Rating Bar */}
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-amber-400">
                        <Star className="h-4.5 w-4.5 fill-current" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">{item.rating}</span>
                      <span className="text-[11px] text-slate-400">({item.reviews?.toLocaleString()} reviews)</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors text-base line-clamp-2 leading-snug">
                      {item.Product}
                    </h3>
                  </div>

                  {/* Pricing and Details Button */}
                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-4">
                    <div className="flex items-baseline justify-between select-none">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-slate-900">₹{item.Sellingprice}</span>
                        {item.Orginalprice && (
                          <span className="text-xs text-slate-400 line-through">₹{item.Orginalprice}</span>
                        )}
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                        In Stock
                      </span>
                    </div>

                    <Link
                      to={`/productDetails/${item.category}/${item.id}`}
                      className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 active:scale-98 cursor-pointer"
                    >
                      View Details
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 - STATISTICS */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Stat Card 1 */}
            <div className="bg-white border border-slate-200/50 p-8 rounded-2xl shadow-sm text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-600 tracking-tight">
                500+
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-600 uppercase tracking-widest text-xs pt-1">
                Products
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white border border-slate-200/50 p-8 rounded-2xl shadow-sm text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-600 tracking-tight">
                1000+
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-600 uppercase tracking-widest text-xs pt-1">
                Customers
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white border border-slate-200/50 p-8 rounded-2xl shadow-sm text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-600 tracking-tight">
                50+
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-600 uppercase tracking-widest text-xs pt-1">
                Brands
              </div>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-white border border-slate-200/50 p-8 rounded-2xl shadow-sm text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-600 tracking-tight">
                100%
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-600 uppercase tracking-widest text-xs pt-1">
                Secure Payments
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 - CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 relative z-10">
          <div className="rounded-3xl bg-blue-600 text-white px-8 py-16 sm:p-20 text-center shadow-xl shadow-blue-500/10 border border-blue-500 flex flex-col items-center">
            
            {/* Decors inside CTA */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="max-w-2xl space-y-6">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
                Start Shopping Today
              </h2>
              <p className="mx-auto text-base sm:text-lg text-blue-100 font-light leading-relaxed max-w-xl">
                Create your account and explore thousands of products across technology, literature, and home items.
              </p>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
              <Link
                to="/signup"
                className="w-full sm:w-auto inline-flex justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-blue-600 transition-transform active:scale-98 shadow-md hover:bg-slate-50 cursor-pointer"
              >
                Sign Up
              </Link>
              <Link
                to="/products/mobile"
                className="w-full sm:w-auto inline-flex justify-center rounded-xl border border-blue-500/50 bg-blue-700/40 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-98 cursor-pointer"
              >
                Browse Products
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7 - FOOTER */}
      <footer className="bg-slate-50 border-t border-slate-200/80 pt-16 pb-8 text-sm text-slate-600">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 mb-16">
            
            {/* Column 1: Company Logo & Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-black italic shadow-md">
                  E
                </div>
                <span className="text-lg font-black tracking-tight text-slate-900">
                  SHOP<span className="text-blue-600">.</span>
                </span>
              </div>
              <p className="text-slate-500 leading-relaxed font-light max-w-xs">
                A premium, minimal platform bringing electronics, literature, and essentials under a single unified shopping hub.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="h-9 w-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-colors shadow-sm" aria-label="Facebook">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="h-9 w-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-colors shadow-sm" aria-label="Twitter">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="h-9 w-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-colors shadow-sm" aria-label="Instagram">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1.5" />
                  </svg>
                </a>
                <a href="#" className="h-9 w-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-colors shadow-sm" aria-label="LinkedIn">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link to="/home" className="hover:text-blue-600 transition-colors">Home Page</Link></li>
                <li><Link to="/cart" className="hover:text-blue-600 transition-colors">My Cart</Link></li>
                <li><Link to="/products/mobile" className="hover:text-blue-600 transition-colors">Explore Options</Link></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Help & FAQ</a></li>
              </ul>
            </div>

            {/* Column 3: Categories */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Categories</h4>
              <ul className="space-y-4">
                <li><Link to="/products/mobile" className="hover:text-blue-600 transition-colors">Mobiles</Link></li>
                <li><Link to="/products/laptop" className="hover:text-blue-600 transition-colors">Laptops</Link></li>
                <li><Link to="/products/books" className="hover:text-blue-600 transition-colors">Books</Link></li>
                <li><Link to="/products/grocery" className="hover:text-blue-600 transition-colors">Groceries</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Infomation */}
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Contact Us</h4>
              <ul className="space-y-4 text-slate-500">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-slate-400" />
                  <span className="truncate">support@eshop.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-slate-400" />
                  <span>+1 (555) 794-0239</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-slate-400 mt-0.5" />
                  <span>100 E-Commerce Way, Tech City, CA 94016</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright Divider */}
          <div className="pt-8 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              © 2026 E-Shop Co. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Sitemap</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default LandingPage
