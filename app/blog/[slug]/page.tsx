import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { User, Calendar, MessageCircle, ArrowLeft, Facebook, Twitter, Linkedin, Share2 } from "lucide-react"

const blogPosts: Record<string, {
  title: string
  excerpt: string
  content: string[]
  image: string
  author: string
  date: string
  comments: number
  category: string
}> = {
  "cassiterite-global-markets": {
    title: "The Strategic Value of Nigerian Cassiterite in Global Markets",
    excerpt: "Exploring the growing demand for Nigerian cassiterite and its role in global electronics manufacturing supply chains.",
    content: [
      "Nigeria has emerged as a significant player in the global cassiterite market, with its rich mineral deposits attracting increasing attention from international buyers. As the primary ore for tin production, cassiterite plays a crucial role in various industries, particularly electronics manufacturing.",
      "The growing demand for tin in solder alloys, particularly for lead-free electronics, has positioned Nigerian cassiterite as a valuable commodity. With strict environmental regulations driving the shift away from lead-based solders, the purity and quality of Nigerian cassiterite make it highly sought after.",
      "Our sourcing network spans the major cassiterite-producing regions of Nigeria, ensuring consistent supply and quality. We work directly with licensed mining operations that adhere to international standards for responsible mineral sourcing.",
      "The strategic importance of Nigerian cassiterite extends beyond electronics. It finds applications in tinplate for food packaging, chemical compounds, and various industrial processes. This diversified demand base provides stability for exporters and buyers alike.",
      "Looking ahead, the continued growth of the electronics industry, particularly in renewable energy technologies and electric vehicles, suggests strong long-term demand for high-quality cassiterite. Nigeria is well-positioned to meet this demand, and AFRI ~ STOCK remains committed to facilitating access to these valuable resources.",
    ],
    image: "https://6a1f529266b5d7d9ebc65abc.imgix.net/images/cassiterite.png",
    author: "Admin",
    date: "Apr 24, 2026",
    comments: 0,
    category: "Market Analysis",
  },
  "palm-oil-processing": {
    title: "The Role of Nigerian Palm Oil in Global Food Processing",
    excerpt: "How Nigerian palm oil is meeting international standards and finding new markets in food processing industries.",
    content: [
      "Nigerian palm oil has a rich history dating back centuries, and today it continues to play a vital role in both domestic consumption and international trade. The country's palm oil industry is undergoing significant transformation to meet global quality standards and sustainability requirements.",
      "Modern food processing industries demand consistent quality and traceable supply chains. Nigerian palm oil producers are increasingly adopting best practices in cultivation, harvesting, and processing to meet these demands. This includes implementing quality control measures at every stage of production.",
      "The versatility of palm oil makes it invaluable in food processing. From cooking oils and margarine to bakery products and confectionery, palm oil's unique properties—including its stability at high temperatures and neutral taste—make it a preferred ingredient for many applications.",
      "Sustainability has become a key focus in the palm oil industry. Nigerian producers are working towards certification standards such as RSPO (Roundtable on Sustainable Palm Oil) to access environmentally conscious markets in Europe and North America.",
      "AFRI ~ STOCK partners with certified palm oil processors who demonstrate commitment to quality and sustainability. We provide comprehensive documentation and traceability to support our clients' compliance requirements in their respective markets.",
    ],
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=1200&h=600&fit=crop",
    author: "Admin",
    date: "Apr 24, 2026",
    comments: 0,
    category: "Industry News",
  },
  "spodumene-concentrates": {
    title: "Sourcing Spodumene Concentrates for International Chemical Plants",
    excerpt: "A comprehensive guide to sourcing quality spodumene concentrates from Nigeria for chemical manufacturing.",
    content: [
      "Spodumene, a lithium-bearing mineral, has gained significant attention as global demand for lithium continues to surge. Nigeria's pegmatite deposits offer promising sources of this critical mineral, essential for lithium-ion batteries and various industrial applications.",
      "The quality specifications for spodumene concentrates vary depending on the end application. Chemical-grade spodumene requires different characteristics than that used for ceramics or glass manufacturing. Understanding these requirements is essential for effective sourcing.",
      "Nigerian spodumene deposits are characterized by favorable geology that produces concentrates suitable for both chemical conversion and direct use applications. Our processing partners employ modern beneficiation techniques to achieve consistent concentrate grades.",
      "Supply chain reliability is crucial for chemical plant operations. We have established logistics networks and storage facilities to ensure consistent supply schedules, minimizing disruption to our clients' production processes.",
      "As the energy transition accelerates, demand for lithium—and consequently spodumene—is projected to grow substantially. AFRI ~ STOCK is positioned to support this growth through strategic partnerships with Nigerian mining operations and processing facilities.",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    author: "Admin",
    date: "Apr 24, 2026",
    comments: 0,
    category: "Sourcing Guide",
  },
  "ginger-quality-standards": {
    title: "Nigerian Ginger: Meeting Global Quality Standards",
    excerpt: "How Nigerian ginger producers are adapting to meet increasingly stringent international quality requirements.",
    content: [
      "Nigerian ginger has long been recognized for its distinctive pungency and high oleoresin content. However, meeting the evolving quality standards of international markets requires continuous improvement in cultivation and processing practices.",
      "Key quality parameters for export ginger include moisture content, essential oil content, fiber content, and absence of contaminants. Nigerian producers are investing in modern drying facilities and storage solutions to meet these specifications consistently.",
      "The split dried ginger format preferred by many international buyers requires careful processing to preserve the ginger's essential compounds while achieving the required moisture levels. Our partners employ controlled drying techniques to optimize quality.",
      "Phytosanitary requirements have become increasingly stringent, particularly in European and American markets. Nigerian ginger exporters are implementing integrated pest management and post-harvest treatment protocols to ensure compliance.",
      "AFRI ~ STOCK works closely with our supplier network to maintain quality standards and provide comprehensive testing documentation. We support our clients with all necessary certifications and laboratory analysis reports.",
    ],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=1200&h=600&fit=crop",
    author: "Admin",
    date: "Apr 20, 2026",
    comments: 2,
    category: "Quality Standards",
  },
  "sustainable-cashew-farming": {
    title: "Sustainable Farming Practices in Nigerian Cashew Production",
    excerpt: "Examining the shift towards sustainable farming practices in Nigeria's cashew industry.",
    content: [
      "The Nigerian cashew industry is embracing sustainable farming practices as international buyers increasingly prioritize environmental and social responsibility in their supply chains. This shift represents both a challenge and an opportunity for the sector.",
      "Sustainable cashew farming encompasses various practices including integrated pest management, water conservation, soil health maintenance, and biodiversity protection. These practices not only benefit the environment but also improve long-term farm productivity.",
      "Fair trade and ethical sourcing considerations are becoming important factors in international cashew trade. Nigerian farmer cooperatives are organizing to achieve certifications that demonstrate their commitment to fair labor practices and community development.",
      "Agroforestry systems that integrate cashew trees with other crops are gaining popularity as farmers recognize the multiple benefits of diversified farming systems. These approaches improve farm resilience while providing additional income streams.",
      "AFRI ~ STOCK supports sustainable development in the Nigerian cashew sector by prioritizing suppliers who demonstrate commitment to responsible farming practices. We help connect these producers with international buyers who share these values.",
    ],
    image: "https://6a1f529266b5d7d9ebc65abc.imgix.net/images/cashew.png",
    author: "Admin",
    date: "Apr 15, 2026",
    comments: 5,
    category: "Sustainability",
  },
  "export-documentation-guide": {
    title: "Export Documentation: A Complete Guide for Nigerian Agro-Exports",
    excerpt: "Everything you need to know about export documentation requirements for Nigerian agricultural products.",
    content: [
      "Proper export documentation is essential for smooth international trade in agricultural products. Understanding and preparing the required documents can mean the difference between successful delivery and costly delays.",
      "Core export documents include the Commercial Invoice, Packing List, Bill of Lading, and Certificate of Origin. Each document serves a specific purpose in the export process and must be prepared accurately to avoid complications.",
      "Agricultural exports require additional documentation including Phytosanitary Certificates from NAQS, Quality Certificates from SON, and product-specific certifications depending on the destination market requirements.",
      "Different destination markets have varying documentation requirements. European Union imports require different certifications than those destined for Asian or American markets. Understanding these specific requirements is crucial for compliance.",
      "AFRI ~ STOCK handles all export documentation for our clients, ensuring full compliance with both Nigerian export regulations and destination country import requirements. Our experienced documentation team manages the entire process from preparation to final verification.",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop",
    author: "Admin",
    date: "Apr 10, 2026",
    comments: 8,
    category: "Export Guide",
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]
  
  if (!post) {
    return {
      title: "Post Not Found | AFRI ~ STOCK",
    }
  }

  return {
    title: `${post.title} | AFRI ~ STOCK Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  const relatedPosts = Object.entries(blogPosts)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, value]) => ({ slug: key, ...value }))

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                {post.comments} Comments
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            <article className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {post.content.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-foreground flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share:
                  </span>
                  <div className="flex gap-2">
                    <a href="#" className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#0A66C2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-muted/30 p-6 rounded-2xl">
                  <h3 className="font-semibold text-foreground mb-4">Related Articles</h3>
                  <ul className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <li key={relatedPost.slug}>
                        <Link href={`/blog/${relatedPost.slug}`} className="group flex gap-3">
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">{relatedPost.date}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
