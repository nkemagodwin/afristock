import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowLeft, Package, Globe, Award, Truck } from "lucide-react"

const products: Record<string, {
  title: string
  heroImage: string
  description: string
  longDescription: string
  specifications: { label: string; value: string }[]
  benefits: string[]
  applications: string[]
}> = {
  cashew: {
    title: "Cashew",
    heroImage: "https://images.unsplash.com/photo-1563292738-3eeff5f4f136?w=1920&h=600&fit=crop",
    description: "Premium quality raw cashew nuts sourced directly from Nigerian farms.",
    longDescription: "Nigerian cashew nuts are renowned worldwide for their large size, excellent taste, and high nutritional value. Our cashews are sourced directly from farms across the northern and central regions of Nigeria, where the climate and soil conditions produce some of the finest cashew nuts in West Africa. We offer both raw cashew nuts (RCN) and processed cashew kernels to meet various industrial and consumer needs.",
    specifications: [
      { label: "Origin", value: "Nigeria (Kogi, Kwara, Nassarawa States)" },
      { label: "Grade", value: "W180, W210, W240, W320, W450" },
      { label: "Moisture Content", value: "Max 10%" },
      { label: "Nut Count", value: "170-210 nuts per kg" },
      { label: "Packaging", value: "50kg/80kg Jute Bags" },
      { label: "Minimum Order", value: "20 MT (FCL)" },
    ],
    benefits: [
      "High oil content and excellent taste",
      "Large kernel size",
      "Low aflatoxin levels",
      "Consistent quality year-round",
    ],
    applications: [
      "Confectionery and snack food industry",
      "Cashew butter production",
      "Cashew oil extraction",
      "Direct consumption (roasted/salted)",
    ],
  },
  cocoa: {
    title: "Cocoa",
    heroImage: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1920&h=600&fit=crop",
    description: "High-grade cocoa beans with rich aroma and superior chocolate-making properties.",
    longDescription: "Nigerian cocoa is celebrated for its distinctive flavor profile and excellent fermentation quality. Our cocoa beans are sourced from the cocoa belt of southwestern Nigeria, where traditional farming methods combined with modern post-harvest practices ensure premium quality. We supply both fermented and sun-dried cocoa beans that meet international standards for chocolate manufacturing.",
    specifications: [
      { label: "Origin", value: "Nigeria (Ondo, Cross River, Osun States)" },
      { label: "Grade", value: "Grade 1 (Premium), Grade 2" },
      { label: "Bean Count", value: "90-100 beans per 100g" },
      { label: "Moisture Content", value: "Max 7.5%" },
      { label: "Packaging", value: "65kg Jute Bags" },
      { label: "Minimum Order", value: "18 MT (FCL)" },
    ],
    benefits: [
      "Rich chocolate flavor profile",
      "Excellent fermentation quality",
      "Low shell content",
      "High butter content",
    ],
    applications: [
      "Chocolate manufacturing",
      "Cocoa powder production",
      "Cocoa butter extraction",
      "Beverage industry",
    ],
  },
  ginger: {
    title: "Ginger",
    heroImage: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=1920&h=600&fit=crop",
    description: "Nigerian ginger renowned for its high oil content, pungency, and medicinal properties.",
    longDescription: "Nigerian ginger, particularly the Tafin Giwa and Yatsun Biri varieties, is highly prized in international markets for its exceptional pungency and high oleoresin content. Grown primarily in Kaduna State, our ginger undergoes careful processing to preserve its essential oils and active compounds. We offer both fresh ginger and dried split ginger to meet various industrial requirements.",
    specifications: [
      { label: "Origin", value: "Nigeria (Kaduna State)" },
      { label: "Variety", value: "Tafin Giwa, Yatsun Biri" },
      { label: "Form", value: "Dried Split, Fresh" },
      { label: "Moisture Content", value: "Max 12%" },
      { label: "Packaging", value: "25kg/50kg PP Bags" },
      { label: "Minimum Order", value: "20 MT (FCL)" },
    ],
    benefits: [
      "High oleoresin content (6-8%)",
      "Strong pungency",
      "Excellent aroma",
      "Long shelf life",
    ],
    applications: [
      "Spice and seasoning industry",
      "Pharmaceutical industry",
      "Essential oil extraction",
      "Beverage manufacturing",
    ],
  },
  groundnuts: {
    title: "Groundnuts",
    heroImage: "https://images.unsplash.com/photo-1567892320421-1c657571ea4a?w=1920&h=600&fit=crop",
    description: "Nutritious groundnuts perfect for oil extraction, confectionery, and direct consumption.",
    longDescription: "Nigerian groundnuts are among the finest in Africa, known for their high oil content and excellent taste. Our groundnuts are sourced from the northern regions of Nigeria where the semi-arid climate produces nuts with superior quality. We offer various grades suitable for oil extraction, confectionery, and direct consumption markets.",
    specifications: [
      { label: "Origin", value: "Nigeria (Kano, Jigawa, Kaduna States)" },
      { label: "Variety", value: "Java, Runner, Virginia" },
      { label: "Oil Content", value: "45-50%" },
      { label: "Moisture Content", value: "Max 8%" },
      { label: "Packaging", value: "50kg PP Bags" },
      { label: "Minimum Order", value: "20 MT (FCL)" },
    ],
    benefits: [
      "High oil content",
      "Sweet natural flavor",
      "Low aflatoxin levels",
      "Uniform kernel size",
    ],
    applications: [
      "Groundnut oil production",
      "Peanut butter manufacturing",
      "Confectionery industry",
      "Animal feed production",
    ],
  },
  sesame: {
    title: "Sesame",
    heroImage: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=1920&h=600&fit=crop",
    description: "High-quality sesame seeds with excellent oil content for food and cosmetic industries.",
    longDescription: "Nigerian sesame seeds are globally recognized for their high oil content and purity. Our sesame comes from the northern savannah regions where optimal growing conditions produce seeds with exceptional quality. We supply both hulled and natural sesame seeds in white, brown, and black varieties to serve diverse market needs.",
    specifications: [
      { label: "Origin", value: "Nigeria (Nassarawa, Benue, Jigawa States)" },
      { label: "Variety", value: "White, Brown, Black" },
      { label: "Oil Content", value: "48-52%" },
      { label: "Purity", value: "99.5% min" },
      { label: "Packaging", value: "25kg/50kg PP Bags" },
      { label: "Minimum Order", value: "20 MT (FCL)" },
    ],
    benefits: [
      "High oil content",
      "Excellent purity levels",
      "Low FFA content",
      "Consistent quality",
    ],
    applications: [
      "Sesame oil production",
      "Tahini manufacturing",
      "Bakery industry",
      "Cosmetic industry",
    ],
  },
  "shea-nuts": {
    title: "Shea Nuts",
    heroImage: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=1920&h=600&fit=crop",
    description: "Premium shea nuts for production of shea butter used in cosmetics and food processing.",
    longDescription: "Nigerian shea nuts are harvested from wild shea trees in the savannah belt, producing some of the highest quality shea butter in the world. Our shea nuts are carefully selected and processed to ensure maximum butter yield and quality. We supply both raw shea nuts and processed shea butter for cosmetic and food industries.",
    specifications: [
      { label: "Origin", value: "Nigeria (Niger, Kwara, Kebbi States)" },
      { label: "Kernel Content", value: "42-50%" },
      { label: "FFA Content", value: "Max 3%" },
      { label: "Moisture Content", value: "Max 7%" },
      { label: "Packaging", value: "50kg Jute Bags" },
      { label: "Minimum Order", value: "20 MT (FCL)" },
    ],
    benefits: [
      "High butter yield",
      "Low free fatty acid",
      "Excellent skin benefits",
      "Sustainable sourcing",
    ],
    applications: [
      "Cosmetic industry",
      "Chocolate manufacturing",
      "Pharmaceutical industry",
      "Personal care products",
    ],
  },
  soyabeans: {
    title: "Soyabeans",
    heroImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1920&h=600&fit=crop",
    description: "High-protein soyabeans suitable for oil extraction, animal feed, and food processing.",
    longDescription: "Nigerian soyabeans are cultivated in the middle belt region where favorable conditions produce beans with high protein and oil content. Our soyabeans meet international standards for various industrial applications including oil extraction, animal feed production, and food processing. We ensure consistent quality through rigorous testing and grading.",
    specifications: [
      { label: "Origin", value: "Nigeria (Benue, Kaduna, Niger States)" },
      { label: "Protein Content", value: "35-40%" },
      { label: "Oil Content", value: "18-20%" },
      { label: "Moisture Content", value: "Max 13%" },
      { label: "Packaging", value: "50kg PP Bags" },
      { label: "Minimum Order", value: "20 MT (FCL)" },
    ],
    benefits: [
      "High protein content",
      "Good oil yield",
      "Non-GMO",
      "Consistent quality",
    ],
    applications: [
      "Soybean oil production",
      "Animal feed manufacturing",
      "Soy flour production",
      "Food processing industry",
    ],
  },
  leather: {
    title: "Leather",
    heroImage: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=1920&h=600&fit=crop",
    description: "Quality Nigerian leather products sourced from sustainable and ethical practices.",
    longDescription: "Nigerian leather, particularly from the northern regions, is known for its distinctive quality and durability. Our leather products are sourced from cattle, goat, and sheep hides processed using both traditional and modern tanning methods. We supply wet blue, crust, and finished leather for various manufacturing applications.",
    specifications: [
      { label: "Origin", value: "Nigeria (Kano, Sokoto, Katsina States)" },
      { label: "Types", value: "Cow, Goat, Sheep" },
      { label: "Processing", value: "Wet Blue, Crust, Finished" },
      { label: "Size", value: "Various (per piece)" },
      { label: "Packaging", value: "Bundled/Palletized" },
      { label: "Minimum Order", value: "1 x 40ft FCL" },
    ],
    benefits: [
      "High durability",
      "Fine grain structure",
      "Ethical sourcing",
      "Various finishes available",
    ],
    applications: [
      "Footwear manufacturing",
      "Leather goods production",
      "Furniture industry",
      "Fashion accessories",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products[slug]
  
  if (!product) {
    return {
      title: "Product Not Found | AFRI ~ STOCK",
    }
  }

  return {
    title: `${product.title} | AFRI ~ STOCK`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products[slug]

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0">
          <Image
            src={product.heroImage}
            alt={product.title}
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/products" 
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{product.title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl">{product.description}</p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Overview</span>
              <h2 className="text-3xl font-bold text-foreground mt-3 mb-6">About Our {product.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{product.longDescription}</p>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Benefits</h3>
              <ul className="space-y-3 mb-8">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>

            <div>
              <div className="bg-muted/50 p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Product Specifications</h3>
                <div className="space-y-4">
                  {product.specifications.map((spec) => (
                    <div key={spec.label} className="flex justify-between py-3 border-b border-border last:border-0">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-medium text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-foreground mb-6">Applications</h3>
                <ul className="space-y-3">
                  {product.applications.map((app) => (
                    <li key={app} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">Why Choose AFRI ~ STOCK</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quality Assured</h3>
              <p className="text-muted-foreground text-sm">ISO certified quality control</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Global Export</h3>
              <p className="text-muted-foreground text-sm">Shipping to 100+ countries</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Custom Packaging</h3>
              <p className="text-muted-foreground text-sm">Tailored to your needs</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm">Efficient logistics network</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
