import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity?: number) => void;
  onToggleWishlist: (id: number) => void;
  onQuickView: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  isWishlisted,
}) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden relative group">
      {/* Discount Badge */}
      {discount > 0 && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
          -{discount}%
        </span>
      )}

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        onClick={() => onQuickView(product)}
      />

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-gray-800 font-semibold text-lg">{product.name}</h3>
        <div className="flex items-center mt-2">
          <span className="text-gray-900 font-bold text-lg">${product.price}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-gray-500 line-through text-sm ml-2">${product.originalPrice}</span>
          )}
        </div>
        <div className="mt-2 flex justify-between items-center">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold text-sm"
          >
            Add to Cart
          </button>
          <button
            onClick={() => onToggleWishlist(product.id)}
            className={`text-sm ${isWishlisted ? 'text-red-500' : 'text-gray-400'}`}
          >
            {isWishlisted ? '♥' : '♡'}
          </button>
        </div>
      </div>
    </div>
  );
};
