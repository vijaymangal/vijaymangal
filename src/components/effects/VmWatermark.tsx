import { cn } from '@/utils/cn'

interface VmWatermarkProps {
  className?: string
}

export function VmWatermark({ className }: VmWatermarkProps) {
  return (
    <p
      aria-hidden
      className={cn(
        'font-name pointer-events-none select-none text-[clamp(7rem,26vw,16rem)] leading-none tracking-[0.08em] text-white/[0.04] [-webkit-text-stroke:1px_rgba(255,255,255,0.05)]',
        className
      )}
    >
      VM
    </p>
  )
}
