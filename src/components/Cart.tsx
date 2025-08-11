/* eslint-disable @typescript-eslint/no-explicit-any */
// components/Cart.tsx
"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  fetchCart,
  updateCartItem,
  removeFromCart,
} from "../store/slices/cartSlice";
import { CartItem } from "../store/slices/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state: RootState) => state.cart);
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(fetchCart() as any);
    }
  }, [dispatch, token]);

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateCartItem(productId, newQuantity) as any);
    } else {
      dispatch(removeFromCart(productId) as any);
    }
  };

  const handleRemoveItem = (productId: number) => {
    dispatch(removeFromCart(productId) as any);
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <h3 className="text-xl font-bold text-white mb-4">Your Cart</h3>
      {loading ? (
        <p>Loading cart...</p>
      ) : items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item: CartItem) => (
            <li
              key={item.product}
              className="flex justify-between items-center"
            >
              <div>
                <h4 className="text-white">
                  {item.details?.name || `Product ${item.product}`}
                </h4>
                <p className="text-amber-500">
                  ${item.details?.price?.toFixed(2) || "0.00"}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    handleUpdateQuantity(item.product, item.quantity - 1)
                  }
                  className="text-gray-400 hover:text-white"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    handleUpdateQuantity(item.product, item.quantity + 1)
                  }
                  className="text-gray-400 hover:text-white"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(item.product)}
                  className="text-red-500 hover:text-red-400"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
