import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils/cn'

type PatternVariant =
  | 'hero'
  | 'about'
  | 'skills'
  | 'projects'
  | 'services'
  | 'contact'
  | 'default'

interface SectionPatternsProps {
  variant?: PatternVariant
  className?: string
}

const stroke = 'rgba(194, 65, 12, 0.14)'
const strokeSoft = 'rgba(194, 65, 12, 0.08)'
const strokeFaint = 'rgba(255, 255, 255, 0.06)'

interface FloatProps {
  className: string
  duration?: number
  delay?: number
  y?: number[]
  x?: number[]
  rotate?: number[]
  children: ReactNode
}

function FloatingShape({
  className,
  duration = 14,
  delay = 0,
  y = [0, -18, 0],
  x,
  rotate,
  children,
}: FloatProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn('absolute', className)}
      animate={
        reducedMotion
          ? undefined
          : {
              y,
              ...(x ? { x } : {}),
              ...(rotate ? { rotate } : {}),
            }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}

function Rings({ size = 220, r1 = 90, r2 = 58 }: { size?: number; r1?: number; r2?: number }) {
  const c = size / 2
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden>
      <circle cx={c} cy={c} r={r1} stroke={stroke} strokeWidth="1" />
      <circle cx={c} cy={c} r={r2} stroke={strokeSoft} strokeWidth="1" strokeDasharray="6 8" />
    </svg>
  )
}

function GridDots({ cols = 4, rows = 3, gap = 18 }: { cols?: number; rows?: number; gap?: number }) {
  const w = (cols - 1) * gap + 8
  const h = (rows - 1) * gap + 8
  const dots: ReactNode[] = []
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={4 + col * gap}
          cy={4 + row * gap}
          r="2"
          fill={row % 2 === 0 ? stroke : strokeSoft}
        />
      )
    }
  }
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" aria-hidden>
      {dots}
    </svg>
  )
}

function Hexagon({ size = 100 }: { size?: number }) {
  const c = size / 2
  const r = size * 0.42
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6
    return `${c + r * Math.cos(angle)},${c + r * Math.sin(angle)}`
  }).join(' ')
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden>
      <polygon points={points} stroke={strokeSoft} strokeWidth="1" />
    </svg>
  )
}

function Star({ size = 72 }: { size?: number }) {
  const c = size / 2
  const outer = size * 0.38
  const inner = size * 0.16
  const points = Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? outer : inner
    const angle = (Math.PI / 5) * i - Math.PI / 2
    return `${c + radius * Math.cos(angle)},${c + radius * Math.sin(angle)}`
  }).join(' ')
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden>
      <polygon points={points} stroke={stroke} strokeWidth="1" strokeLinejoin="round" />
    </svg>
  )
}

function WaveLines() {
  return (
    <svg width="140" height="60" viewBox="0 0 140 60" fill="none" aria-hidden>
      <path d="M0 30 C35 10, 70 50, 140 30" stroke={stroke} strokeWidth="1" />
      <path d="M0 45 C40 25, 80 55, 140 40" stroke={strokeSoft} strokeWidth="1" />
      <path d="M0 15 C30 35, 90 5, 140 20" stroke={strokeFaint} strokeWidth="1" />
    </svg>
  )
}

function Crosshair({ size = 88 }: { size?: number }) {
  const c = size / 2
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden>
      <circle cx={c} cy={c} r={size * 0.32} stroke={strokeSoft} strokeWidth="1" />
      <path d={`M${c} 8 V${size - 8} M8 ${c} H${size - 8}`} stroke={strokeFaint} strokeWidth="1" />
    </svg>
  )
}

function ArcCorner() {
  return (
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" aria-hidden>
      <path d="M20 140 Q80 20 140 140" stroke={stroke} strokeWidth="1" />
      <path d="M40 140 Q80 50 120 140" stroke={strokeSoft} strokeWidth="1" />
    </svg>
  )
}

function Brackets() {
  return (
    <svg width="120" height="180" viewBox="0 0 120 180" fill="none" aria-hidden>
      <path d="M35 16 L15 90 L35 164" stroke={stroke} strokeWidth="1" />
      <path d="M85 16 L105 90 L85 164" stroke={stroke} strokeWidth="1" />
    </svg>
  )
}

