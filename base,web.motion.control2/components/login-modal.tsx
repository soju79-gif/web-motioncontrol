"use client"

import { useState, useEffect } from "react"
import { Facebook, Key } from "lucide-react"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin: (password: string) => void
}

export function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [password, setPassword] = useState("")

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin(password)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-background/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative z-10 w-full max-w-md mx-4 p-8 rounded-2xl bg-gradient-to-b from-secondary/90 to-background border border-border/50 shadow-2xl">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary text-sm">
            <Key className="w-4 h-4" />
            <span>password ada dipost fb</span>
          </div>
          
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary border border-border/50 text-foreground hover:bg-secondary/80 transition-colors"
          >
            <Facebook className="w-4 h-4" />
            <span className="text-sm font-medium">FOLLOW FACEBOOK</span>
          </a>
        </div>
        
        <div className="mt-8 space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-[0.3em] text-foreground">SAKENIFIC</h2>
          <p className="text-muted-foreground text-sm tracking-wider">ACCESS REQUIRED</p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="space-y-2">
            <label className="text-xs text-muted-foreground tracking-wider">PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-input border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-secondary/80 border border-border/50 text-muted-foreground font-medium hover:bg-secondary hover:text-foreground transition-all"
          >
            MASUK
          </button>
        </form>
        
        <p className="mt-6 text-center text-xs text-muted-foreground">
          SAKENIFIC • Protected Access
        </p>
      </div>
    </div>
  )
}
