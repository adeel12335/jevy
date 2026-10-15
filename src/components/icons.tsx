import { BrickWall, CircleParking, Footprints, Hospital, Landmark, Layers2, School, TrainFront } from 'lucide-react'
import type { ComponentType, ReactNode } from 'react'

export type IconProps = { size?: number; strokeWidth?: number }

/* No icon in any set draws a flight of steps the way these sites are
   built, so this one is drawn to the profile in the stair photographs. */
export function StairsIcon({ size = 24, strokeWidth = 1.6 }: IconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19h4v-4h4v-4h4V7h4v12Z" />
  </svg>
}

export const tradeIcons: ComponentType<IconProps>[] = [Layers2, BrickWall, TrainFront]

/* One mark per kind of site in src/data.ts `sectors`. */
export const sectorIcons: Record<'museum' | 'school' | 'hospital' | 'sidewalk' | 'parking' | 'station', ComponentType<IconProps>> = {
  museum: Landmark,
  school: School,
  hospital: Hospital,
  sidewalk: Footprints,
  parking: CircleParking,
  station: TrainFront,
}

/* Lucide carries no brand marks, so the four networks the company is on are
   drawn here in the same stroke as the rest of the icon set. */
function Brand({ size = 20, strokeWidth = 1.7, children }: IconProps & { children: ReactNode }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
}

export function InstagramIcon(props: IconProps) {
  return <Brand {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
  </Brand>
}

export function FacebookIcon(props: IconProps) {
  return <Brand {...props}>
    <path d="M17 3h-2.5A4.5 4.5 0 0 0 10 7.5V10H7v4h3v7h4v-7h3l1-4h-4V7.5a1 1 0 0 1 1-1H17Z" />
  </Brand>
}

export function LinkedInIcon(props: IconProps) {
  return <Brand {...props}>
    <path d="M16 8.5a5.5 5.5 0 0 1 5.5 5.5v7h-4v-7a1.5 1.5 0 0 0-3 0v7h-4v-7A5.5 5.5 0 0 1 16 8.5Z" />
    <rect x="2.5" y="9" width="4" height="12" />
    <circle cx="4.5" cy="4.5" r="2" />
  </Brand>
}

export function TikTokIcon(props: IconProps) {
  return <Brand {...props}>
    <path d="M13.5 3v12.5a4 4 0 1 1-4-4" />
    <path d="M13.5 3c0 3 2.2 5.2 5.2 5.2" />
  </Brand>
}

export const socialIcons: Record<string, ComponentType<IconProps>> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
  TikTok: TikTokIcon,
}