function StackedBars() {
  return (
    <svg width="100" height="140" viewBox="0 0 100 140" fill="none" aria-hidden>
      <rect x="10" y="12" width="80" height="18" rx="6" stroke={stroke} strokeWidth="1" />
      <rect x="10" y="48" width="80" height="18" rx="6" stroke={strokeSoft} strokeWidth="1" />
      <rect x="10" y="84" width="80" height="18" rx="6" stroke={strokeFaint} strokeWidth="1" />
      <rect x="10" y="120" width="56" height="12" rx="4" stroke={strokeFaint} strokeWidth="1" />
    </svg>
  )
}

function ZigZag() {
  return (
    <svg width="120" height="48" viewBox="0 0 120 48" fill="none" aria-hidden>
      <path d="M0 24 L20 8 L40 24 L60 8 L80 24 L100 8 L120 24" stroke={strokeSoft} strokeWidth="1" />
    </svg>
  )
}

function Orbit() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" aria-hidden>
      <ellipse cx="100" cy="100" rx="88" ry="52" stroke={strokeSoft} strokeWidth="1" transform="rotate(-18 100 100)" />
      <ellipse cx="100" cy="100" rx="88" ry="52" stroke={strokeFaint} strokeWidth="1" transform="rotate(32 100 100)" />
      <circle cx="100" cy="100" r="4" fill={stroke} />
    </svg>
  )
}

function Envelope() {
  return (
    <svg width="130" height="90" viewBox="0 0 130 90" fill="none" aria-hidden>
      <rect x="8" y="16" width="114" height="58" rx="10" stroke={stroke} strokeWidth="1" />
      <path d="M8 26 L65 58 L122 26" stroke={strokeSoft} strokeWidth="1" />
    </svg>
  )
}

function CornerFrame() {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" aria-hidden>
      <path d="M24 116 L24 24 L116 24" stroke={stroke} strokeWidth="1" />
      <path d="M44 116 L44 44 L116 44" stroke={strokeSoft} strokeWidth="1" />
    </svg>
  )
}

function Diamond({ size = 64 }: { size?: number }) {
  const c = size / 2
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden>
      <path d={`M${c} 8 L${size - 8} ${c} L${c} ${size - 8} L8 ${c} Z`} stroke={strokeSoft} strokeWidth="1" />
    </svg>
  )
}

function Triangle({ size = 140 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden>
      <polygon points={`${size / 2},16 ${size - 16},${size - 16} 16,${size - 16}`} stroke={strokeSoft} strokeWidth="1" />
    </svg>
  )
}

function PlusCircle() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-hidden>
      <circle cx="50" cy="50" r="32" stroke={strokeSoft} strokeWidth="1" />
      <path d="M50 28 V72 M28 50 H72" stroke={stroke} strokeWidth="1" />
    </svg>
  )
}

function HorizontalRules() {
  return (
    <svg width="120" height="48" viewBox="0 0 120 48" fill="none" aria-hidden>
      <path d="M0 12 H120" stroke={strokeFaint} strokeWidth="1" />
      <path d="M0 24 H90" stroke={strokeSoft} strokeWidth="1" />
      <path d="M0 36 H105" stroke={strokeFaint} strokeWidth="1" />
    </svg>
  )
}

type ShapeConfig = {
  className: string
  duration?: number
  delay?: number
  y?: number[]
  x?: number[]
  rotate?: number[]
  node: ReactNode
}

function ShapeLayer({ shapes }: { shapes: ShapeConfig[] }) {
  return (
    <>
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          className={shape.className}
          duration={shape.duration}
          delay={shape.delay}
          y={shape.y}
          x={shape.x}
          rotate={shape.rotate}
        >
          {shape.node}
        </FloatingShape>
      ))}
    </>
  )
}

