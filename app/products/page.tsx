import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Our Products | AFRI ~ STOCK",
  description: "Explore our premium Nigerian agricultural exports including Cashew, Cocoa, Ginger, Groundnuts, and more.",
}

const products = [
  {
    title: "Cashew",
    slug: "cashew",
    image: "https://6a1f529266b5d7d9ebc65abc.imgix.net/images/cashew.png",
    description: "Premium quality raw cashew nuts sourced directly from Nigerian farms. Known for their large size and rich flavor.",
  },
  {
    title: "Cocoa",
    slug: "cocoa",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&h=400&fit=crop",
    description: "High-grade cocoa beans with rich aroma and superior chocolate-making properties.",
  },
  {
    title: "Ginger",
    slug: "ginger",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&h=400&fit=crop",
    description: "Nigerian ginger renowned for its high oil content, pungency, and medicinal properties.",
  },
  {
    title: "Groundnuts",
    slug: "groundnuts",
    image: "https://6a1f529266b5d7d9ebc65abc.imgix.net/images/download.jpg",
    description: "Nutritious groundnuts perfect for oil extraction, confectionery, and direct consumption.",
  },
  {
    title: "Sesame",
    slug: "sesame",
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600&h=400&fit=crop",
    description: "High-quality sesame seeds with excellent oil content, ideal for food and cosmetic industries.",
  },
  {
    title: "Shea Nuts",
    slug: "shea-nuts",
    image: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=600&h=400&fit=crop",
    description: "Premium shea nuts for the production of shea butter used in cosmetics and food processing.",
  },
  {
    title: "Soyabeans",
    slug: "soyabeans",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop",
    description: "High-protein soyabeans suitable for oil extraction, animal feed, and food processing.",
  },
  {
    title: "Leather",
    slug: "leather",
    image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=600&h=400&fit=crop",
    description: "Quality Nigerian leather products sourced from sustainable and ethical practices.",
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1920&h=600&fit=crop"
            alt="Agricultural products"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-gray-300 text-lg">
              Premium Nigerian agricultural exports meeting international quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Premium Quality</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Healthy & Organic Products</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground leading-relaxed">
              Our farm-to-export approach ensures that every product undergoes rigorous quality control measures at every stage of production. Our state-of-the-art facilities and adherence to best agricultural practices guarantee the preservation of natural flavors, textures, and nutritional values.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                    {product.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in Our Products?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get a competitive quote for bulk orders.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
