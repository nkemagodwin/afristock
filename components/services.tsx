import Image from "next/image"
import Link from "next/link"
import { Leaf, Sprout, Wheat, TreeDeciduous } from "lucide-react"

const services = [
  {
    title: "Cashew",
    description: "Indulge in the exquisite taste of our premium Cashew nuts, sourced from the heart of Nigeria's orchards.",
    image: "https://6a1f529266b5d7d9ebc65abc.imgix.net/images/cashew.png",
    icon: TreeDeciduous,
    href: "/products/cashew",
  },
  {
    title: "Cocoa",
    description: "Indulge in the luscious essence of our Cocoa, harvested from sun-kissed plantations.",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=300&fit=crop",
    icon: Leaf,
    href: "/products/cocoa",
  },
  {
    title: "Ginger",
    description: "Nigeria's vibrant Ginger: Spice up your cuisine with our flavorful essence, a touch of warmth in every bite.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=300&fit=crop",
    icon: Sprout,
    href: "/products/ginger",
  },
  {
    title: "Shea Nuts",
    description: "Discover the essence of purity with our Shea Nuts sourced directly from the rich fields of Nigeria.",
    image: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=400&h=300&fit=crop",
    icon: Wheat,
    href: "/products/shea-nuts",
  },
]

export function Services() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative leaf */}
      <div className="absolute top-10 right-0 w-40 h-40 opacity-10">
        <Leaf className="w-full h-full text-primary" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">What we do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">From Fields to Markets</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            Sourcing directly from local farms, we pride ourselves on supplying ethically sourced Shea Nuts, Soybeans, and a range of other agricultural products, fostering a sustainable agro-export ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <service.icon className="w-5 h-5" />
                  <span>{service.title}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