const heroSets: ShapeConfig[][] = [
  [
    { className: '-right-16 top-[8%] md:right-[4%]', duration: 18, y: [0, -24, 0], rotate: [0, 8, 0], node: <Rings /> },
    { className: '-left-10 bottom-[18%] md:left-[3%]', duration: 16, delay: 1, y: [0, 16, 0], x: [0, 10, 0], node: <ArcCorner /> },
    { className: 'right-[12%] bottom-[22%] hidden md:block', duration: 20, delay: 0.5, rotate: [0, -12, 0], node: <Hexagon size={80} /> },
    { className: 'left-[18%] top-[14%] hidden lg:block', duration: 12, y: [0, -12, 0], node: <GridDots cols={3} rows={3} /> },
    { className: 'right-[35%] top-[42%] hidden xl:block', duration: 15, x: [0, -8, 0], node: <Star size={56} /> },
  ],
  [
    { className: '-right-8 top-[6%]', duration: 17, y: [0, -18, 0], node: <Orbit /> },
    { className: 'left-[5%] top-[22%] hidden md:block', duration: 14, rotate: [0, 6, 0], node: <WaveLines /> },
    { className: 'right-[18%] bottom-[16%]', duration: 19, delay: 0.6, y: [0, 12, 0], node: <Crosshair /> },
    { className: 'left-[28%] bottom-[8%] hidden lg:block', duration: 13, x: [0, 10, 0], node: <ZigZag /> },
    { className: 'right-[42%] top-[18%] hidden xl:block', duration: 16, node: <Diamond size={52} /> },
  ],
  [
    { className: '-right-12 top-[12%]', duration: 18, rotate: [0, -10, 0], node: <Triangle size={150} /> },
    { className: 'left-[2%] bottom-[20%] hidden md:block', duration: 15, y: [0, 14, 0], node: <CornerFrame /> },
    { className: 'right-[10%] top-[38%]', duration: 20, delay: 0.4, node: <PlusCircle /> },
    { className: 'left-[14%] top-[8%] hidden lg:block', duration: 12, y: [0, -10, 0], node: <Rings size={120} r1={48} r2={28} /> },
    { className: 'right-[30%] bottom-[6%] hidden xl:block', duration: 17, x: [0, -12, 0], node: <GridDots cols={5} rows={2} gap={14} /> },
  ],
  [
    { className: '-right-6 top-[10%]', duration: 16, y: [0, -20, 0], node: <Star size={88} /> },
    { className: 'left-[6%] top-[30%] hidden md:block', duration: 18, delay: 0.8, rotate: [0, 8, 0], node: <Hexagon size={110} /> },
    { className: 'right-[14%] bottom-[12%]', duration: 14, y: [0, 16, 0], node: <WaveLines /> },
    { className: 'left-[22%] bottom-[6%] hidden lg:block', duration: 19, node: <Orbit /> },
    { className: 'right-[40%] top-[52%] hidden xl:block', duration: 13, rotate: [0, -6, 0], node: <Crosshair size={72} /> },
  ],
]

const aboutSets: ShapeConfig[][] = [
  [
    { className: '-right-8 top-[10%]', duration: 17, rotate: [0, 6, 0], node: <CornerFrame /> },
    { className: 'left-[4%] bottom-[12%] hidden md:block', duration: 15, delay: 0.8, y: [0, 14, 0], node: <Rings size={120} r1={44} r2={24} /> },
    { className: 'right-[20%] bottom-[8%]', duration: 13, x: [0, -8, 0], node: <HorizontalRules /> },
    { className: 'left-[16%] top-[6%] hidden lg:block', duration: 16, node: <Hexagon size={72} /> },
  ],
  [
    { className: '-right-10 top-[14%]', duration: 18, y: [0, -16, 0], node: <Star size={64} /> },
    { className: 'left-[8%] bottom-[18%] hidden md:block', duration: 14, rotate: [0, -8, 0], node: <WaveLines /> },
    { className: 'right-[12%] top-[48%]', duration: 20, delay: 0.5, node: <GridDots cols={4} rows={2} /> },
    { className: 'left-[30%] top-[12%] hidden xl:block', duration: 12, x: [0, 8, 0], node: <Diamond /> },
  ],
  [
    { className: '-right-6 top-[8%]', duration: 16, node: <Orbit /> },
    { className: 'left-[3%] bottom-[10%] hidden md:block', duration: 15, y: [0, 12, 0], node: <ArcCorner /> },
    { className: 'right-[24%] bottom-[14%]', duration: 13, rotate: [0, 10, 0], node: <PlusCircle /> },
    { className: 'left-[20%] top-[18%] hidden lg:block', duration: 17, node: <ZigZag /> },
    { className: 'right-[8%] top-[62%] hidden xl:block', duration: 19, y: [0, -10, 0], node: <Crosshair size={64} /> },
  ],
  [
    { className: '-right-12 top-[6%]', duration: 19, rotate: [0, -6, 0], node: <Triangle size={120} /> },
    { className: 'left-[5%] bottom-[8%] hidden md:block', duration: 14, delay: 0.7, node: <StackedBars /> },
    { className: 'right-[18%] top-[20%]', duration: 16, y: [0, -14, 0], node: <Rings size={100} r1={38} r2={20} /> },
    { className: 'left-[28%] bottom-[22%] hidden lg:block', duration: 18, x: [0, -10, 0], node: <Hexagon size={90} /> },
  ],
]

