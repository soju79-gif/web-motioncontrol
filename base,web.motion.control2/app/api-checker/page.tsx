"use client"

import { useState } from "react"
import { Search, CheckCircle, XCircle, Loader2 } from "lucide-react"
import { FeatureLayout } from "@/components/feature-layout"

export default function ApiCheckerPage() {
  const [apiKey, setApiKey] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "valid" | "invalid">("idle")

  const handleCheck = async () => {
    if (!apiKey.trim()) return
    
    setIsLoading(true)
    setStatus("idle")
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simulate validation (any key with more than 10 chars is "valid")
    if (apiKey.length > 10) {
      setStatus("valid")
    } else {
      setStatus("invalid")
    }
    setIsLoading(false)
  }

  return (
    <FeatureLayout
      title="API KEY CHECKER"
      description="Validasi API key Magnific"
      icon={<Search className="w-5 h-5" />}
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-sm text-muted-foreground">Masukkan API Key</label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="mag-xxxxxxxxxxxxxxxxxxxx"
            className="w-full p-4 rounded-xl bg-secondary/30 border border-border/30 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 transition-colors font-mono"
          />
        </div>
        
        <button
          onClick={handleCheck}
          disabled={!apiKey.trim() || isLoading}
          className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Memeriksa...
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              Periksa API Key
            </>
          )}
        </button>
        
        {status === "valid" && (
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <div>
              <p className="font-medium text-green-500">API Key Valid</p>
              <p className="text-sm text-green-500/70">API key dapat digunakan untuk semua fitur SAKENIFIC</p>
            </div>
          </div>
        )}
        
        {status === "invalid" && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3">
            <XCircle className="w-6 h-6 text-red-500" />
            <div>
              <p className="font-medium text-red-500">API Key Tidak Valid</p>
              <p className="text-sm text-red-500/70">Pastikan API key yang dimasukkan benar</p>
            </div>
          </div>
        )}
        
        <div className="p-4 rounded-xl bg-secondary/30 border border-border/30 space-y-3">
          <p className="text-sm font-medium text-foreground">Cara Mendapatkan API Key:</p>
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
            <li>Kunjungi magnific.ai</li>
            <li>Buat akun atau login</li>
            <li>Masuk ke pengaturan akun</li>
            <li>Buat API key baru</li>
            <li>Salin dan tempel API key di sini</li>
          </ol>
        </div>
      </div>
    </FeatureLayout>
  )
}
