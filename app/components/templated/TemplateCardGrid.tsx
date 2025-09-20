import React from "react"
import Image from "next/image"

const templates = [
  {
    title: "Landing Page",
    description:
      "Modern landing page template featuring Framer Motion animations, custom navigation components, and responsive design optimized for conversions.",
    image: "/1.gif",
    badge: null,
    
  },
  {
    title: "Manifest",
    description:
      "Vector embedding solution for building Perplexity-style AI applications with RAG retrieval, real-time source citations, and pgvector search functionality.",
    image: "/2.gif",
    badge: null,
  },
  {
    title: "Dev Portfolio",
    description:
      "Comprehensive SEO analysis tool with web crawling, performance testing, and AI-powered optimization recommendations for website improvement.",
    image: "/3.gif",
    badge: "New",
  },
]

export default function TemplateCardGrid() {
  return (
<>
    <div className="mx-auto max-w-4xl mt-10 rounded-3xl border border-white/10 bg-neutral-900/80 p-6 md:p-10">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#191919] px-4 py-1 text-sm font-semibold text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 stroke-white"
          fill="#A4F88A"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
        Templates
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template, index) => (
          <div
            key={index}
            className="rounded-2xl bg-[#1c1c1c] p-4 text-white shadow-lg ring-1 ring-white/10"
          >
            <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10">
              <Image
                src={template.image}
                alt={template.title}
                width={400}
                height={250}
                className="rounded-xl object-cover"
              />
              {template.badge && (
                <div className="absolute right-2 top-2 rounded-md bg-lime-200 px-2 py-0.5 text-xs font-semibold text-black">
                  {template.badge}
                </div>
              )}
            </div>
            <h3 className="text-lg font-bold">{template.title}</h3>
            <p className="text-sm text-neutral-300">{template.description}</p>
          </div>
        ))}
      </div>
    </div>

</>



  )
}
