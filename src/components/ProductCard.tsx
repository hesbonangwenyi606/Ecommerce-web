import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: any;
  onAddToCart: (product: any) => void;
  onToggleWishlist: (id: number) => void;
  onQuickView: (product: any) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  isWishlisted
}) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={() => onQuickView(product)}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        
        {/* Price */}
        <div className="mt-2 flex items-center space-x-2">
          {product.originalPrice ? (
            <>
              <span className="text-red-600 font-bold">${product.price}</span>
              <span className="text-gray-400 line-through">${product.originalPrice}</span>
              <span className="text-green-600 text-sm font-semibold">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            </>
          ) : (
            <span className="text-gray-900 font-bold">${product.price}</span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Add to Cart
          </button>
          <button onClick={() => onToggleWishlist(product.id)}>
            <Heart
              size={20}
              className={isWishlisted ? 'text-red-500' : 'text-gray-400'}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
