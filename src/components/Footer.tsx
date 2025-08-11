"use client";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export default function Footer() {
  const sections: FooterSection[] = [
    {
      title: "Shop",
      links: [
        { name: "All Products", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Bestsellers", href: "#" },
        { name: "Sale Items", href: "#" }
      ]
    },
    {
      title: "Customer Service",
      links: [
        { name: "Contact Us", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Shipping & Returns", href: "#" },
        { name: "Size Guide", href: "#" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "#" },
        { name: "Sustainability", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" }
      ]
    }
  ];

  const socialLinks = ['FB', 'TW', 'IG', 'YT'];
  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookies'];

  return (
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
              {socialLinks.map((social) => (
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

          {sections.map((section) => (
            <div key={section.title}>
              <h5 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">
                {section.title}
              </h5>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-amber-500 transition text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} NEXUS. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {legalLinks.map((link) => (
                <a key={link} href="#" className="hover:text-amber-500 transition">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}