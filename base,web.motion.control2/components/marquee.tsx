"use client"

interface MarqueeProps {
  text: string
}

export function Marquee({ text }: MarqueeProps) {
  return (
    <div className="w-full overflow-hidden bg-background/50 py-2 border-y border-border/30">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(3)].map((_, i) => (
          <span key={i} className="text-muted-foreground text-sm mx-4">
            {text} • 
          </span>
        ))}
        {[...Array(3)].map((_, i) => (
          <span key={`dup-${i}`} className="text-muted-foreground text-sm mx-4">
            {text} • 
          </span>
        ))}
      </div>
    </div>
  )
}
