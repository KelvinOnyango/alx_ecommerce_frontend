// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Element } from "react-scroll";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Collections from "../components/Collections";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

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
      <Header
        isScrolled={isScrolled}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <Element name="hero">
        <HeroSection />
      </Element>

      <Element name="featured">
        <FeaturedProducts />
      </Element>

      <Element name="collections">
        <Collections />
      </Element>

      <Element name="categories">
        <Categories />
      </Element>

      <Element name="testimonials">
        <Testimonials />
      </Element>

      <Newsletter />
      <Footer />
    </div>
  );
}