const skillsSets: ShapeConfig[][] = [
  [
    { className: '-left-6 top-[20%]', duration: 16, y: [0, -16, 0], rotate: [0, -4, 0], node: <Brackets /> },
    { className: 'right-[6%] top-[8%] hidden md:block', duration: 19, delay: 1, node: <Triangle /> },
    { className: 'right-[15%] bottom-[10%]', duration: 14, y: [0, 10, 0], node: <GridDots cols={5} rows={1} gap={16} /> },
    { className: 'left-[20%] top-[10%] hidden lg:block', duration: 17, node: <ZigZag /> },
  ],
  [
    { className: '-left-8 top-[12%]', duration: 18, node: <Hexagon size={120} /> },
    { className: 'right-[4%] bottom-[16%] hidden md:block', duration: 15, rotate: [0, 8, 0], node: <Star size={80} /> },
    { className: 'left-[10%] bottom-[8%]', duration: 13, y: [0, -12, 0], node: <Brackets /> },
    { className: 'right-[28%] top-[14%] hidden xl:block', duration: 20, x: [0, 10, 0], node: <Crosshair /> },
  ],
  [
    { className: '-left-4 top-[18%]', duration: 17, y: [0, 14, 0], node: <Orbit /> },
    { className: 'right-[8%] top-[6%] hidden md:block', duration: 14, delay: 0.5, node: <Diamond size={72} /> },
    { className: 'left-[14%] bottom-[12%]', duration: 16, rotate: [0, -6, 0], node: <PlusCircle /> },
    { className: 'right-[20%] bottom-[6%] hidden lg:block', duration: 19, node: <WaveLines /> },
    { className: 'left-[32%] top-[8%] hidden xl:block', duration: 12, node: <GridDots cols={3} rows={4} gap={16} /> },
  ],
  [
    { className: '-left-10 top-[14%]', duration: 15, rotate: [0, 5, 0], node: <CornerFrame /> },
    { className: 'right-[6%] top-[22%] hidden md:block', duration: 18, y: [0, -18, 0], node: <Rings size={140} r1={52} r2={30} /> },
    { className: 'left-[8%] bottom-[18%]', duration: 13, x: [0, 8, 0], node: <HorizontalRules /> },
    { className: 'right-[30%] top-[10%] hidden lg:block', duration: 16, node: <Triangle size={100} /> },
  ],
]

