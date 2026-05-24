"use client"

import { X, Settings, Globe, Facebook, Heart, Key, BarChart3 } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div 
        className={`fixed inset-0 z-40 bg-background/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed top-0 right-0 z-50 h-full w-80 bg-gradient-to-b from-secondary/95 to-background border-l border-border/50 transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 space-y-6 overflow-y-auto h-full">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground tracking-wider">PROFIL</span>
            <button 
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-bold text-lg">
              AI
            </div>
            <div>
              <p className="font-semibold text-foreground">SAKENIFIC User</p>
              <p className="text-xs text-muted-foreground">magnific.ai</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">RASIO SUKSES</p>
              <p className="text-xs text-muted-foreground">GENERASI BERHASIL</p>
              <p className="text-2xl font-bold text-primary">5994</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">SUKSES</p>
              <p className="text-3xl font-bold text-primary">98.6%</p>
              <p className="text-xs text-muted-foreground">Berdasarkan semua generasi</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground tracking-wider">API KEY</p>
            <p className="text-sm text-muted-foreground">Belum ada API key</p>
            <button className="w-full py-2.5 rounded-lg bg-secondary border border-border/50 text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2">
              <Key className="w-4 h-4" />
              Set API Key
            </button>
            <p className="text-xs text-muted-foreground text-center">Tidak ada API Key</p>
          </div>
          
          <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/30 hover:bg-secondary transition-colors">
            <BarChart3 className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-foreground">STATISTIK API</span>
          </button>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground tracking-wider">BAHASA</span>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
                Indonesia
              </button>
              <button className="flex-1 py-2 rounded-lg bg-secondary border border-border/50 text-muted-foreground text-sm hover:bg-secondary/80 transition-colors">
                English
              </button>
            </div>
          </div>
          
          <a 
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border/30 hover:bg-secondary transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Facebook className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm font-medium text-foreground">FOLLOW ME</p>
                <p className="text-xs text-muted-foreground">facebook.com/S4QR4</p>
              </div>
            </div>
          </a>
          
          <button className="w-full flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border/30 hover:bg-secondary transition-colors">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-red-500" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">SUPPORT</p>
                <p className="text-xs text-muted-foreground">Dukung pengembang</p>
              </div>
            </div>
          </button>
          
          <p className="text-center text-xs text-muted-foreground pt-4">
            v1.0.0 • SAKENIFIC
          </p>
        </div>
      </div>
    </>
  )
}
