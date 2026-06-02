import Image from "next/image"
import Link from "next/link"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=400&fit=crop",
    alt: "Agricultural products supplier",
    href: "/blog/agriculture-trends",
  },
  {
    src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=400&fit=crop",
    alt: "Fertile lands of Nigeria",
    href: "/blog/nigerian-farming",
  },
  {
    src: "https://images.unsplash.com/photo-1595508064774-5ff825ff0f81?w=400&h=400&fit=crop",
    alt: "Global Trade Nigeria",
    href: "/blog/global-trade",
  },
]

export function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Harvesting Excellence</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Supplying Premium{" "}
            <Link href="/about" className="text-primary hover:underline">
              Agricultural Products
            </Link>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            Unlock new markets, and savor the finest selection of Cashew, Cocoa, Ginger, Groundnuts, Leather, Sesame, Shea Nuts, and Soybeans.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {galleryImages.map((image, index) => (
            <Link
              key={index}
              href={image.href}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
