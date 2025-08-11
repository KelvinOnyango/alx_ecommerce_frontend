"use client";

import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import {
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Element, Link as LinkScroll } from "react-scroll";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => setLoading(false), 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-black">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Dark Theme Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/90 shadow-lg py-2 backdrop-blur-sm"
            : "bg-transparent py-4"
        } border-b border-gray-800`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                NEXUS
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <LinkScroll
                to="featured"
                spy={true}
                smooth={true}
                offset={-100}
                className="font-medium text-gray-400 hover:text-amber-500 transition uppercase text-sm tracking-wider"
              >
                Featured
              </LinkScroll>
              <LinkScroll
                to="collections"
                spy={true}
                smooth={true}
                offset={-100}
                className="font-medium text-gray-400 hover:text-amber-500 transition uppercase text-sm tracking-wider"
              >
                Collections
              </LinkScroll>
              <LinkScroll
                to="categories"
                spy={true}
                smooth={true}
                offset={-100}
                className="font-medium text-gray-400 hover:text-amber-500 transition uppercase text-sm tracking-wider"
              >
                Categories
              </LinkScroll>
              <LinkScroll
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-100}
                className="font-medium text-gray-400 hover:text-amber-500 transition uppercase text-sm tracking-wider"
              >
                Testimonials
              </LinkScroll>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full hover:bg-gray-800 transition"
              >
                <FiSearch className="text-gray-400 hover:text-amber-500 transition" />
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
              <button className="p-2 rounded-full hover:bg-gray-800 transition">
                <FiUser className="text-gray-400 hover:text-amber-500 transition" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-full hover:bg-gray-800 transition"
              >
                <FiMenu className="text-gray-400 hover:text-amber-500 transition" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  <FiSearch className="absolute left-3 top-3.5 text-gray-500" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu */}
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

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-40 max-lg:pt-28 max-lg:pb-36 max-md:pt-24 max-md:pb-32 bg-gradient-to-b from-gray-900 to-black">
        <Element name="hero">
          <div className="container mx-auto px-4">
            <div className="mt-9 ml-2 max-w-[550px] max-md:max-w-[400px] max-sm:max-w-full max-sm:flex max-sm:items-center max-sm:flex-col">
              <div className="text-sm mb-4 text-amber-500 font-mono tracking-wider">
                🚀 TRENDING IN 15 COUNTRIES • 🏆 AWARD-WINNING SELECTION
              </div>
              <h1 className="mb-2 text-5xl md:text-6xl font-bold text-slate-200 uppercase max-lg:mb-7 max-md:mb-1 max-md:text-4xl max-md:leading-12">
                <span className="max-sm:text-center max-sm:block mr-3">
                  ELEVATE YOUR STYLE
                </span>
                <span className="max-sm:text-center max-sm:block">
                  WITH NEXUS
                </span>
              </h1>
              <p className="max-w-440 text-gray-400 mb-7 max-md:mb-3">
                Premium e-commerce experience with curated collections for the
                discerning shopper
              </p>
              <LinkScroll to="featured" offset={-100} spy smooth>
                <button
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 font-medium
                  hover:from-orange-500 hover:to-amber-500
                  transition-all duration-300 ease-in-out
                  px-8 py-3 text-sm shadow-lg
                  hover:scale-105 border border-gray-700 rounded-lg
                  max-sm:mx-auto max-sm:text-xs uppercase tracking-wider"
                >
                  Shop Now
                </button>
              </LinkScroll>
            </div>

            <div className="absolute top-32 right-0 w-[500px] pointer-events-none max-lg:w-[400px] max-md:hidden">
              <img
                src="/images/hero-product.png" // Replace with your product image
                alt="Premium products"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Element>
      </section>

      {/* Featured Products */}
      <section className="relative z-10 py-20 bg-gray-900 border-t border-gray-800">
        <Element name="featured">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase tracking-wider">
                  Featured Products
                </h2>
                <p className="text-gray-400">
                  Handpicked selection of our best items
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-2">
                <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition border border-gray-700 text-sm uppercase tracking-wider">
                  All Categories
                </button>
                <button className="px-4 py-2 bg-amber-500 text-gray-900 font-medium rounded-lg hover:bg-amber-600 transition text-sm uppercase tracking-wider">
                  New Arrivals
                </button>
                <button className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition border border-gray-700 text-sm uppercase tracking-wider">
                  Bestsellers
                </button>
              </div>
            </div>

            <ProductList />
          </div>
        </Element>
      </section>

      {/* Collections */}
      <section className="relative z-10 py-20 bg-black border-t border-gray-800">
        <Element name="collections">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center uppercase tracking-wider">
              Our Collections
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-amber-500 transition-all duration-300"
                >
                  <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-gray-500 group-hover:text-amber-500 transition-colors text-lg uppercase tracking-wider">
                      Collection {item}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Season {item}
                    </h3>
                    <button className="text-amber-500 hover:text-amber-400 text-sm font-medium uppercase tracking-wider">
                      View Collection →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Element>
      </section>

      {/* Categories */}
      <section className="relative z-10 py-20 bg-gray-900 border-t border-gray-800">
        <Element name="categories">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center uppercase tracking-wider">
              Shop By Category
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Electronics",
                "Apparel",
                "Home",
                "Accessories",
                "Beauty",
                "Sports",
                "Toys",
                "Books",
              ].map((category) => (
                <div
                  key={category}
                  className="group relative overflow-hidden rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-amber-500 h-40 flex items-center justify-center"
                >
                  <h3 className="text-lg font-medium text-gray-300 group-hover:text-amber-500 transition-colors uppercase tracking-wider">
                    {category}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </Element>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-20 bg-black border-t border-gray-800">
        <Element name="testimonials">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center uppercase tracking-wider">
              What Our Customers Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((testimonial) => (
                <div
                  key={testimonial}
                  className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-amber-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-amber-500 font-bold">
                      {testimonial}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">
                        Customer {testimonial}
                      </h4>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Element>
      </section>

      {/* Newsletter */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-gray-900 to-black border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-wider">
            Stay Updated
          </h3>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter and get 10% off your first order plus
            exclusive access to new products and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button className="px-6 py-3 bg-amber-500 text-gray-900 font-medium rounded-lg hover:bg-amber-600 transition uppercase tracking-wider text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-4">NEXUS</h4>
              <p className="mb-4">
                Premium e-commerce experience with curated collections for the
                discerning shopper.
              </p>
              <div className="flex space-x-4">
                {["FB", "TW", "IG", "YT"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-500 hover:text-amber-500 transition"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">
                Shop
              </h5>
              <ul className="space-y-2">
                {[
                  "All Products",
                  "New Arrivals",
                  "Bestsellers",
                  "Sale Items",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-amber-500 transition text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">
                Customer Service
              </h5>
              <ul className="space-y-2">
                {["Contact Us", "FAQs", "Shipping & Returns", "Size Guide"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-amber-500 transition text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">
                About
              </h5>
              <ul className="space-y-2">
                {["Our Story", "Sustainability", "Careers", "Press"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-amber-500 transition text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© 2023 NEXUS. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {["Privacy Policy", "Terms of Service", "Cookies"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="hover:text-amber-500 transition"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
