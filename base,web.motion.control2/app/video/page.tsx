"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { FeatureLayout, GenerateButton } from "@/components/feature-layout"

export default function VideoPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setResult("Video berhasil dibuat!")
    setIsLoading(false)
  }

  return (
    <FeatureLayout
      title="VIDEO GENERATOR"
      description="Buat video AI yang menakjubkan"
      icon={<Play className="w-5 h-5" />}
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-sm text-muted-foreground">Prompt Video</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Deskripsikan video yang ingin dibuat..."
            className="w-full h-32 p-4 rounded-xl bg-secondary/30 border border-border/30 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 transition-colors resize-none"
          />
        </div>
        
        <div className="space-y-3">
          <label className="text-sm text-muted-foreground">Pengaturan</label>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
              <p className="text-xs text-muted-foreground mb-2">Resolusi</p>
              <select className="w-full bg-transparent text-foreground text-sm outline-none">
                <option value="1080">1080p</option>
                <option value="720">720p</option>
                <option value="480">480p</option>
              </select>
            </div>
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
              <p className="text-xs text-muted-foreground mb-2">Durasi</p>
              <select className="w-full bg-transparent text-foreground text-sm outline-none">
                <option value="5">5 detik</option>
                <option value="10">10 detik</option>
                <option value="15">15 detik</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
          <p className="text-xs text-muted-foreground mb-2">Gaya</p>
          <div className="flex flex-wrap gap-2">
            {["Realistis", "Anime", "3D", "Kartun", "Sinematik"].map((style) => (
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
