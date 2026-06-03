import Image from "next/image"
import Link from "next/link"

const products = [
  {
    title: "Cashew",
    image: "https://6a1f529266b5d7d9ebc65abc.imgix.net/images/cashew.png",
    href: "/products/cashew",
  },
  {
    title: "Soyabeans",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop",
    href: "/products/soyabeans",
  },
  {
    title: "Groundnuts",
    image: "https://6a1f529266b5d7d9ebc65abc.imgix.net/images/download.jpg",
    href: "/products/groundnuts",
  },
  {
    title: "Leather",
    image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=300&h=300&fit=crop",
    href: "/products/leather",
  },
  {
    title: "Sesame",
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=300&h=300&fit=crop",
    href: "/products/sesame",
  },
  {
    title: "Shea Nuts",
    image: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=300&h=300&fit=crop",
    href: "/products/shea-nuts",
  },
  {
    title: "Cocoa",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=300&h=300&fit=crop",
    href: "/products/cocoa",
  },
  {
    title: "Ginger",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300&h=300&fit=crop",
    href: "/products/ginger",
  },
]

export function Products() {
  return (
    <section 
      className="py-20 bg-muted relative"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2349a760' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Healthy & Organic Products</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            Nestled in the fertile lands of Nigeria, our farm-to-export approach ensures that every product undergoes rigorous quality control measures at every stage of production. Our state-of-the-art facilities and adherence to best agricultural practices guarantee the preservation of natural flavors, textures, and nutritional values in our products.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
