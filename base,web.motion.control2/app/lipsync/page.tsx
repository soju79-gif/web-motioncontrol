"use client"

import { useState } from "react"
import { Smile } from "lucide-react"
import { FeatureLayout, FileUpload, GenerateButton, useFileUpload } from "@/components/feature-layout"

export default function LipsyncPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const imageUpload = useFileUpload()
  const audioUpload = useFileUpload()

  const handleGenerate = async () => {
    if (!imageUpload.file || !audioUpload.file) return
    
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setResult("Lipsync berhasil dibuat!")
    setIsLoading(false)
  }

  return (
    <FeatureLayout
      title="LIPSYNC"
      description="Sinkronisasi bibir realistis"
      icon={<Smile className="w-5 h-5" />}
    >
      <div className="space-y-6">
        <FileUpload
          accept="image/*,video/*"
          label="Upload Gambar/Video Wajah"
          onFileSelect={imageUpload.handleFileSelect}
          preview={imageUpload.preview}
        />
        
        <FileUpload
          accept="audio/*"
          label="Upload Audio"
          onFileSelect={audioUpload.handleFileSelect}
          preview={audioUpload.preview}
        />
        
        <div className="space-y-3">
          <label className="text-sm text-muted-foreground">Pengaturan</label>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
              <p className="text-xs text-muted-foreground mb-2">Kualitas</p>
              <select className="w-full bg-transparent text-foreground text-sm outline-none">
                <option value="high">Tinggi</option>
                <option value="medium">Sedang</option>
                <option value="low">Rendah</option>
              </select>
            </div>
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/30">
              <p className="text-xs text-muted-foreground mb-2">Ekspresi</p>
              <select className="w-full bg-transparent text-foreground text-sm outline-none">
                <option value="natural">Natural</option>
                <option value="expressive">Ekspresif</option>
                <option value="subtle">Halus</option>
              </select>
            </div>
          </div>
        </div>
        
        <GenerateButton
          onClick={handleGenerate}
          isLoading={isLoading}
          disabled={!imageUpload.file || !audioUpload.file}
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
