"use client";

import { Element } from "react-scroll";

export default function Collections() {
  return (
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
  );
}
