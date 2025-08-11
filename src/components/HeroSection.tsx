"use client";

import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative z-10 pt-32 pb-40 max-lg:pt-28 max-lg:pb-36 max-md:pt-24 max-md:pb-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="mt-9 ml-2 max-w-[550px] max-md:max-w-[400px] max-sm:max-w-full max-sm:flex max-sm:items-center max-sm:flex-col">
          <div className="text-sm mb-4 text-amber-500 font-mono tracking-wider">
            🚀 TRENDING IN 15 COUNTRIES • 🏆 AWARD-WINNING SELECTION
          </div>
          <h1 className="mb-2 text-5xl md:text-6xl font-bold text-slate-200 uppercase max-lg:mb-7 max-md:mb-1 max-md:text-4xl max-md:leading-12">
            <span className="max-sm:text-center max-sm:block mr-3">
              ELEVATE YOUR STYLE
            </span>
            <span className="max-sm:text-center max-sm:block">WITH NEXUS</span>
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
          <Image
            src="/images/hero-product.png"
            alt="Premium products"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
