"use client";

import { Element } from "react-scroll";

export default function Categories() {
  const categories = ['Electronics', 'Apparel', 'Home', 'Accessories', 'Beauty', 'Sports', 'Toys', 'Books'];
  
  return (
    <section className="relative z-10 py-20 bg-gray-900 border-t border-gray-800">
      <Element name="categories">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center uppercase tracking-wider">
            Shop By Category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div key={category} className="group relative overflow-hidden rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-amber-500 h-40 flex items-center justify-center">
                <h3 className="text-lg font-medium text-gray-300 group-hover:text-amber-500 transition-colors uppercase tracking-wider">
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
}