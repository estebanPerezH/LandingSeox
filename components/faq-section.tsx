"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "¿Qué es la plataforma SEO y para quién está pensada?",
    answer:
      "Nuestra plataforma SEO es una solución integral para mejorar el posicionamiento web de negocios, agencias y grandes empresas. Es ideal tanto para quienes inician en el mundo digital como para profesionales del marketing que buscan resultados avanzados.",
  },
  {
    question: "¿Qué funcionalidades incluye el análisis SEO?",
    answer:
      "El análisis SEO abarca auditoría técnica, revisión de palabras clave, análisis de competencia, sugerencias de optimización y reportes automáticos. Todo desde un panel fácil de usar y con resultados accionables.",
  },
  {
    question: "¿Puedo conectar la plataforma con Google Analytics y otras herramientas?",
    answer:
      "Sí, puedes integrar Google Analytics, Google Search Console y Google Data Studio para obtener reportes completos y centralizar toda la información relevante de tu sitio web.",
  },
  {
    question: "¿Qué incluye el plan gratuito?",
    answer:
      "El plan gratuito permite analizar un sitio web, obtener un reporte básico de palabras clave y acceder a recursos educativos. Es perfecto para probar la plataforma antes de pasar a un plan profesional.",
  },
  {
    question: "¿Cómo funciona el seguimiento de palabras clave?",
    answer:
      "Puedes monitorear la posición de tus palabras clave más importantes, recibir alertas de cambios y comparar tu evolución frente a la competencia en tiempo real.",
  },
  {
    question: "¿Mis datos y proyectos están seguros?",
    answer:
      "Por supuesto. Utilizamos cifrado de extremo a extremo y cumplimos con los estándares de seguridad más exigentes. Tus datos solo son accesibles por ti y tu equipo autorizado.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            Preguntas frecuentes sobre nuestra plataforma SEO
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Todo lo que necesitas saber para mejorar tu posicionamiento web y aprovechar al máximo nuestras herramientas SEO.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}
