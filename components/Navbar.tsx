"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/Aboutus" },
  { label: "Services", href: "/Services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Career", href: "/Career" },
  { label: "Packages", href: "/Packages" },
  { label: "Contact us", href: "/ContactUs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent px-0 py-0">
      <div className="w-full flex justify-between items-center px-4 md:px-10 py-4 border-b border-[#D9D9D9]">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 ml-2 md:ml-6">
            <Image
              src="/navbar/image (3).svg"
              alt="Bembex Logo"
              width={130}
              height={50}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <nav className="relative px-6 md:px-10 py-3 flex gap-4 md:gap-8 items-center backdrop-blur-md z-50">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm whitespace-nowrap ${
                  pathname === item.href
                    ? "text-[#002768] font-semibold underline underline-offset-[10px]"
                    : "text-[#999999]"
                } hover:text-[#002768] transition`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop CTA */}
        <Link href="/ContactUs">
          <div className="hidden sm:flex">
            <button
              className="px-5 sm:px-6 py-3 text-white text-sm hover:brightness-110 transition"
              style={{
                borderRadius: "75px",
                border: "1px solid #002768",
                background: "#002768",
                boxShadow: `
                  9.138px -9.138px 9.138px 0px rgba(169, 36, 3, 0.10) inset,
                  -9.138px 9.138px 9.138px 0px rgba(255, 255, 255, 0.10) inset
                `,
                backdropFilter: "blur(9.137930870056152px)",
                WebkitBackdropFilter: "blur(9.137930870056152px)",
              }}
            >
              Get a Quote →
            </button>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="block lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white border border-[#002768] rounded-full px-4 py-2 text-sm"
          >
            {menuOpen ? "✕ Close" : "☰ Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#002768] backdrop-blur-md px-4 py-6 flex flex-col gap-4 z-40 lg:hidden shadow-lg border-t border-white/20">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base ${
                pathname === item.href
                  ? "text-white font-semibold underline underline-offset-4"
                  : "text-white/80"
              } hover:text-white transition`}
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link href="/ContactUs">
            <button
              className="px-6 py-3 text-white text-sm font-medium transition"
              style={{
                borderRadius: "75px",
                border: "1px solid #002768",
                background: "#002768",
                boxShadow: `
                  9.138px -9.138px 9.138px 0px rgba(169, 36, 3, 0.10) inset,
                  -9.138px 9.138px 9.138px 0px rgba(255, 255, 255, 0.10) inset
                `,
                backdropFilter: "blur(9.137930870056152px)",
                WebkitBackdropFilter: "blur(9.137930870056152px)",
              }}
            >
              Book a call →
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
