"use client"

import Link from "next/link"
import { ArrowLeft, Upload, Loader2 } from "lucide-react"
import { useState } from "react"

interface FeatureLayoutProps {
  title: string
  description: string
  icon: React.ReactNode
  children: React.ReactNode
}

export function FeatureLayout({ title, description, icon, children }: FeatureLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/30">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link 
            href="/"
            className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/20 text-primary">
              {icon}
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">{title}</h1>
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-2xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  )
}

interface FileUploadProps {
  accept: string
  label: string
  onFileSelect: (file: File) => void
  preview?: string | null
  isVideo?: boolean
}

export function FileUpload({ accept, label, onFileSelect, preview, isVideo }: FileUploadProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) onFileSelect(file)
  }

  return (
    <div className="space-y-3">
      <label className="text-sm text-muted-foreground">{label}</label>
      <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-border/50 rounded-xl bg-secondary/20 hover:bg-secondary/30 transition-colors cursor-pointer overflow-hidden">
        {preview ? (
          isVideo ? (
            <video src={preview} className="w-full h-full object-cover" controls />
          ) : (
            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
          )
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <Upload className="w-8 h-8" />
            <span className="text-sm">Klik untuk upload</span>
            <span className="text-xs">{accept}</span>
          </div>
        )}
        <input type="file" accept={accept} onChange={handleChange} className="hidden" />
      </label>
    </div>
  )
}

interface GenerateButtonProps {
  onClick: () => void
  isLoading: boolean
  disabled?: boolean
}

export function GenerateButton({ onClick, isLoading, disabled }: GenerateButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Memproses...
        </>
      ) : (
        "Generate"
      )}
    </button>
  )
}

export function useFileUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile)
    const url = URL.createObjectURL(selectedFile)
    setPreview(url)
  }

  const clearFile = () => {
    setFile(null)
    if (preview) URL.revokeObjectURL(preview)
    setPreview(null)
  }

  return { file, preview, handleFileSelect, clearFile }
}
