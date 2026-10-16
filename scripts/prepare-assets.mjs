import sharp from 'sharp'
import { mkdir, writeFile, readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const output = resolve('public/media')
await mkdir(output, { recursive: true })

/* mockups/asset-index.txt numbers every supplied photograph. Referring to
   images by that number keeps this script readable and makes it obvious
   which of the 44 originals ended up on the site. */
const index = Object.fromEntries(
  (await readFile(resolve('mockups/asset-index.txt'), 'utf8'))
    .trim().split(/\r?\n/)
    .map(line => line.match(/^(\d+):\s*(.+)$/))
    .filter(Boolean)
    .map(match => [Number(match[1]), match[2]]),
)

const photos = {
  // Concrete and sidewalk work
  sidewalk: 35, walkway: 10, driveway: 30, entrance: 34, pour: 15,
  'ramp-fence': 1, 'sidewalk-taped': 3, 'slab-wide': 5, 'driveway-garage': 6,
  'stone-wall-walk': 7, 'formwork-edge': 8, 'curved-walk': 9, 'side-passage': 11,
  'alley-walk': 12, 'retaining-walk': 13, 'manhole-apron': 14, 'stone-apron': 16,
  'street-barriers': 17, 'hoarding-walk': 18, 'gateway-apron': 20, 'pour-edge': 27,
  'gate-driveway': 29, 'ramp-formwork': 31, 'tree-pit-walk': 32, 'joint-detail': 33,
  'column-base': 36,
  // Masonry and blockwork
  masonry: 25, 'block-wall': 26,
  // Stair construction
  stairs: 42, 'stair-detail': 40, 'stair-progress': 39, 'stairwell-narrow': 21,
  'stair-opening': 37, 'stair-treads': 38, 'stair-blockwork': 41,
  // Groundwork
  prep: 2, crew: 4, mesh: 19, excavation: 43,
  // Plaza concrete and formwork, supplied 15 October
  'plaza-pour': 45, 'plaza-screed': 46, 'plaza-float': 47, 'plaza-cured': 48, 'plaza-formwork': 49, 'slab-formwork': 50,
  // Tile work
  'tile-band': 51, 'tile-ceiling': 52, 'tile-floor': 53, 'tile-membrane': 54,
  // Stone steps
  'stone-steps': 55, 'stone-steps-crew': 56, 'stone-steps-detail': 57,
  // Stair reconstruction, including a subway station flight
  'station-stairs': 58, 'station-stairs-before': 59, 'stair-rail': 60, 'stair-nosings': 61, 'stair-rebuilt': 62, 'stair-breakout': 63,
  // Groundwork
  'gateway-clearance': 64,
  // Commercial building construction, supplied 16 October
  'commercial-wall-forms': 65, 'commercial-deck': 66, 'commercial-wall-crew': 67, 'commercial-column': 68, 'commercial-columns': 69,
}

/* Every photograph is written at the three sizes the layout actually asks
   for. Only the four that run full-bleed in the home slider get a fourth: these are detailed
   phone photographs of gravel and concrete, so each extra size is expensive
   and nothing but the hero is ever displayed above 1200px. */
const WIDTHS = [400, 800, 1200]
const FULL_BLEED = new Set(['crew', 'sidewalk', 'masonry', 'stairs', 'commercial-deck', 'commercial-wall-forms'])
const QUALITY = { 400: 76, 800: 80, 1200: 78, 1600: 72 }

const manifest = []
for (const [name, number] of Object.entries(photos)) {
  const file = index[number]
  if (!file) throw new Error(`No entry ${number} in mockups/asset-index.txt for "${name}"`)
  const source = resolve('images', file)
  const metadata = await sharp(source).metadata()
  const widths = FULL_BLEED.has(name) ? [...WIDTHS, 1600] : WIDTHS
  await Promise.all(widths.map(width => sharp(source)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: QUALITY[width], effort: 6, smartSubsample: true })
    .toFile(resolve(output, `${name}-${width}.webp`))))
  manifest.push({ name, number, source: file, widths, width: metadata.width, height: metadata.height })
}

