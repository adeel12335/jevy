import { spawnSync } from 'node:child_process'
import { mkdir, rm, stat, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import sharp from 'sharp'

/* Site footage, supplied as phone clips. Each is encoded once for the web —
   same frame size, a tighter bitrate, mono sound and the index moved to the
   front so playback starts before the whole file has arrived — and given a
   poster frame. Needs ffmpeg and ffprobe on PATH; run it only when the clips
   change, its output is committed. */
const clips = {
  'plaza-pour': { file: 'WhatsApp Video 2026-10-15 at 5.43.30 PM (2).mp4', poster: 0.12 },
  'plaza-seal': { file: 'WhatsApp Video 2026-10-15 at 5.43.31 PM.mp4', poster: 0.1 },
  'stone-steps-set': { file: 'WhatsApp Video 2026-10-15 at 5.43.30 PM.mp4', poster: 0.5 },
  'stone-steps-lift': { file: 'WhatsApp Video 2026-10-15 at 5.43.30 PM (1).mp4', poster: 0.5 },
  // Commercial building construction, portrait clips supplied 16 October
  'commercial-deck-site': { file: 'WhatsApp Video 2026-10-16 at 5.18.02 PM (1).mp4', poster: 0.5 },
  'commercial-pour-night': { file: 'WhatsApp Video 2026-10-16 at 5.18.02 PM (2).mp4', poster: 0.5 },
  'commercial-deck-crew': { file: 'WhatsApp Video 2026-10-16 at 5.18.02 PM.mp4', poster: 0.15 },
}

const output = resolve('public/media/video')
await mkdir(output, { recursive: true })

const run = (command, args) => {
  const result = spawnSync(command, args, { encoding: 'utf8' })
  if (result.error) throw new Error(`${command} is not available: ${result.error.message}`)
  if (result.status !== 0) throw new Error(`${command} ${args.join(' ')}\n${result.stderr}`)
  return result.stdout.trim()
}

const manifest = []
for (const [name, clip] of Object.entries(clips)) {
  const source = resolve('videos', clip.file)
  const seconds = Number(run('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', source]))
  const [width, height] = run('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', source]).split(',').map(Number)

  const video = resolve(output, `${name}.mp4`)
  run('ffmpeg', ['-y', '-v', 'error', '-i', source,
    '-vf', "scale='min(960,iw)':-2",
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '29', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    '-c:a', 'aac', '-b:a', '80k', '-ac', '1',
    video])

  const frame = resolve(output, `${name}-frame.png`)
  run('ffmpeg', ['-y', '-v', 'error', '-ss', String(seconds * clip.poster), '-i', source, '-frames:v', '1', frame])
  await sharp(frame).resize({ width: 960, withoutEnlargement: true }).webp({ quality: 78, effort: 6 }).toFile(resolve(output, `${name}-poster.webp`))
  await rm(frame)

  const bytes = (await stat(video)).size
  manifest.push({ name, source: clip.file, seconds: Math.round(seconds), width, height, bytes })
  console.log(`${name}: ${Math.round(seconds)}s, ${width}x${height}, ${Math.round(bytes / 1024)} KB`)
}

await writeFile(resolve(output, 'manifest.json'), JSON.stringify({ clips: manifest }, null, 2))
console.log(`Prepared ${manifest.length} clips with posters.`)
