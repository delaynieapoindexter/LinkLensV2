'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function LinkLensLanding() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL
      if (!scriptURL) {
        setStatus('Form not configured yet. Add NEXT_PUBLIC_GOOGLE_SCRIPT_URL in Vercel settings.')
        return
      }
      const res = await fetch(scriptURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })
      if (res.ok) {
        setStatus('You’re on the waitlist! 🎉')
        setName('')
        setEmail('')
      } else {
        const text = await res.text()
        setStatus('Error: ' + res.status + ' ' + text)
      }
    } catch (err) {
      setStatus('Network error: ' + err.message)
    }
  }

  return (
    <div className="pt-8">
      {/* Hero */}
      <section className="grid gap-8 md:grid-cols-[1.4fr_1fr] items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Pre-launch • Creator marketplace</p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
            The place where photographers, videographers & models actually find each other.
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/70 max-w-xl">
            LinkLens helps creators get booked and collaborate worldwide — no more lost DMs,
            random group chats, or “any photographers free today?” stories.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/60">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              🌍 Global — not tied to one city
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              📸 Photographers • 🎥 Videographers • 🧍‍♀️ Models
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              ✉️ Built for real bookings, not clout
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <Link
              href="/creators"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg:white text-black bg-white text-sm font-medium hover:bg-white/90 transition"
            >
              Explore creators
            </Link>
            <Link
              href="/auth"
              className="text-sm text-white/70 hover:text-white/100 underline-offset-4 hover:underline"
            >
              I’m a creator — claim my profile
            </Link>
          </div>
        </div>

        {/* Waitlist card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <h2 className="text-lg font-medium">Join the early access waitlist</h2>
          <p className="mt-1 text-xs text-white/70">
            Drop your info and we’ll let you know when profiles & bookings go live.
          </p>
          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <input
              className="w-full p-2.5 rounded-md bg-black/30 border border-white/15 text-sm outline-none focus:ring-2 focus:ring-white/40"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="w-full p-2.5 rounded-md bg-black/30 border border-white/15 text-sm outline-none focus:ring-2 focus:ring-white/40"
              placeholder="you@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full p-2.5 rounded-md bg-white text-black text-sm font-medium hover:bg-white/90 transition"
            >
              Join waitlist
            </button>
          </form>
          <div className="mt-2 text-xs text-white/70 min-h-[1.25rem]">
            {status}
          </div>
          <p className="mt-3 text-[11px] text-white/50">
            No spam. We’ll only email about LinkLens launch and early creator perks.
          </p>
        </div>
      </section>

      {/* How it works preview */}
      <section className="mt-12 grid gap-4 md:grid-cols-3 text-sm">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs uppercase text-white/50">1. Profiles</div>
          <div className="mt-1 font-medium">Show who you are & what you shoot.</div>
          <p className="mt-1 text-white/70">
            Build a clean profile with portfolio, role (photographer / videographer / model), travel plans & rates.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs uppercase text-white/50">2. Discovery</div>
          <div className="mt-1 font-medium">Search the people you actually need.</div>
          <p className="mt-1 text-white/70">
            Filter by role, style and location — from local collabs to global trips.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs uppercase text-white/50">3. Bookings</div>
          <div className="mt-1 font-medium">Message & lock in the shoot.</div>
          <p className="mt-1 text:white/70 text-white/70">
            Centralized messages and booking requests instead of scattered DMs.
          </p>
        </div>
      </section>
    </div>
  )
}

