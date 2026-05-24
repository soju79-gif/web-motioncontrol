"use client"

import { useState } from "react"
import { Image as ImageIcon } from "lucide-react"
import { FeatureLayout, GenerateButton } from "@/components/feature-layout"

export default function ImagePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setResult("Gambar berhasil dibuat!")
    setIsLoading(false)
  }

  return (
    <FeatureLayout
      title="IMAGE GENERATOR"
      description="Buat gambar AI yang memukau"
      icon={<ImageIcon className="w-5 h-5" />}
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-sm text-muted-foreground">Prompt Gambar</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Deskripsikan gambar yang ingin dibuat..."
            className="w-full h-32 p-4 rounded-xl bg-secondary/30 border border-border/30 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 transition-colors resize-none"
          />
        </div>
        
        <div className="space-y-3">
          <label className="text-sm text-muted-foreground">Pengaturan</label>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
              <p className="text-xs text-muted-foreground mb-2">Ukuran</p>
              <select className="w-full bg-transparent text-foreground text-sm outline-none">
                <option value="1024x1024">1024x1024</option>
                <option value="1024x768">1024x768</option>
                <option value="768x1024">768x1024</option>
                <option value="512x512">512x512</option>
              </select>
            </div>
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
              <p className="text-xs text-muted-foreground mb-2">Jumlah</p>
              <select className="w-full bg-transparent text-foreground text-sm outline-none">
                <option value="1">1 gambar</option>
                <option value="2">2 gambar</option>
                <option value="4">4 gambar</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
          <p className="text-xs text-muted-foreground mb-2">Gaya</p>
          <div className="flex flex-wrap gap-2">
            {["Realistis", "Anime", "Digital Art", "Oil Painting", "Watercolor", "Sketch"].map((style) => (
              <button
                key={style}
                className="px-3 py-1.5 rounded-lg bg-secondary/50 text-sm text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
              >
                {style}
              </button>
            ))}
          </div>
        </div>
        
        <GenerateButton
          onClick={handleGenerate}
          isLoading={isLoading}
          disabled={!prompt.trim()}
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
