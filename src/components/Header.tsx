// components/Header.tsx
"use client";

import { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiMenu,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link as LinkScroll } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/index";
import { logout } from "../store/slices/authSlice";

export default function Header({
  isScrolled,
  searchOpen,
  setSearchOpen,
  setMobileMenuOpen,
}: {
  isScrolled: boolean;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  const dispatch = useDispatch();
  const { token } = useSelector((state: RootState) => state.auth);
  const { items } = useSelector((state: RootState) => state.cart);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    dispatch(logout());
  };

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 shadow-lg py-2 backdrop-blur-sm"
          : "bg-transparent py-4"
      } border-b border-gray-800`}
    >
      {/* ... existing header content ... */}

      <div className="flex items-center space-x-4">
        {token ? (
          <button
            onClick={handleLogout}
            className="text-gray-400 hover:text-amber-500 transition"
          >
            Logout
          </button>
        ) : (
          <LinkScroll
            to="login"
            spy={true}
            smooth={true}
            offset={-100}
            className="text-gray-400 hover:text-amber-500 transition"
          >
            Login
          </LinkScroll>
        )}
        <button className="p-2 rounded-full hover:bg-gray-800 transition relative">
          <FiShoppingCart className="text-gray-400 hover:text-amber-500 transition" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-amber-500 text-gray-900 text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
