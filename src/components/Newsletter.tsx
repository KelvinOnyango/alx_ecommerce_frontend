"use client";

export default function Newsletter() {
  return (
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
  );
}
