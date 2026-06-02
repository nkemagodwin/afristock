import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, FileCheck, Leaf, FlaskConical, Award, ClipboardCheck } from "lucide-react"

export const metadata = {
  title: "Food Safety | AFRI ~ STOCK",
  description: "Learn about our commitment to food safety, quality standards, and certifications at AFRI ~ STOCK.",
}

const certifications = [
  {
    title: "ISO 22000:2018",
    description: "Food Safety Management System certification ensuring systematic approach to food safety.",
    icon: FileCheck,
  },
  {
    title: "HACCP Certified",
    description: "Hazard Analysis Critical Control Points certification for systematic preventive approach.",
    icon: Shield,
  },
  {
    title: "NAFDAC Approved",
    description: "Nigerian food safety regulatory approval for all our export products.",
    icon: Award,
  },
  {
    title: "Organic Certification",
    description: "Select products certified organic meeting international organic standards.",
    icon: Leaf,
  },
]

const practices = [
  {
    title: "Rigorous Testing",
    description: "Every batch undergoes comprehensive laboratory testing for contaminants, mycotoxins, and quality parameters.",
    icon: FlaskConical,
  },
  {
    title: "Traceability",
    description: "Complete traceability from farm to export, allowing full tracking of product origin and handling.",
    icon: ClipboardCheck,
  },
  {
    title: "Clean Processing",
    description: "State-of-the-art processing facilities with strict hygiene protocols and regular sanitization.",
    icon: Shield,
  },
  {
    title: "Pest Control",
    description: "Integrated pest management systems to ensure products are free from infestation.",
    icon: Leaf,
  },
]

export default function FoodSafetyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=1920&h=600&fit=crop"
            alt="Food safety laboratory"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Food Safety</h1>
            <p className="text-gray-300 text-lg">
              Our commitment to delivering safe, high-quality agricultural products through rigorous standards and practices.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Commitment</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Quality & Safety First
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At AFRI ~ STOCK, food safety is not just a compliance requirement—it&apos;s a core value that guides every aspect of our operations. From farm sourcing to final export, we maintain the highest standards of hygiene, quality control, and safety protocols.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our comprehensive food safety management system ensures that every product leaving our facilities meets international standards for safety and quality. We invest continuously in training, technology, and infrastructure to maintain our position as a trusted supplier of safe agricultural products.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/contact">Request Certificates</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=800&fit=crop"
                alt="Quality control inspection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Certifications</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Our Quality Certifications</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground">
              We maintain multiple international certifications that demonstrate our commitment to food safety and quality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.title} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Practices */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Practices</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">Food Safety Practices</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground">
              Comprehensive safety measures implemented throughout our supply chain.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {practices.map((practice) => (
              <div key={practice.title} className="flex gap-4 p-6 bg-muted/30 rounded-2xl">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <practice.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{practice.title}</h3>
                  <p className="text-muted-foreground text-sm">{practice.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Quality Process</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A systematic approach to ensuring every product meets the highest standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Farm Selection", desc: "Certified farms only" },
              { step: "02", title: "Harvest Control", desc: "Optimal timing & methods" },
              { step: "03", title: "Processing", desc: "Clean facility protocols" },
              { step: "04", title: "Testing", desc: "Lab analysis & QC" },
              { step: "05", title: "Export", desc: "Safe packaging & shipping" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Safety Documentation?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We can provide all necessary certifications, test reports, and safety documentation for your import requirements.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
