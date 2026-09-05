import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { Plus, Check, Eye } from 'lucide-react';
import gsap from 'gsap';

export const ProductsPage = ({ onSelectProduct }) => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [addedMap, setAddedMap] = useState({});
  const gridRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.categoryId === selectedCategory);

  // Fast stagger entrance when category filter changes
  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.04, ease: 'power2.out' }
      );
    }
  }, [selectedCategory]);

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [product.id]: false }));
    }, 800);
  };

  return (
    <main className="w-full pt-24 sm:pt-28 pb-16 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="max-w-xl mb-8 sm:mb-10">
        <span className="text-[11px] font-bold tracking-widest text-[#C85A32] uppercase block mb-1.5">
          THE SNAQARY MENU
        </span>
        <h1 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#191817] leading-tight mb-2.5">
          Pick your kind of crunch.
        </h1>
        <p className="text-sm sm:text-base text-[#6E6B65]">
          From classic stone-roasted millet khakhra to flavour-packed puffs, sticks and small-batch dips.
        </p>
      </div>

      {/* Sticky Category Filter Bar */}
      <div className="sticky top-18 sm:top-20 z-20 py-2.5 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 backdrop-blur-md bg-[#FAF8F5]/90 border-y sm:border sm:rounded-full border-[#191817]/8 transition-all">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar sm:justify-start">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#191817] text-[#FAF8F5] shadow-xs'
                    : 'text-[#6E6B65] hover:text-[#191817] hover:bg-[#191817]/5'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
      >
        {filteredProducts.map((product) => {
          const isAdded = !!addedMap[product.id];

          return (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group cursor-pointer rounded-2xl bg-white p-4 border border-[#191817]/8 shadow-2xs hover:shadow-lg hover:border-[#191817]/15 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-[#FAF8F5] mb-3.5 border border-[#191817]/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                  loading="lazy"
                />

                {product.badge && (
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-[#191817] text-[#FAF8F5]">
                    {product.badge}
                  </span>
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProduct(product);
                  }}
                  className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/90 text-[#191817] opacity-0 group-hover:opacity-100 transition-all hover:bg-white shadow-xs"
                  aria-label="Quick View"
                >
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Product Info */}
              <div>
                <div className="flex items-center justify-between text-xs text-[#6E6B65] mb-1 font-medium">
                  <span>{product.category}</span>
                  {product.netWeight && <span>{product.netWeight}</span>}
                </div>

                <h3 className="font-editorial text-base sm:text-lg font-bold text-[#191817] group-hover:text-[#C85A32] transition-colors leading-tight mb-1.5">
                  {product.name}
                </h3>

                <p className="text-xs text-[#6E6B65] line-clamp-2 leading-relaxed mb-3">
                  {product.description}
                </p>

                {/* Dietary Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.tags?.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[9px] font-medium bg-[#F4F0E8] text-[#4D5842]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Add to Cart */}
              <div className="pt-3 border-t border-[#191817]/6 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[9px] text-[#6E6B65] uppercase tracking-wider">Price</span>
                  <span className="font-editorial text-base font-bold text-[#191817]">
                    ₹{product.price}
                  </span>
                </div>

                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  disabled={isAdded}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1 shadow-xs ${
                    isAdded
                      ? 'bg-[#4D5842] text-white'
                      : 'bg-[#191817] text-[#FAF8F5] hover:bg-[#2A2926]'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3 h-3" />
                      <span>Add</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
