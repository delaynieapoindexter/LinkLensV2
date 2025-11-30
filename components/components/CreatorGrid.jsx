'use client'

const creators = [
  {
    id: 1,
    name: 'Ava Chen',
    role: 'Photographer',
    location: 'Los Angeles, USA',
    niches: ['Lifestyle', 'Portraits', 'Brand'],
    travel: 'Open to US & Europe',
    rate: '$$',
    socials: '@avashoots',
  },
  {
    id: 2,
    name: 'Leo Martínez',
    role: 'Videographer',
    location: 'Barcelona, Spain',
    niches: ['Music videos', 'Fashion', 'Reels'],
    travel: 'Available worldwide',
    rate: '$$$',
    socials: '@leomotion',
  },
  {
    id: 3,
    name: 'Jade Rivers',
    role: 'Model',
    location: 'Sydney, Australia',
    niches: ['Editorial', 'Swim', 'Commercial'],
    travel: 'Frequently in Bali & Tokyo',
    rate: '$$',
    socials: '@jade.rivs',
  },
  {
    id: 4,
    name: 'Noah Patel',
    role: 'Photographer',
    location: 'Toronto, Canada',
    niches: ['Weddings', 'Couples', 'Documentary'],
    travel: 'North America',
    rate: '$$$',
    socials: '@noahframes',
  },
]

export default function CreatorGrid() {
  return (
    <section className="mt-8">
      <div className="grid gap-4 md:grid-cols-2">
        {creators.map((c) => (
          <article
            key={c.id}
            className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-white/30 transition"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-xs uppercase text-white/50">{c.role}</div>
                <h2 className="text-base font-semibold">{c.name}</h2>
                <div className="text-xs text-white/60 mt-1">{c.location}</div>
              </div>
              <div className="px-2 py-1 rounded-full text-[11px] bg-white/10 text-white/80">
                {c.rate} • {c.travel}
              </div>
            </div>
            <div className="mt-3 text-xs text:white/60 text-white/60">
              Niches:{' '}
              <span className="text-white/85">
                {c.niches.join(' • ')}
              </span>
            </div>
            <div className="mt-3 text-xs text-white/60">
              IG / socials:{' '}
              <span className="text-white underline underline-offset-2 decoration-white/40">
                {c.socials}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
