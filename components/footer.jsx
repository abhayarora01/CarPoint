import Link from "next/link";
import Image from "next/image";
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/AutoSenseAi.png"
              alt="AutoSense AI"
              width={180}
              height={50}
              className="h-10 w-auto object-contain brightness-200"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              India's smartest AI-powered car marketplace. Find, compare, and book test drives for your dream car — all in one place.
            </p>
            <div className="flex gap-3 pt-1">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition"><Facebook size={16} /></a>
              <a href="#" className="bg-gray-800 hover:bg-blue-400 p-2 rounded-full transition"><Twitter size={16} /></a>
              <a href="#" className="bg-gray-800 hover:bg-pink-500 p-2 rounded-full transition"><Instagram size={16} /></a>
              <a href="#" className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition"><Linkedin size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Browse Cars", href: "/cars" },
                { label: "AI Image Search", href: "/cars" },
                { label: "Book Test Drive", href: "/cars" },
                { label: "Saved Cars", href: "/saved-cars" },
                { label: "My Reservations", href: "/reservations" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-blue-400 transition flex items-center gap-1">
                    <span className="text-blue-500">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Browse By */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Browse By</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "SUV", href: "/cars?bodyType=SUV" },
                { label: "Sedan", href: "/cars?bodyType=Sedan" },
                { label: "Hatchback", href: "/cars?bodyType=Hatchback" },
                { label: "Electric Cars", href: "/cars?fuelType=Electric" },
                { label: "Automatic", href: "/cars?transmission=Automatic" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-blue-400 transition flex items-center gap-1">
                    <span className="text-blue-500">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <span className="text-gray-400">Main Bazaar, Hassanpur, 121107, Haryana, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-400 shrink-0" />
                <a href="tel:+919306868354" className="hover:text-blue-400 transition">+91 93068 68354</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-400 shrink-0" />
                <a href="mailto:harsh24042008@gmail.com" className="hover:text-blue-400 transition">harsh24042008@gmail.com</a>
              </li>
            </ul>

            <div className="bg-gray-800 rounded-lg p-3 mt-4">
              <div className="flex items-center gap-2 mb-1">
                <Car size={16} className="text-blue-400" />
                <span className="text-white text-sm font-medium">AI-Powered Search</span>
              </div>
              <p className="text-xs text-gray-400">Upload a car image and let our AI find the best matches for you.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AutoSense AI. All rights reserved.</p>
          <p>Developed with ❤️ by <span className="text-blue-400">Abhay Arora</span></p>
        </div>
      </div>
    </footer>
  );
}
