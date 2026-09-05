import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, Trash2, Gift, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const CartDrawer = ({ onNavigate }) => {
  const {
    items,
    totalItems,
    subtotal,
    shipping,
    grandTotal,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    isEligibleForGoodie,
    amountNeededForGoodie,
    goodieProgress,
    goodieReward,
    checkoutModalOpen,
    setCheckoutModalOpen,
    clearCart,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckoutClick = () => {
    setCheckoutModalOpen(true);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 z-50 bg-[#191817]/40 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Slide-out Drawer */}
      <aside className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col justify-between border-l border-[#191817]/10 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-[#191817]/8 flex items-center justify-between bg-[#F4F0E8]">
          <div className="flex items-center gap-2.5">
            <span className="font-editorial font-bold text-lg text-[#191817]">Your Cart</span>
            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-[#191817] text-[#FAF8F5]">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 rounded-full text-[#6E6B65] hover:text-[#191817] hover:bg-[#191817]/5 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Goodie Progress Banner (₹500 Threshold) */}
        <div className="px-6 py-4 bg-[#EFEBE3] border-b border-[#191817]/8">
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-full mt-0.5 ${isEligibleForGoodie ? 'bg-[#4D5842] text-[#FAF8F5]' : 'bg-[#C85A32]/10 text-[#C85A32]'}`}>
              <Gift className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                <span className="text-[#191817] font-semibold">
                  {isEligibleForGoodie ? 'Ceramic Plate Unlocked!' : 'Snaqary Ceramic Plate Reward'}
                </span>
                <span className="text-[#6E6B65] text-[11px] font-mono">
                  ₹{subtotal}/₹{goodieReward.threshold}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#191817]/10 h-1.5 rounded-full overflow-hidden mb-2">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    isEligibleForGoodie ? 'bg-[#4D5842]' : 'bg-[#C85A32]'
                  }`}
                  style={{ width: `${goodieProgress}%` }}
                />
              </div>

              {/* Message */}
              <p className="text-xs text-[#6E6B65] leading-snug">
                {isEligibleForGoodie
                  ? goodieReward.messageAbove
                  : goodieReward.messageBelow(amountNeededForGoodie)}
              </p>
            </div>
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 no-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#191817]/5 flex items-center justify-center text-[#6E6B65] mb-4">
                <Gift className="w-7 h-7 stroke-1" />
              </div>
              <h4 className="font-editorial text-lg font-bold text-[#191817] mb-1">
                Your cart is empty
              </h4>
              <p className="text-xs text-[#6E6B65] max-w-[220px] mb-6">
                Explore our crispy roasted millets, puffs, and artisanal dips.
              </p>
              <button
                onClick={() => {
                  closeCart();
                  onNavigate('/products');
                }}
                className="px-6 py-2.5 rounded-full bg-[#191817] text-[#FAF8F5] text-xs font-semibold hover:bg-[#2A2926] transition-colors"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 rounded-xl bg-white border border-[#191817]/6 shadow-2xs hover:border-[#191817]/12 transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-18 h-18 rounded-lg object-cover bg-[#FAF8F5] shrink-0 border border-[#191817]/5"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-[#191817] leading-tight">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#9B9790] hover:text-[#C85A32] transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#6E6B65] mt-0.5">
                        {item.category} • {item.netWeight || 'Pack of 2'}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#191817]/5">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#191817]/12 rounded-full bg-[#FAF8F5] px-1.5 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-[#6E6B65] hover:text-[#191817] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold text-[#191817]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-[#6E6B65] hover:text-[#191817] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-editorial text-sm font-bold text-[#191817]">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Free Gift Card in List when threshold reached */}
              {isEligibleForGoodie && (
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#4D5842]/30 shadow-2xs">
                  <img
                    src={goodieReward.image}
                    alt="Free Ceramic Plate"
                    className="w-16 h-16 rounded-lg object-cover shrink-0 border border-[#4D5842]/20"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 text-[#4D5842] mb-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">
                        FREE UNLOCKED GIFT
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-[#191817]">
                      {goodieReward.rewardName}
                    </h5>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold text-[#4D5842]">₹0</span>
                      <span className="text-[11px] text-[#6E6B65] line-through">₹{goodieReward.value}</span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Drawer Footer & Checkout Action */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#191817]/8 bg-[#F4F0E8] space-y-3">
            <div className="space-y-1.5 text-xs text-[#6E6B65]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-[#191817]">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Standard Delivery</span>
                <span className="font-medium text-[#4D5842]">
                  {shipping === 0 ? 'FREE (Demo)' : `₹${shipping}`}
                </span>
              </div>
              {isEligibleForGoodie && (
                <div className="flex justify-between text-[#4D5842] font-medium">
                  <span>Snaqary Ceramic Plate</span>
                  <span>FREE</span>
                </div>
              )}
              <div className="pt-2 border-t border-[#191817]/8 flex justify-between text-base font-bold text-[#191817]">
                <span className="font-editorial">Total</span>
                <span className="font-editorial text-lg">₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={handleCheckoutClick}
              className="w-full py-3.5 px-6 rounded-full bg-[#191817] text-[#FAF8F5] font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#2A2926] active:scale-[0.99] transition-all duration-200 shadow-md"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-center text-[#6E6B65] tracking-wider uppercase">
              No-risk demo checkout • 100% Roasted Guarantee
            </p>
          </div>
        )}
      </aside>

      {/* Demo Checkout Confirmation Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-60 bg-[#191817]/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#FAF8F5] rounded-2xl max-w-md w-full p-6 sm:p-8 border border-[#191817]/10 shadow-2xl relative">
            <button
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#6E6B65] hover:text-[#191817] rounded-full hover:bg-[#191817]/5"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-[#4D5842]/10 text-[#4D5842] mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-[11px] font-bold tracking-widest text-[#6E6B65] uppercase">
                DEMO CHECKOUT COMPLETE
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#191817] mt-1 mb-3">
                Order Simulation Successful
              </h3>
              
              <p className="text-xs text-[#6E6B65] leading-relaxed mb-6">
                Thank you for reviewing the <strong className="text-[#191817]">Snaqary</strong> experience! Payments are disabled in this prototype. Your cart total was <strong className="text-[#191817]">₹{grandTotal}</strong> with {totalItems} items.
                {isEligibleForGoodie && (
                  <span className="block mt-2 text-[#4D5842] font-semibold">
                    🎁 Your order unlocked the free handcrafted ceramic plate reward!
                  </span>
                )}
              </p>

              <div className="bg-[#F2EFE9] rounded-xl p-4 text-left text-xs space-y-2 mb-6 border border-[#191817]/6">
                <div className="flex justify-between">
                  <span className="text-[#6E6B65]">Order Reference:</span>
                  <span className="font-mono font-bold text-[#191817]">SNQ-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6E6B65]">Estimated Delivery:</span>
                  <span className="font-medium text-[#191817]">Within 48 hours in Mumbai</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6E6B65]">Packaging:</span>
                  <span className="font-medium text-[#4D5842]">Zero-Plastic Recyclable Cartons</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setCheckoutModalOpen(false);
                    clearCart();
                    closeCart();
                    onNavigate('/products');
                  }}
                  className="flex-1 py-2.5 px-4 rounded-full bg-[#191817] text-[#FAF8F5] text-xs font-semibold hover:bg-[#2A2926] transition-colors"
                >
                  Start New Demo Order
                </button>
                <button
                  onClick={() => setCheckoutModalOpen(false)}
                  className="flex-1 py-2.5 px-4 rounded-full border border-[#191817]/20 text-[#191817] text-xs font-semibold hover:bg-[#191817]/5 transition-colors"
                >
                  Keep Browsing Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
