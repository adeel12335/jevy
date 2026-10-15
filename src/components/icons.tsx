import { BrickWall, Layers2 } from 'lucide-react'
import type { ComponentType } from 'react'

export type IconProps = { size?: number; strokeWidth?: number }

/* No icon in any set draws a flight of steps the way these sites are
   built, so this one is drawn to the profile in the stair photographs. */
export function StairsIcon({ size = 24, strokeWidth = 1.6 }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19h4v-4h4v-4h4V7h4v12Z" />
  </svg>
}

export const tradeIcons: ComponentType<IconProps>[] = [Layers2, BrickWall, StairsIcon]
