"use client";

import { Element } from "react-scroll";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Johnson",
      rating: 5,
      comment:
        "The quality exceeded my expectations. Fast shipping and excellent customer service!",
    },
    {
      id: 2,
      name: "Sarah Miller",
      rating: 5,
      comment:
        "Absolutely love my purchase. Will definitely be buying from Nexus again.",
    },
    {
      id: 3,
      name: "Michael Chen",
      rating: 5,
      comment: "Perfect fit and amazing quality. Highly recommend this store!",
    },
  ];

  return (
    <section className="relative z-10 py-20 bg-black border-t border-gray-800">
      <Element name="testimonials">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center uppercase tracking-wider">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-amber-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-amber-500 font-bold">
                    {testimonial.id}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">
                      {testimonial.name}
                    </h4>
                    <div className="flex text-amber-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 italic">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
}
