import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Users, Globe, Award, TrendingUp } from "lucide-react"

export const metadata = {
  title: "About Us | AFRI ~ STOCK",
  description: "Learn about AFRI ~ STOCK, your trusted partner in premium Nigerian agricultural exports.",
}

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We maintain the highest standards in agricultural product quality and handling.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Exporting to over 100 countries with established logistics networks worldwide.",
  },
  {
    icon: Users,
    title: "Farmer Partnership",
    description: "Working directly with local farmers to ensure fair practices and sustainable sourcing.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Expanding our operations while maintaining our commitment to quality.",
  },
]

const team = [
  {
    name: "Adamu Bello",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
  },
  {
    name: "Chioma Okafor",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
  },
  {
    name: "Ibrahim Musa",
    role: "Export Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
  },
  {
    name: "Amina Yusuf",
    role: "Quality Assurance Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=600&fit=crop"
            alt="Nigerian farmland"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About AFRI ~ STOCK</h1>
            <p className="text-gray-300 text-lg">
              Your trusted partner in premium Nigerian agricultural exports since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Bridging Nigerian Agriculture to Global Markets
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2015, AFRI ~ STOCK emerged from a vision to showcase the exceptional quality of Nigerian agricultural products to the world. What started as a small export operation has grown into one of Nigeria&apos;s leading agro-export companies.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our commitment to excellence is evident in our extensive range of agricultural offerings. From the rich, flavorful Cocoa and the aromatic Ginger to the nutrient-packed Groundnuts and the versatile Sesame seeds, each product is carefully cultivated and harvested to meet stringent international standards.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">ISO 22000 Certified Operations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Direct Farmer Partnerships</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">Sustainable Sourcing Practices</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c8e82?w=800&h=1000&fit=crop"
                alt="Agricultural warehouse"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">250M+</div>
              <p className="text-white/80">Tons Exported</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100+</div>
              <p className="text-white/80">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5000+</div>
              <p className="text-white/80">Farmer Partners</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
              <p className="text-white/80">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">What Drives Us</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Meet the Experts</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust AFRI ~ STOCK for their agricultural export needs.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
