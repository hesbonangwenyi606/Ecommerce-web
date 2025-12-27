import React, { useState, useMemo } from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { SearchBar } from './SearchBar';
import { ShoppingCart as Cart } from './ShoppingCart';
import { QuickViewModal } from './QuickViewModal';
import Footer from './components/Footer/Footer'; // <-- import footer

const products = [
  // ... your products array
];

export const AppLayout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState(new Set());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ category: '', minPrice: 0, maxPrice: 1000, sortBy: 'name' });

  const categories = [...new Set(products.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (filters.sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (filters.sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (filters.sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else filtered.sort((a, b) => a.name.localeCompare(b.name));

    return filtered;
  }, [searchQuery, filters]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
    }
  };

  const removeItem = (id) => setCartItems(prev => prev.filter(item => item.id !== id));

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) newSet.delete(productId);
      else newSet.add(productId);
      return newSet;
    });
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">LuxeStore</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900"><User size={24} /></button>
              <button onClick={() => setIsCartOpen(true)} className="relative p-2 text-gray-600 hover:text-gray-900">
                <ShoppingCart size={24} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero */}
        <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 mb-8">
          <div className="absolute inset-0">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817828511_1840787e.webp"
              alt="Hero"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative h-full flex items-center">
            <div className="text-white">
              <h2 className="text-5xl font-bold mb-4">Luxury Collection</h2>
              <p className="text-xl mb-8">Discover premium products crafted for excellence</p>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </section>

        {/* Search and Products */}
        <SearchBar onSearch={setSearchQuery} onFilter={setFilters} categories={categories} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onToggleWishlist={toggleWishlist}
              onQuickView={setQuickViewProduct}
              isWishlisted={wishlist.has(product.id)}
            />
          ))}
        </div>
      </main>

      {/* Cart and QuickView */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={() => alert('Proceeding to checkout...')}
      />
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        isWishlisted={quickViewProduct ? wishlist.has(quickViewProduct.id) : false}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppLayout;
