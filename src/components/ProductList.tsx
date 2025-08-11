/* eslint-disable @typescript-eslint/no-explicit-any */
// components/ProductList.tsx
"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productsSlice";
import { addToCart } from "../store/slices/cartSlice";
import { RootState } from "../store";
import Image from "next/image";

export default function ProductList() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  const handleAddToCart = (productId: number) => {
    dispatch(addToCart(productId) as any);
  };

  if (loading)
    return <div className="text-center py-8">Loading products...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(
        (product: {
          id: number;
          name: string;
          category: string;
          price: number;
          image?: string;
        }) => (
          <div
            key={product.id}
            className="group bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-amber-500 transition-all duration-300"
          >
            <div className="h-48 bg-gray-700 flex items-center justify-center relative">
              <Image
                src={product.image || "/images/placeholder-product.jpg"}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-white font-medium mb-1">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{product.category}</p>
              <div className="flex justify-between items-center">
                <span className="text-amber-500 font-bold">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="text-gray-300 hover:text-amber-500 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
