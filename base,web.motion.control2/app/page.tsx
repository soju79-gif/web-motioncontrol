"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Marquee } from "@/components/marquee"
import { FeatureGrid } from "@/components/feature-grid"
import { Sidebar } from "@/components/sidebar"

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const generatedCount = 5994

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header 
        generatedCount={generatedCount} 
        onMenuClick={() => setIsSidebarOpen(true)} 
      />
      
      <main>
        <HeroSection />
        
        <Marquee text="Dibuat 100% via Magnific API • Hasil mungkin bervariasi tergantung prompt, kualitas gambar, model yang dipilih, dan pemrosesan API" />
        
        <div className="px-4 py-6 max-w-2xl mx-auto">
          <FeatureGrid />
        </div>
      </main>
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </div>
  )
}
