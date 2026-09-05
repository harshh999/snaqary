import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { QuickViewModal } from './components/ui/QuickViewModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname || '/';
  });

  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sync state with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage onNavigate={navigate} />;
      case '/products':
        return (
          <ProductsPage
            onSelectProduct={setSelectedProduct}
            onNavigate={navigate}
          />
        );
      case '/contact':
        return <ContactPage onNavigate={navigate} />;
      case '/':
      default:
        return (
          <HomePage
            onNavigate={navigate}
            onSelectProduct={setSelectedProduct}
          />
        );
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FAF8F5] text-[#191817] flex flex-col justify-between selection:bg-[#E2DDD3]">
        {/* Floating Capsule Navbar */}
        <Navbar currentPath={currentPath} onNavigate={navigate} />

        {/* Dynamic Page Content */}
        <div className="flex-1">
          {renderPage()}
        </div>

        {/* Global Slide-out Cart Drawer */}
        <CartDrawer onNavigate={navigate} />

        {/* Global Quick View Product Modal */}
        {selectedProduct && (
          <QuickViewModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}

        {/* Editorial Footer */}
        <Footer onNavigate={navigate} />
      </div>
    </CartProvider>
  );
}

export default App;
