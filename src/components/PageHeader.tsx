import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'
import { Lines, Photo, Setout } from './ui'

export type Crumb = { name: string; path: string }

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return <nav className="crumbs" aria-label="Breadcrumb">
    <ol>
      <li><Link to="/">Home</Link></li>
      {trail.map((crumb, index) => <li key={crumb.path}>
        <ChevronRight size={13} aria-hidden="true" />
        {index === trail.length - 1
          ? <span aria-current="page">{crumb.name}</span>
          : <Link to={crumb.path}>{crumb.name}</Link>}
      </li>)}
    </ol>
  </nav>
}

/* The header every page below the home page opens with. Same material as the
   home hero — photograph, scrim, set-out lines — at about half the height, so
   a detail page reads as part of the same building rather than a sub-site. */
export function PageHeader({ eyebrow, title, lede, trail, image, imageAlt, actions, compact = false }: {
  eyebrow: string
  title: string[]
  lede?: ReactNode
  trail: Crumb[]
  image?: string
  imageAlt?: string
  actions?: ReactNode
  compact?: boolean
}) {
  return <header className={`page-head${image ? ' page-head--photo' : ''}${compact ? ' page-head--compact' : ''}`}>
    {image
      ? <div className="page-head-media">
          <Photo id={image} alt={imageAlt ?? ''} priority sizes="100vw" />
          <div className="page-head-scrim" />
          <Setout />
        </div>
      : <Setout />}
    <div className="container page-head-inner">
      <Breadcrumbs trail={trail} />
      <p className="eyebrow">{eyebrow}</p>
      <h1><Lines text={title} /></h1>
      {lede ? <div className="page-head-lede">{lede}</div> : null}
      {actions ? <div className="page-head-actions">{actions}</div> : null}
    </div>
  </header>
}
