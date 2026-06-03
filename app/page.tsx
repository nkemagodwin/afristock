import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Blog } from "@/components/blog"
import { Footer } from "@/components/footer"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Products />
      <Gallery />
      <Contact />
      <Blog />
      <Footer />
    </main>
  )
}
