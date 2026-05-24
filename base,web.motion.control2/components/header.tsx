"use client"

import { User } from "lucide-react"

interface HeaderProps {
  generatedCount: number
  onMenuClick: () => void
}

export function Header({ generatedCount, onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-3 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-bold text-foreground tracking-wide">SAKENIFIC</h1>
        <span className="text-xs text-muted-foreground">magnific api</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full border border-border/50">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-primary font-semibold">{generatedCount.toLocaleString()}</span>
          <span className="text-muted-foreground text-sm">generated</span>
        </div>
        
        <button 
          onClick={onMenuClick}
          className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <div className="p-2 rounded-full bg-secondary/50 border border-border/50">
            <User className="w-5 h-5" />
          </div>
          <span className="text-xs">MENU</span>
        </button>
      </div>
    </header>
  )
}
