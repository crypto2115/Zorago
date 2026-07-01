'use client'

import Link from 'next/link'
import NeonLogo from './components/NeonLogo'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="header-neon">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
              <div className="w-12 h-12">
                <NeonLogo size="sm" />
              </div>
              <h1 className="text-2xl font-bold gradient-green-text neon-glow">ZORAGO</h1>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-green-400 border-b-2 border-green-400 pb-1 font-bold">
              Home
            </Link>
            <Link href="/browse" className="text-gray-300 hover:text-green-400 transition">
              Browse
            </Link>
            <Link href="/settings" className="text-gray-300 hover:text-green-400 transition">
              Help
            </Link>
          </nav>
          <div className="flex gap-3">
            <button className="px-4 py-2 border-2 border-green-600/50 text-green-400 rounded-lg hover:bg-green-600/20 hover:border-green-600 transition font-bold">
              Login
            </button>
            <button className="btn-neon text-sm">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 text-center">
        {/* Logo */}
        <div className="mb-12 animate-fadeInUp">
          <NeonLogo size="xl" animated showText={true} />
        </div>

        {/* Title */}
        <div className="mb-8">
          <h2 className="text-6xl md:text-7xl font-black mb-6 gradient-green-text neon-glow-lg">
            Global 18+ Live Streaming Platform
          </h2>
          <p className="text-xl md:text-2xl text-green-400/80 mb-8">
            Connect • Stream • Earn 🎥
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <button className="btn-neon text-lg px-10 py-4 hover:scale-105 transition-transform">
            Start Streaming Now 🚀
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="card-neon">
            <div className="text-4xl mb-3">🌍</div>
            <p className="text-2xl font-bold text-green-400 mb-2">Global Community</p>
            <p className="text-gray-400">Streamers from 50+ countries</p>
          </div>
          <div className="card-neon">
            <div className="text-4xl mb-3">⚡</div>
            <p className="text-2xl font-bold text-green-400 mb-2">Live 24/7</p>
            <p className="text-gray-400">Always someone streaming</p>
          </div>
          <div className="card-neon">
            <div className="text-4xl mb-3">💰</div>
            <p className="text-2xl font-bold text-green-400 mb-2">Real Earnings</p>
            <p className="text-gray-400">Creators earn $1000s monthly</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h3 className="text-5xl font-bold text-center gradient-green-text mb-16 neon-glow-lg">
          Why Choose ZORAGO?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="card-neon group hover:shadow-neon-glow-lg transition">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🎥</div>
            <h4 className="text-2xl font-bold text-green-400 mb-4">Professional Streaming</h4>
            <p className="text-gray-400 leading-relaxed">
              Broadcast with crystal clear 1080p quality. Built-in chat, gifts, and monetization tools for creators.
            </p>
            <div className="mt-6 flex gap-2">
              <div className="w-2 h-2 rounded-full gradient-green"></div>
              <div className="w-2 h-2 rounded-full gradient-green"></div>
              <div className="w-2 h-2 rounded-full gradient-green"></div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="card-neon group hover:shadow-neon-glow-lg transition">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">💸</div>
            <h4 className="text-2xl font-bold text-green-400 mb-4">Earn Real Money</h4>
            <p className="text-gray-400 leading-relaxed">
              Get paid through tips, premium subscriptions, and brand partnerships. Withdraw directly to your bank.
            </p>
            <div className="mt-6 flex gap-2">
              <div className="w-2 h-2 rounded-full gradient-green"></div>
              <div className="w-2 h-2 rounded-full gradient-green"></div>
              <div className="w-2 h-2 rounded-full gradient-green"></div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="card-neon group hover:shadow-neon-glow-lg transition">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
            <h4 className="text-2xl font-bold text-green-400 mb-4">Safe & Secure</h4>
            <p className="text-gray-400 leading-relaxed">
              Age-verified community (18+). Advanced moderation, privacy controls, and fraud protection built-in.
            </p>
            <div className="mt-6 flex gap-2">
              <div className="w-2 h-2 rounded-full gradient-green"></div>
              <div className="w-2 h-2 rounded-full gradient-green"></div>
              <div className="w-2 h-2 rounded-full gradient-green"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h3 className="text-4xl font-bold text-center gradient-green-text mb-12 neon-glow">
          What Creators Say
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Sarah', role: 'Music Creator', quote: 'ZORAGO changed my life. I make $3000/month now!' },
            { name: 'Emma', role: 'Artist', quote: 'Best platform for real creators. Amazing community!' },
            { name: 'Jessica', role: 'Fitness Coach', quote: 'Easy to use and payouts are super fast!' },
          ].map((testimonial, idx) => (
            <div key={idx} className="card-neon">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full gradient-green flex items-center justify-center text-lg font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-green-400">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              <div className="mt-4 text-lg">⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="neon-border rounded-2xl p-12 text-center bg-green-600/5">
          <h3 className="text-4xl md:text-5xl font-bold text-green-400 mb-6 neon-glow-lg">
            Ready to Go Live?
          </h3>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of creators earning on ZORAGO today
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/browse">
              <button className="btn-neon px-10 py-4 text-lg w-full md:w-auto">
                Explore Streams 🔍
              </button>
            </Link>
            <button className="btn-neon-outline px-10 py-4 text-lg w-full md:w-auto">
              Create Account ✨
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-600/20 bg-black/80 py-16 mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <p className="font-bold text-green-400 mb-4">Platform</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/browse" className="hover:text-green-400 transition">Browse</Link></li>
                <li><a href="#" className="hover:text-green-400 transition">Become Creator</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-green-400 mb-4">Company</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">About</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-green-400 mb-4">Legal</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Safety</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-green-400 mb-4">Connect</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Twitter</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Discord</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-600/20 pt-8 text-center">
            <p className="text-gray-400 mb-2">&copy; 2024 ZORAGO. All rights reserved.</p>
            <p className="text-green-400/60 text-sm">Built in Addis Ababa 🇪🇹 with passion for creators</p>
          </div>
        </div>
      </footer>
    </main>
  )
                }
