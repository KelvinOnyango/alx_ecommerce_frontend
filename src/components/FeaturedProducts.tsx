"use client";

import { Element } from "react-scroll";
import ProductList from "./ProductList";

export default function FeaturedProducts() {
  return (
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
  );
}
