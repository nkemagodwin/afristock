"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Cashew", href: "/products/cashew" },
      { name: "Cocoa", href: "/products/cocoa" },
      { name: "Ginger", href: "/products/ginger" },
      { name: "Groundnuts", href: "/products/groundnuts" },
      { name: "Leather", href: "/products/leather" },
      { name: "Sesame", href: "/products/sesame" },
      { name: "Shea Nuts", href: "/products/shea-nuts" },
      { name: "Soyabeans", href: "/products/soyabeans" },
    ],
  },
  { name: "Food Safety", href: "/food-safety" },
  { name: "Blog", href: "/blog" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+2348167513610" className="text-sm hover:text-primary transition-colors">
                +234 8167513610
              </a>
            </div>
            <div className="hidden md:block">
              <Link href="/" className="text-xl font-bold text-white">
                AFRI ~ STOCK
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:info@afristock.com" className="text-sm hover:text-primary transition-colors">
                info@afristock.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AS</span>
              </div>
              <span className="hidden sm:block font-semibold text-foreground">AFRI ~ STOCK</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.children && (
                    <div
                      className={`absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-48 transition-all ${
                        openDropdown === item.name ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full py-2 text-foreground font-medium"
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openDropdown === item.name && (
                        <div className="pl-4 border-l-2 border-primary ml-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block py-2 text-sm text-muted-foreground hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-foreground font-medium hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
