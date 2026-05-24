"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { FeatureLayout, FileUpload, GenerateButton, useFileUpload } from "@/components/feature-layout"

export default function MotionPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const imageUpload = useFileUpload()
  const videoUpload = useFileUpload()

  const handleGenerate = async () => {
    if (!imageUpload.file || !videoUpload.file) return
    
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setResult("Motion control berhasil diproses!")
    setIsLoading(false)
  }

  return (
    <FeatureLayout
      title="MOTION CONTROL"
      description="Kontrol gerakan karakter AI dengan referensi video"
      icon={<Star className="w-5 h-5" />}
    >
      <div className="space-y-6">
        <FileUpload
          accept="image/*"
          label="Upload Gambar Karakter"
          onFileSelect={imageUpload.handleFileSelect}
          preview={imageUpload.preview}
        />
        
        <FileUpload
          accept="video/*"
          label="Upload Video Referensi Gerakan"
          onFileSelect={videoUpload.handleFileSelect}
          preview={videoUpload.preview}
          isVideo
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
              <p className="text-xs text-muted-foreground mb-2">Durasi</p>
              <select className="w-full bg-transparent text-foreground text-sm outline-none">
                <option value="5">5 detik</option>
                <option value="10">10 detik</option>
                <option value="15">15 detik</option>
              </select>
            </div>
          </div>
        </div>
        
        <GenerateButton
          onClick={handleGenerate}
          isLoading={isLoading}
          disabled={!imageUpload.file || !videoUpload.file}
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
