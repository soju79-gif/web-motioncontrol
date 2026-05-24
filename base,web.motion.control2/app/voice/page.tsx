"use client"

import { useState } from "react"
import { Mic } from "lucide-react"
import { FeatureLayout, GenerateButton } from "@/components/feature-layout"

export default function VoicePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState("")
  const [result, setResult] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!text.trim()) return
    
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setResult("Suara berhasil dibuat!")
    setIsLoading(false)
  }

  return (
    <FeatureLayout
      title="VOICE GENERATOR"
      description="Buat suara AI yang alami"
      icon={<Mic className="w-5 h-5" />}
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-sm text-muted-foreground">Teks untuk Diucapkan</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Masukkan teks yang ingin diubah menjadi suara..."
            className="w-full h-32 p-4 rounded-xl bg-secondary/30 border border-border/30 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 transition-colors resize-none"
          />
        </div>
        
        <div className="space-y-3">
          <label className="text-sm text-muted-foreground">Pilih Suara</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Aria", desc: "Wanita, Lembut" },
              { name: "Budi", desc: "Pria, Tegas" },
              { name: "Citra", desc: "Wanita, Ceria" },
              { name: "Dimas", desc: "Pria, Ramah" },
            ].map((voice) => (
              <button
                key={voice.name}
                className="p-4 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/30 transition-colors text-left"
              >
                <p className="font-medium text-foreground">{voice.name}</p>
                <p className="text-xs text-muted-foreground">{voice.desc}</p>
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-3">
          <label className="text-sm text-muted-foreground">Pengaturan</label>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
              <p className="text-xs text-muted-foreground mb-2">Kecepatan</p>
              <select className="w-full bg-transparent text-foreground text-sm outline-none">
                <option value="normal">Normal</option>
                <option value="slow">Lambat</option>
                <option value="fast">Cepat</option>
              </select>
            </div>
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
              <p className="text-xs text-muted-foreground mb-2">Bahasa</p>
              <select className="w-full bg-transparent text-foreground text-sm outline-none">
                <option value="id">Indonesia</option>
                <option value="en">English</option>
                <option value="jp">Japanese</option>
              </select>
            </div>
          </div>
        </div>
        
        <GenerateButton
          onClick={handleGenerate}
          isLoading={isLoading}
          disabled={!text.trim()}
        />
        
        {result && (
          <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 text-primary text-center">
            {result}
          </div>
        )}
      </div>
    </FeatureLayout>
  )
}
