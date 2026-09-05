import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, Check, ShieldCheck, Sparkles } from 'lucide-react';

export const QuickViewModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#191817]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="bg-[#FAF8F5] w-full max-w-2xl rounded-2xl overflow-hidden border border-[#191817]/10 shadow-2xl relative flex flex-col md:flex-row">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm text-[#191817] hover:bg-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Media Column */}
        <div className="md:w-1/2 bg-[#F2EFE9] relative flex items-center justify-center p-6 sm:p-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-[320px] object-cover rounded-xl shadow-xs border border-[#191817]/5"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#191817] text-[#FAF8F5]">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Info Column */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#6E6B65] uppercase tracking-wider mb-1">
              <span>{product.category}</span>
              {product.netWeight && <span>• {product.netWeight}</span>}
            </div>

            <h3 className="font-editorial text-2xl font-bold text-[#191817] leading-snug">
              {product.name}
            </h3>

            {product.price && (
              <div className="mt-2 text-xl font-editorial font-bold text-[#191817]">
                ₹{product.price}
                <span className="text-xs font-normal text-[#6E6B65] ml-1.5 font-sans">
                  (incl. of all taxes)
                </span>
              </div>
            )}

            <p className="mt-3 text-xs text-[#6E6B65] leading-relaxed">
              {product.description}
            </p>

            {/* Nutrition highlight row */}
            {product.nutrition && (
              <div className="mt-4 pt-3 border-t border-[#191817]/8 grid grid-cols-4 gap-2 text-center">
                <div className="bg-[#F4F0E8] p-2 rounded-lg">
                  <span className="block text-[9px] uppercase tracking-wider text-[#6E6B65]">Cal</span>
                  <span className="text-xs font-bold text-[#191817]">{product.nutrition.calories.split(' ')[0]}</span>
                </div>
                <div className="bg-[#F4F0E8] p-2 rounded-lg">
                  <span className="block text-[9px] uppercase tracking-wider text-[#6E6B65]">Protein</span>
                  <span className="text-xs font-bold text-[#191817]">{product.nutrition.protein}</span>
                </div>
                <div className="bg-[#F4F0E8] p-2 rounded-lg">
                  <span className="block text-[9px] uppercase tracking-wider text-[#6E6B65]">Fibre</span>
                  <span className="text-xs font-bold text-[#191817]">{product.nutrition.fibre}</span>
                </div>
                <div className="bg-[#F4F0E8] p-2 rounded-lg">
                  <span className="block text-[9px] uppercase tracking-wider text-[#6E6B65]">Fat</span>
                  <span className="text-xs font-bold text-[#191817]">{product.nutrition.fat}</span>
                </div>
              </div>
            )}

            {/* Ingredients tag pill */}
            {product.ingredients && (
              <div className="mt-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#6E6B65] block mb-1">
                  Ingredients:
                </span>
                <p className="text-[11px] text-[#6E6B65] leading-tight">
                  {product.ingredients.join(', ')}
                </p>
              </div>
            )}
          </div>

          {/* Add to Cart Actions */}
          <div className="mt-6 pt-4 border-t border-[#191817]/8 flex items-center gap-3">
            <div className="flex items-center border border-[#191817]/15 rounded-full bg-white px-2 py-1">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-1 text-[#6E6B65] hover:text-[#191817]"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-xs font-bold text-[#191817]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-1 text-[#6E6B65] hover:text-[#191817]"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              disabled={added}
              className={`flex-1 py-3 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                added
                  ? 'bg-[#4D5842] text-white'
                  : 'bg-[#191817] text-[#FAF8F5] hover:bg-[#2A2926]'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Cart</span>
                </>
              ) : (
                <span>Add to Cart • ₹{(product.price || 429) * quantity}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
