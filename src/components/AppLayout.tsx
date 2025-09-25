import React, { useState, useMemo } from 'react';
import { ShoppingCart, Heart, User, Menu, Search } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { SearchBar } from './SearchBar';
import { ShoppingCart as Cart } from './ShoppingCart';
import { QuickViewModal } from './QuickViewModal';

const products = [
  { id: 1, name: 'Luxury Gold Watch', price: 299, originalPrice: 399, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817832214_0448ef70.webp', rating: 4.8, reviews: 124, category: 'Watches' },
  { id: 2, name: 'Premium Leather Handbag', price: 189, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817841372_8cd92db0.webp', rating: 4.9, reviews: 89, category: 'Bags' },
  { id: 3, name: 'Designer Sunglasses', price: 149, originalPrice: 199, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817850113_a30de640.webp', rating: 4.7, reviews: 156, category: 'Accessories' },
  { id: 4, name: 'Luxury Perfume', price: 89, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817859543_93877dd7.webp', rating: 4.6, reviews: 203, category: 'Fragrance' },
  { id: 5, name: 'Gold Chain Necklace', price: 249, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817868513_545daf32.webp', rating: 4.8, reviews: 67, category: 'Jewelry' },
  { id: 6, name: 'Classic Timepiece', price: 399, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817834345_ff2bcf22.webp', rating: 4.9, reviews: 98, category: 'Watches' },
  { id: 7, name: 'Designer Tote Bag', price: 229, originalPrice: 299, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817843092_097c27a1.webp', rating: 4.7, reviews: 134, category: 'Bags' },
  { id: 8, name: 'Aviator Sunglasses', price: 119, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817851811_054700f9.webp', rating: 4.5, reviews: 178, category: 'Accessories' },
  { id: 9, name: 'Floral Fragrance', price: 79, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817861259_d801894f.webp', rating: 4.4, reviews: 145, category: 'Fragrance' },
  { id: 10, name: 'Pearl Earrings', price: 159, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817870298_4bab6938.webp', rating: 4.8, reviews: 92, category: 'Jewelry' },
  { id: 11, name: 'Sport Watch', price: 179, originalPrice: 229, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817836242_c88256f3.webp', rating: 4.6, reviews: 167, category: 'Watches' },
  { id: 12, name: 'Evening Clutch', price: 99, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817844897_e5d866bf.webp', rating: 4.5, reviews: 78, category: 'Bags' },
  { id: 13, name: 'Round Sunglasses', price: 89, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817853521_42890c9b.webp', rating: 4.3, reviews: 124, category: 'Accessories' },
  { id: 14, name: 'Woody Cologne', price: 109, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817863005_da222a63.webp', rating: 4.7, reviews: 156, category: 'Fragrance' },
  { id: 15, name: 'Diamond Ring', price: 599, originalPrice: 799, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817872131_a3aead10.webp', rating: 4.9, reviews: 45, category: 'Jewelry' },
  { id: 16, name: 'Vintage Watch', price: 449, image: 'https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817838060_9f618edb.webp', rating: 4.8, reviews: 89, category: 'Watches' }
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
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">LuxeStore</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <User size={24} />
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-600 hover:text-gray-900"
              >
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

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/68d56dfd76de577fdbec85c4_1758817828511_1840787e.webp"
            alt="Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h2 className="text-5xl font-bold mb-4">Luxury Collection</h2>
            <p className="text-xl mb-8">Discover premium products crafted for excellence</p>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar 
          onSearch={setSearchQuery}
          onFilter={setFilters}
          categories={categories}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </div>
  );
};

export default AppLayout;