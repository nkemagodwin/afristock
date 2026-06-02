"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What products does AFRI ~ STOCK export?",
        answer: "AFRI ~ STOCK exports a wide range of premium Nigerian agricultural products including Cashew, Cocoa, Ginger, Groundnuts, Sesame, Shea Nuts, Soyabeans, and Leather. All our products meet international quality standards and are sourced directly from certified Nigerian farms.",
      },
      {
        question: "Which countries do you export to?",
        answer: "We export to over 100 countries worldwide, including major markets in Europe, Asia, North America, and the Middle East. Our established logistics network ensures reliable delivery to virtually any destination.",
      },
      {
        question: "How long has AFRI ~ STOCK been in business?",
        answer: "AFRI ~ STOCK was founded in 2015 and has since grown to become one of Nigeria's leading agro-export companies. We have over 10 years of experience in the agricultural export industry.",
      },
    ],
  },
  {
    category: "Products & Quality",
    questions: [
      {
        question: "What quality certifications do you have?",
        answer: "We maintain multiple international certifications including ISO 22000:2018, HACCP, and NAFDAC approval. Select products also carry organic certification. We can provide all necessary documentation upon request.",
      },
      {
        question: "How do you ensure product quality?",
        answer: "Our comprehensive quality assurance process includes rigorous farm selection, harvest timing control, clean processing facilities, laboratory testing for contaminants and quality parameters, and strict packaging protocols. Every batch undergoes thorough inspection before export.",
      },
      {
        question: "Can you provide product samples?",
        answer: "Yes, we can provide product samples for quality evaluation. Sample costs and shipping fees may apply depending on your location and the products requested. Contact us to arrange sample shipment.",
      },
      {
        question: "Do you offer organic products?",
        answer: "Yes, we offer certified organic options for select products. Our organic products are sourced from certified organic farms and processed in dedicated facilities to maintain organic integrity.",
      },
    ],
  },
  {
    category: "Orders & Shipping",
    questions: [
      {
        question: "What is your minimum order quantity?",
        answer: "Minimum order quantities vary by product but typically start at one full container load (FCL), which is approximately 18-25 metric tons depending on the product. Contact us for specific MOQ requirements.",
      },
      {
        question: "What are your payment terms?",
        answer: "We offer flexible payment terms including Letter of Credit (L/C), Telegraphic Transfer (T/T), and Documentary Collection (D/P or D/A). Payment terms are negotiated based on order size and customer relationship.",
      },
      {
        question: "How long does shipping take?",
        answer: "Shipping times depend on the destination port. Generally, shipments to Europe take 2-3 weeks, Asia takes 3-4 weeks, and North America takes 4-5 weeks. We provide accurate shipping schedules with each quotation.",
      },
      {
        question: "Do you handle export documentation?",
        answer: "Yes, we handle all export documentation including Certificate of Origin, Phytosanitary Certificate, Bill of Lading, Commercial Invoice, Packing List, and any specific documentation required by your country.",
      },
    ],
  },
  {
    category: "Partnerships",
    questions: [
      {
        question: "How can I become a supplier/farmer partner?",
        answer: "We work with certified farms across Nigeria. If you're interested in becoming a supplier partner, please contact us with information about your farm, products, and certifications. We evaluate all potential partners based on quality standards and sustainable practices.",
      },
      {
        question: "Do you offer exclusive distribution agreements?",
        answer: "Yes, we offer exclusive distribution agreements for qualified partners in specific regions. Terms are negotiated based on market potential, commitment levels, and mutual business objectives.",
      },
      {
        question: "Can you provide private label/white label products?",
        answer: "Yes, we offer private label and white label options for bulk orders. We can customize packaging to meet your branding requirements. Minimum order quantities apply for private label orders.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=600&fit=crop"
            alt="FAQ"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-300 text-lg">
              Find answers to common questions about our products, services, and export processes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqs.map((category) => (
              <div key={category.category} className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const itemId = `${category.category}-${index}`
                    const isOpen = openItems.includes(itemId)
                    
                    return (
                      <div
                        key={itemId}
                        className="bg-white rounded-xl shadow-sm overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full flex items-center justify-between p-6 text-left"
                        >
                          <span className="font-medium text-foreground pr-4">{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-primary shrink-0 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            {"Can't"} find the answer {"you're"} looking for? Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
