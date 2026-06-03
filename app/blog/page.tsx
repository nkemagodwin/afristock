import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { User, MessageCircle, Calendar, ArrowRight, Search } from "lucide-react"

export const metadata = {
  title: "Blog | AFRI ~ STOCK",
  description: "Latest news, insights, and updates from AFRI ~ STOCK about Nigerian agricultural exports.",
}

const blogPosts = [
  {
    title: "The Strategic Value of Nigerian Cassiterite in Global Markets",
    excerpt: "Exploring the growing demand for Nigerian cassiterite and its role in global electronics manufacturing supply chains.",
    image: "https://6a1f529266b5d7d9ebc65abc.imgix.net/images/cassiterite.png",
    author: "Admin",
    date: "Apr 24, 2026",
    comments: 0,
    slug: "cassiterite-global-markets",
    category: "Market Analysis",
  },
  {
    title: "The Role of Nigerian Palm Oil in Global Food Processing",
    excerpt: "How Nigerian palm oil is meeting international standards and finding new markets in food processing industries.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&h=500&fit=crop",
    author: "Admin",
    date: "Apr 24, 2026",
    comments: 0,
    slug: "palm-oil-processing",
    category: "Industry News",
  },
  {
    title: "Sourcing Spodumene Concentrates for International Chemical Plants",
    excerpt: "A comprehensive guide to sourcing quality spodumene concentrates from Nigeria for chemical manufacturing.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    author: "Admin",
    date: "Apr 24, 2026",
    comments: 0,
    slug: "spodumene-concentrates",
    category: "Sourcing Guide",
  },
  {
    title: "Nigerian Ginger: Meeting Global Quality Standards",
    excerpt: "How Nigerian ginger producers are adapting to meet increasingly stringent international quality requirements.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&h=500&fit=crop",
    author: "Admin",
    date: "Apr 20, 2026",
    comments: 2,
    slug: "ginger-quality-standards",
    category: "Quality Standards",
  },
  {
    title: "Sustainable Farming Practices in Nigerian Cashew Production",
    excerpt: "Examining the shift towards sustainable farming practices in Nigeria&apos;s cashew industry.",
    image: "https://6a1f529266b5d7d9ebc65abc.imgix.net/images/cashew.png",
    author: "Admin",
    date: "Apr 15, 2026",
    comments: 5,
    slug: "sustainable-cashew-farming",
    category: "Sustainability",
  },
  {
    title: "Export Documentation: A Complete Guide for Nigerian Agro-Exports",
    excerpt: "Everything you need to know about export documentation requirements for Nigerian agricultural products.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
    author: "Admin",
    date: "Apr 10, 2026",
    comments: 8,
    slug: "export-documentation-guide",
    category: "Export Guide",
  },
]

const categories = [
  "All Posts",
  "Market Analysis",
  "Industry News",
  "Sourcing Guide",
  "Quality Standards",
  "Sustainability",
  "Export Guide",
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=600&fit=crop"
            alt="Blog"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Blog</h1>
            <p className="text-gray-300 text-lg">
              Latest news, insights, and updates from the world of Nigerian agricultural exports.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            {post.comments}
                          </span>
                        </div>
                        <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center text-primary font-medium text-sm">
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-12">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button size="sm" className="bg-primary text-white">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
                <h3 className="font-semibold text-foreground mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full h-10 pl-4 pr-10 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
                <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="font-semibold text-foreground mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <li key={post.slug}>
                      <Link href={`/blog/${post.slug}`} className="flex gap-3 group">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