const projectsSets: ShapeConfig[][] = [
  [
    { className: '-right-10 top-[15%]', duration: 18, rotate: [0, 10, 0], node: <Diamond size={100} /> },
    { className: 'left-[5%] bottom-[20%] hidden md:block', duration: 15, delay: 0.6, y: [0, -12, 0], node: <HorizontalRules /> },
    { className: 'left-[30%] top-[6%] hidden lg:block', duration: 20, x: [0, 12, 0], node: <Diamond /> },
    { className: 'right-[22%] bottom-[8%] hidden xl:block', duration: 14, node: <Star size={60} /> },
  ],
  [
    { className: '-right-8 top-[10%]', duration: 17, y: [0, -16, 0], node: <Orbit /> },
    { className: 'left-[4%] bottom-[14%] hidden md:block', duration: 16, rotate: [0, -8, 0], node: <Hexagon size={100} /> },
    { className: 'right-[16%] top-[42%]', duration: 19, delay: 0.4, node: <GridDots cols={4} rows={3} /> },
    { className: 'left-[24%] top-[12%] hidden lg:block', duration: 13, node: <WaveLines /> },
  ],
  [
    { className: '-right-14 top-[12%]', duration: 18, node: <Triangle size={160} /> },
    { className: 'left-[6%] bottom-[10%] hidden md:block', duration: 15, y: [0, 14, 0], node: <CornerFrame /> },
    { className: 'right-[10%] bottom-[18%]', duration: 14, x: [0, -10, 0], node: <ZigZag /> },
    { className: 'left-[18%] top-[8%] hidden xl:block', duration: 20, rotate: [0, 12, 0], node: <PlusCircle /> },
  ],
  [
    { className: '-right-6 top-[18%]', duration: 16, rotate: [0, -10, 0], node: <Rings size={180} r1={70} r2={42} /> },
    { className: 'left-[8%] bottom-[22%] hidden md:block', duration: 17, delay: 0.8, node: <Crosshair size={96} /> },
    { className: 'right-[28%] top-[8%]', duration: 13, y: [0, -12, 0], node: <Star size={76} /> },
    { className: 'left-[34%] bottom-[6%] hidden lg:block', duration: 19, node: <StackedBars /> },
  ],
]

const servicesSets: ShapeConfig[][] = [
  [
    { className: '-left-8 top-[12%]', duration: 17, y: [0, 14, 0], node: <StackedBars /> },
    { className: 'right-[8%] top-[18%] hidden md:block', duration: 16, delay: 0.5, rotate: [0, -8, 0], node: <PlusCircle /> },
    { className: 'right-[22%] bottom-[8%]', duration: 13, y: [0, -10, 0], node: <Rings size={72} r1={28} r2={16} /> },
    { className: 'left-[16%] bottom-[14%] hidden lg:block', duration: 18, node: <Hexagon size={84} /> },
  ],
  [
    { className: '-left-6 top-[10%]', duration: 18, rotate: [0, 6, 0], node: <GridDots cols={3} rows={4} gap={15} /> },
    { className: 'right-[6%] top-[14%] hidden md:block', duration: 15, y: [0, -14, 0], node: <Star size={68} /> },
    { className: 'left-[10%] bottom-[10%]', duration: 19, delay: 0.6, node: <WaveLines /> },
    { className: 'right-[26%] top-[52%] hidden xl:block', duration: 14, x: [0, 8, 0], node: <Diamond size={56} /> },
  ],
  [
    { className: '-left-10 top-[8%]', duration: 16, node: <Orbit /> },
    { className: 'right-[10%] top-[20%] hidden md:block', duration: 17, rotate: [0, -10, 0], node: <CornerFrame /> },
    { className: 'left-[6%] bottom-[16%]', duration: 13, y: [0, 12, 0], node: <Brackets /> },
    { className: 'right-[18%] bottom-[6%] hidden lg:block', duration: 20, node: <ZigZag /> },
  ],
  [
    { className: '-left-4 top-[16%]', duration: 18, y: [0, -16, 0], node: <Triangle size={130} /> },
    { className: 'right-[8%] top-[10%] hidden md:block', duration: 14, delay: 0.4, node: <Crosshair /> },
    { className: 'left-[14%] bottom-[8%]', duration: 16, rotate: [0, 8, 0], node: <PlusCircle /> },
    { className: 'right-[32%] bottom-[18%] hidden xl:block', duration: 12, node: <HorizontalRules /> },
  ],
]

