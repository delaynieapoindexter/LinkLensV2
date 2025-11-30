import CreatorGrid from '../../components/CreatorGrid'

export default function CreatorsPage() {
  return (
    <div className="pt-8">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">Explore creators</h1>
          <p className="mt-2 text-sm text-white/70 max-w-xl">
            Browse photographers, videographers and models from anywhere. This is sample data for now —
            later, these cards will be powered by real profiles.
          </p>
        </div>
        <div className="text-xs text-white/60">
          Roles:{' '}
          <span className="font-medium text-white/90">
            Photographers • Videographers • Models
          </span>
        </div>
      </header>

      <CreatorGrid />
    </div>
  )
}
