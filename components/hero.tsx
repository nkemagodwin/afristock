"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative `min-h-150` `lg:min-h-175` flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80')`,
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
            Premium Nigerian Agricultural Exports
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
            Quality First: From Nigerian Farms to Global Markets
          </h1>
          <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
            Unlock new markets with AFRI ~ STOCK, your trusted partner in premium Nigerian agricultural exports including Cashew, Shea Nuts, Ginger, Cocoa, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Link href="/products" className="flex items-center gap-2">
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
            >
              <Link href="/about" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">250M</div>
              <div className="text-sm text-white/70">Tons Exported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">100+</div>
              <div className="text-sm text-white/70">Export Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
              <div className="text-sm text-white/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
              <div className="text-sm text-white/70">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
