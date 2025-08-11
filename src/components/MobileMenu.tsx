// components/MobileMenu.tsx
"use client";

import { FiX, FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Link as LinkScroll } from "react-scroll";

interface MobileMenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function MobileMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed inset-0 bg-gray-900 z-50 p-4 border-l border-gray-800"
        >
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              NEXUS
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-800 transition"
            >
              <FiX className="text-gray-400 hover:text-amber-500 transition" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <LinkScroll
              to="featured"
              spy={true}
              smooth={true}
              offset={-100}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-400 hover:text-amber-500 transition uppercase tracking-wider"
            >
              Featured
            </LinkScroll>
            <LinkScroll
              to="collections"
              spy={true}
              smooth={true}
              offset={-100}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-400 hover:text-amber-500 transition uppercase tracking-wider"
            >
              Collections
            </LinkScroll>
            <LinkScroll
              to="categories"
              spy={true}
              smooth={true}
              offset={-100}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-400 hover:text-amber-500 transition uppercase tracking-wider"
            >
              Categories
            </LinkScroll>
            <LinkScroll
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-100}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-400 hover:text-amber-500 transition uppercase tracking-wider"
            >
              Testimonials
            </LinkScroll>
            <div className="pt-6 border-t border-gray-800">
              <div className="flex space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-800 transition">
                  <FiUser className="text-gray-400 hover:text-amber-500 transition" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-800 transition relative">
                  <FiHeart className="text-gray-400 hover:text-amber-500 transition" />
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-gray-900 text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    3
                  </span>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-800 transition relative">
                  <FiShoppingCart className="text-gray-400 hover:text-amber-500 transition" />
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-gray-900 text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    5
                  </span>
                </button>
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
