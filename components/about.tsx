import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function About() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Organic Agro<br />Supplier in Nigeria
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our commitment to excellence is evident in our extensive range of agricultural offerings. From the rich, flavorful Cocoa and the aromatic Ginger to the nutrient-packed Groundnuts and the versatile Sesame seeds, each product is carefully cultivated and harvested to meet stringent international standards.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">Best Quality Standards</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">Natural Healthy Products</span>
              </li>
            </ul>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/products">Discover More</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="lg:col-span-1">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=600&h=800&fit=crop"
                alt="Organic Cocoa supplier Nigeria"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">250</span>
                  <span className="text-2xl font-bold text-primary">M</span>
                </div>
                <p className="text-muted-foreground mt-2">Nigerian Exports in Tons</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">100</span>
                  <span className="text-2xl font-bold text-primary">+</span>
                </div>
                <p className="text-muted-foreground mt-2">Export Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
