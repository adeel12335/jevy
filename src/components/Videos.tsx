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
    <div className={`clip-frame${clip.portrait ? ' clip-frame--portrait' : ''}${started ? ' is-playing' : ''}`}>
      <video
        ref={video}
        className="clip-video"
        poster={`/media/video/${clip.id}-poster.webp`}
        preload="none"
        playsInline
        controls
        width={clip.portrait ? 478 : 960}
        height={clip.portrait ? 850 : 541}
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
        <p className="lede">Short clips filmed on our own sites: the slab at the Lehman College building stairs placed and sealed, stone treads lifted in and set, and a commercial building deck going up.</p>
      </Reveal>
      <div className="clip-grid">
        {clips.filter(clip => !clip.portrait).map((clip, index) => <Reveal key={clip.id} delay={index * 0.06}>
          <Footage clip={clip} onPlay={onPlay} />
        </Reveal>)}
      </div>
      <div className="clip-grid clip-grid--portrait">
        {clips.filter(clip => clip.portrait).map((clip, index) => <Reveal key={clip.id} delay={index * 0.06}>
          <Footage clip={clip} onPlay={onPlay} />
        </Reveal>)}
      </div>
    </div>
  </section>
}
