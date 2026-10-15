import { useRef, useState } from 'react'
import { Play } from 'lucide-react'
import { clips, type Clip } from '../data'
import { Lines, Reveal } from './ui'

const length = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`

/* One clip: the poster with a play button over it until it starts, then the
   browser's own controls. The controls are always in the markup, so the clip
   plays without scripting too; nothing downloads until the reader asks. */
function Footage({ clip, onPlay }: { clip: Clip; onPlay: (video: HTMLVideoElement) => void }) {
  const video = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)

  return <figure className="clip">
    <div className={`clip-frame${started ? ' is-playing' : ''}`}>
      <video
        ref={video}
        className="clip-video"
        poster={`/media/video/${clip.id}-poster.webp`}
        preload="none"
        playsInline
        controls
        width={960}
        height={541}
        onPlay={() => { setStarted(true); if (video.current) onPlay(video.current) }}
        aria-label={clip.title}
      >
        <source src={`/media/video/${clip.id}.mp4`} type="video/mp4" />
      </video>
      <span className="clip-shade" aria-hidden="true" />
      {started ? null : <button type="button" className="clip-play" onClick={() => video.current?.play().catch(() => {})}>
        <Play size={24} aria-hidden="true" />
        <span>Play<span className="sr-only">: {clip.title}</span> · {length(clip.seconds)}</span>
      </button>}
    </div>
    <figcaption>
      <span className="clip-meta">{clip.category} · {length(clip.seconds)}</span>
      <strong>{clip.title}</strong>
      <p>{clip.description}</p>
    </figcaption>
  </figure>
}

export function SiteVideos() {
  const playing = useRef<HTMLVideoElement | null>(null)
  const onPlay = (video: HTMLVideoElement) => {
    if (playing.current && playing.current !== video) playing.current.pause()
    playing.current = video
  }

  return <section id="videos" className="section section--panel section-anchor" aria-labelledby="videos-title">
    <div className="container">
      <Reveal className="section-head">
        <div>
          <p className="eyebrow">On site</p>
          <h2 id="videos-title"><Lines text={['Watch the work', 'go in.']} accent={1} /></h2>
        </div>
        <p className="lede">Four short clips filmed on our own sites: a plaza slab placed and sealed, and stone treads lifted in and set on the flight.</p>
      </Reveal>
      <div className="clip-grid">
        {clips.map((clip, index) => <Reveal key={clip.id} delay={index * 0.06}>
          <Footage clip={clip} onPlay={onPlay} />
        </Reveal>)}
      </div>
    </div>
  </section>
}
