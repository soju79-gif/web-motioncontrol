"use client"

import Link from "next/link"
import { Star, Play, Image, Mic, Smile, Search, ArrowRight, ArrowUpRight } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  featured?: boolean
  href: string
}

export function FeatureCard({ title, description, icon, featured, href }: FeatureCardProps) {
  if (featured) {
    return (
      <Link
        href={href}
        className="relative col-span-2 md:col-span-1 row-span-2 rounded-2xl overflow-hidden group cursor-pointer border border-border/30 bg-gradient-to-br from-secondary/80 to-background min-h-[280px]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="relative z-20 h-full flex flex-col justify-between p-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/20 text-primary">
              {icon}
            </div>
            <span className="text-primary text-xs font-semibold tracking-wider">UNGGULAN</span>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
            <div className="flex items-center gap-2 text-primary text-sm font-medium">
              <span>Mulai Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 bg-gradient-to-l from-primary/10 to-transparent" />
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className="relative rounded-2xl overflow-hidden group cursor-pointer border border-border/30 bg-gradient-to-br from-secondary/50 to-background min-h-[140px] hover:border-primary/30 transition-all"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-20 h-full flex flex-col justify-between p-5">
        <div className="flex items-center justify-between">
          <div className="p-2 rounded-lg bg-secondary/80 text-muted-foreground group-hover:text-primary transition-colors">
            {icon}
          </div>
          <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground text-xs">{description}</p>
        </div>
</div>
      </Link>
  )
}

export function FeatureGrid() {
  const features = [
    {
      id: "motion",
      title: "MOTION CONTROL",
      description: "Kontrol gerakan karakter AI dengan referensi video",
      icon: <Star className="w-5 h-5" />,
      featured: true,
      href: "/motion"
    },
    {
      id: "video",
      title: "VIDEO GENERATOR",
      description: "Buat video AI yang menakjubkan",
      icon: <Play className="w-5 h-5" />,
      href: "/video"
    },
    {
      id: "image",
      title: "IMAGE GENERATOR", 
      description: "Buat gambar AI yang memukau",
      icon: <Image className="w-5 h-5" />,
      href: "/image"
    },
    {
      id: "voice",
      title: "VOICE GENERATOR",
      description: "Buat suara AI yang alami",
      icon: <Mic className="w-5 h-5" />,
      href: "/voice"
    },
    {
      id: "lipsync",
      title: "LIPSYNC",
      description: "Sinkronisasi bibir realistis",
      icon: <Smile className="w-5 h-5" />,
      href: "/lipsync"
    }
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <FeatureCard {...features[0]} />
        <div className="flex flex-col gap-4">
          <FeatureCard {...features[1]} />
          <FeatureCard {...features[2]} />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <FeatureCard {...features[3]} />
        <FeatureCard {...features[4]} />
      </div>
      
      <Link 
        href="/api-checker"
        className="w-full flex items-center justify-between p-4 rounded-xl bg-secondary/30 border border-border/30 hover:border-primary/30 transition-all group"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-secondary/80 text-muted-foreground group-hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h3 className="text-sm font-semibold text-foreground">API KEY CHECKER</h3>
            <p className="text-muted-foreground text-xs">Validasi API key Magnific</p>
          </div>
        </div>
        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </Link>
    </div>
  )
}
