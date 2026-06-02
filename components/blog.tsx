import Image from "next/image"
import Link from "next/link"
import { User, MessageCircle, Calendar } from "lucide-react"

const blogPosts = [
  {
    title: "The Strategic Value of Nigerian Cassiterite in Global Markets",
    image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=600&h=400&fit=crop",
    author: "Admin",
    date: "Apr 24, 2026",
    comments: 0,
    href: "/blog/cassiterite-global-markets",
    featured: true,
  },
  {
    title: "The Role of Nigerian Palm Oil in Global Food Processing",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=500&fit=crop",
    author: "Admin",
    date: "Apr 24, 2026",
    comments: 0,
    href: "/blog/palm-oil-processing",
  },
  {
    title: "Sourcing Spodumene Concentrates for International Chemical Plants",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop",
    author: "Admin",
    date: "Apr 24, 2026",
    comments: 0,
    href: "/blog/spodumene-concentrates",
  },
]

export function Blog() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Latest News</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">From Our Blog</h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Post */}
          <Link
            href={blogPosts[0].href}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4 inline mr-1" />
                {blogPosts[0].date}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {blogPosts[0].author}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {blogPosts[0].comments} Comments
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {blogPosts[0].title}
              </h3>
            </div>
          </Link>

          {/* Other Posts */}
          <div className="grid gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group flex gap-4 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative w-32 md:w-40 shrink-0 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-white px-2 py-0.5 rounded text-xs font-medium">
                    {post.date.split(" ")[1].replace(",", "")}
                  </div>
                </div>
                <div className="py-4 pr-4 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      {post.comments}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm md:text-base">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
