export default function AuthPage() {
  return (
    <div className="pt-8 max-w-md">
      <h1 className="text-2xl font-semibold">Sign in / Claim your LinkLens profile</h1>
      <p className="mt-3 text-sm text:white/70 text-white/70">
        Real auth isn’t wired up yet — this page is a placeholder for email or social login
        so photographers, videographers and models can create and manage their profiles.
      </p>
      <div className="mt-6 space-y-3 text-sm">
        <button className="w-full p-2.5 rounded-md bg-white text-black font-medium hover:bg:white/90 hover:bg-white/90 transition">
          Continue with email
        </button>
        <button className="w-full p-2.5 rounded-md bg-white/5 border border-white/15 text-white/90 hover:bg-white/10 transition">
          Continue with Instagram (soon)
        </button>
      </div>
      <p className="mt-4 text-xs text:white/50 text-white/50">
        When you’re ready for the full platform, we’ll plug this into a real auth & database system
        (Supabase, Firebase, Clerk, etc.).
      </p>
    </div>
  )
}