/* Logo. The supplied artwork is navy on transparent, which disappears on the
   dark interface, so a light variant is derived from the same raster: the navy
   wordmark remapped to concrete white, the emblem to the interface accent. */
const logoPath = resolve('mockups/v2/jevvy-logo-horizontal.png')
const logo = await sharp(logoPath).trim({ background: '#00000000', threshold: 10 }).toBuffer()
await sharp(logo).resize({ width: 900 }).webp({ lossless: true }).toFile(resolve(output, 'jevvy-logo.webp'))

const wide = await sharp(logo).resize({ width: 900 }).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
for (let i = 0; i < wide.data.length; i += 4) {
  if (wide.data[i + 3] === 0) continue
  const isEmblem = wide.data[i + 2] > 110
  wide.data.set(isEmblem ? [46, 147, 230] : [240, 242, 245], i)
}
const lightLogo = await sharp(wide.data, { raw: wide.info }).png().toBuffer()
await sharp(lightLogo).webp({ lossless: true }).toFile(resolve(output, 'jevvy-logo-light.webp'))

/* Icons, cut from the emblem in the approved logo. */
const logoMetadata = await sharp(logo).metadata()
const emblem = await sharp(logo).extract({ left: 0, top: 0, width: logoMetadata.height, height: logoMetadata.height }).toBuffer()
const icons = [
  ['favicon-16.png', 16, null], ['favicon-32.png', 32, null],
  ['icon-192.png', 192, null], ['icon-512.png', 512, null],
  ['apple-touch-icon.png', 180, '#0b2242'], ['icon-maskable-512.png', 512, '#0b2242'],
]
for (const [file, size, background] of icons) {
  const padding = background ? Math.round(size * 0.14) : 0
  let image = sharp(emblem).resize(size - padding * 2, size - padding * 2, { fit: 'contain', background: '#00000000' })
  if (background) image = image.extend({ top: padding, bottom: padding, left: padding, right: padding, background })
    .flatten({ background })
  await image.png().toFile(resolve('public', file))
}
await sharp(emblem).resize(64, 64).png().toFile(resolve(output, 'favicon.png'))

/* Social preview card: the hero photograph, darkened, with the light logo. */
const OG = { width: 1200, height: 630 }
const ogPhoto = await sharp(resolve('images', index[photos.crew])).rotate()
  .resize(OG.width, OG.height, { fit: 'cover', position: 'attention' })
  .modulate({ brightness: 0.52 }).toBuffer()
const ogScrim = Buffer.from(`<svg width="${OG.width}" height="${OG.height}" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0%" stop-color="#0a0d11" stop-opacity="0.94"/>
    <stop offset="62%" stop-color="#0a0d11" stop-opacity="0.68"/>
    <stop offset="100%" stop-color="#0b2242" stop-opacity="0.55"/>
  </linearGradient></defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect x="72" y="398" width="120" height="4" fill="#2e93e6"/>
  <rect x="0" y="${OG.height - 10}" width="${OG.width}" height="10" fill="#0065a8"/>
</svg>`)
const ogLogo = await sharp(lightLogo).resize({ width: 470 }).toBuffer()
await sharp(ogPhoto)
  .composite([{ input: ogScrim, top: 0, left: 0 }, { input: ogLogo, top: 232, left: 72 }])
  .jpeg({ quality: 88 }).toFile(resolve('public', 'og-image.jpg'))

await writeFile(resolve(output, 'asset-manifest.json'), JSON.stringify({
  logo: 'Adapted from the supplied logo; transparent PNG source in mockups/v2.',
  widths: WIDTHS,
  photos: manifest,
}, null, 2))

console.log(`Prepared ${manifest.length} original photographs at ${WIDTHS.join('/')}px, logo pair, icon set and social card.`)