const contactSets: ShapeConfig[][] = [
  [
    { className: '-right-12 top-[10%]', duration: 19, y: [0, -20, 0], node: <Rings size={240} r1={96} r2={72} /> },
    { className: 'left-[4%] bottom-[15%] hidden md:block', duration: 15, delay: 1, rotate: [0, 6, 0], node: <Envelope /> },
    { className: 'left-[20%] top-[8%] hidden lg:block', duration: 12, x: [0, 8, 0], node: <Rings size={56} r1={18} r2={10} /> },
    { className: 'right-[28%] bottom-[10%] hidden xl:block', duration: 17, node: <Star size={52} /> },
  ],
  [
    { className: '-right-8 top-[8%]', duration: 17, node: <Orbit /> },
    { className: 'left-[6%] bottom-[12%] hidden md:block', duration: 16, y: [0, 14, 0], node: <Envelope /> },
    { className: 'right-[14%] top-[38%]', duration: 14, rotate: [0, -8, 0], node: <Hexagon size={92} /> },
    { className: 'left-[24%] top-[14%] hidden lg:block', duration: 18, node: <WaveLines /> },
  ],
  [
    { className: '-right-10 top-[12%]', duration: 18, rotate: [0, 10, 0], node: <Crosshair size={100} /> },
    { className: 'left-[4%] bottom-[18%] hidden md:block', duration: 15, delay: 0.5, node: <GridDots cols={4} rows={3} /> },
    { className: 'right-[20%] bottom-[8%]', duration: 13, y: [0, -10, 0], node: <Envelope /> },
    { className: 'left-[18%] top-[6%] hidden xl:block', duration: 19, node: <PlusCircle /> },
  ],
  [
    { className: '-right-14 top-[6%]', duration: 20, y: [0, -18, 0], node: <Triangle size={150} /> },
    { className: 'left-[8%] bottom-[10%] hidden md:block', duration: 16, node: <Rings size={130} r1={50} r2={30} /> },
    { className: 'right-[12%] top-[48%]', duration: 14, x: [0, -8, 0], node: <Diamond size={68} /> },
    { className: 'left-[30%] bottom-[6%] hidden lg:block', duration: 17, rotate: [0, -6, 0], node: <CornerFrame /> },
  ],
]

const defaultSets: ShapeConfig[][] = [
  [
    { className: '-right-6 top-[12%]', duration: 18, y: [0, -14, 0], node: <Rings size={160} r1={64} r2={40} /> },
    { className: 'left-[6%] bottom-[10%] hidden md:block', duration: 16, delay: 0.7, rotate: [0, -6, 0], node: <CornerFrame /> },
    { className: 'right-[20%] top-[20%] hidden lg:block', duration: 14, node: <Star size={48} /> },
  ],
  [
    { className: '-right-8 top-[10%]', duration: 17, node: <Hexagon size={90} /> },
    { className: 'left-[4%] bottom-[14%] hidden md:block', duration: 15, y: [0, 12, 0], node: <WaveLines /> },
    { className: 'right-[16%] bottom-[8%]', duration: 19, node: <GridDots cols={3} rows={2} /> },
  ],
  [
    { className: '-right-10 top-[8%]', duration: 16, rotate: [0, 8, 0], node: <Orbit /> },
    { className: 'left-[8%] bottom-[12%] hidden md:block', duration: 18, node: <PlusCircle /> },
    { className: 'right-[24%] top-[16%] hidden lg:block', duration: 13, x: [0, -8, 0], node: <Diamond /> },
  ],
  [
    { className: '-right-4 top-[14%]', duration: 19, y: [0, -16, 0], node: <Crosshair /> },
    { className: 'left-[5%] bottom-[8%] hidden md:block', duration: 14, delay: 0.5, node: <ZigZag /> },
    { className: 'right-[18%] top-[42%] hidden lg:block', duration: 17, rotate: [0, -10, 0], node: <Triangle size={90} /> },
  ],
]

const patternSets: Record<PatternVariant, ShapeConfig[][]> = {
  hero: heroSets,
  about: aboutSets,
  skills: skillsSets,
  projects: projectsSets,
  services: servicesSets,
  contact: contactSets,
  default: defaultSets,
}

const SET_COUNT = 4
const PAGE_PATTERN_SEED = Math.floor(Math.random() * SET_COUNT * 997)

function pickPatternIndex(variant: PatternVariant, pageSeed: number) {
  const sets = patternSets[variant]
  const variantOffset = Object.keys(patternSets).indexOf(variant)
  return (pageSeed + variantOffset) % sets.length
}

export function sectionPatternVariant(sectionId: string): PatternVariant {
  if (sectionId in patternSets) {
    return sectionId as PatternVariant
  }
  return 'default'
}

export function SectionPatterns({ variant = 'default', className }: SectionPatternsProps) {
  const setIndex = pickPatternIndex(variant, PAGE_PATTERN_SEED)
  const shapes = patternSets[variant][setIndex]

  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <ShapeLayer shapes={shapes} />
    </div>
  )
}
