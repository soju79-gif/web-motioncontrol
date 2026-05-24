"use client"

export function HeroSection() {
  return (
    <div className="relative pt-24 pb-8 px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-md mx-auto space-y-4">
        <p className="text-primary text-xs font-semibold tracking-wider">BUAT TANPA BATAS</p>
        <h1 className="text-4xl font-bold text-foreground tracking-tight">SAKENIFIC</h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Create AI videos, images, voices, lipsync, and motion control with magnific apikey
        </p>
      </div>
    </div>
  )
}
