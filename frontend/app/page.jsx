'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold text-pink-500 cursor-pointer">🚀 ZORAGO</h1>
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-pink-400">Home</Link>
            <Link href="/browse" className="hover:text-pink-400">Browse</Link>
            <Link href="/settings" className="hover:text-pink-400">Help</Link>
          </nav>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-pink-600 rounded hover:bg-pink-600/20">
              Login
            </button>
            <button className="px-4 py-2 bg-pink-600 rounded hover:bg-pink-700">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold mb-4">
          Global 18+ Live Streaming Platform
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Connect, stream, and earn with ZORAGO
        </p>
        <button className="px-8 py-3 bg-pink-600 text-white font-bold rounded hover:bg-pink-700 text-lg">
          Start Streaming Now
        </button>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold mb-12 text-center">Why ZORAGO?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="text-4xl mb-4">🎥</div>
            <h4 className="text-xl font-bold mb-2">Live Streaming</h4>
            <p className="text-gray-400">Broadcast to thousands in real-time</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="text-4xl mb-4">💰</div>
            <h4 className="text-xl font-bold mb-2">Earn Money</h4>
            <p className="text-gray-400">Get tips and build your income</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="text-4xl mb-4">👥</div>
            <h4 className="text-xl font-bold mb-2">Safe Community</h4>
            <p className="text-gray-400">Age-verified & secure platform</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-pink-600 to-pink-900 rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-lg text-gray-100 mb-6">Join thousands of creators earning on ZORAGO</p>
          <div className="flex gap-4 justify-center">
            <Link href="/browse">
              <button className="px-8 py-3 bg-white text-pink-600 font-bold rounded hover:bg-gray-100">
                Browse Streams
              </button>
            </Link>
            <button className="px-8 py-3 border-2 border-white rounded hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/browse" className="hover:text-white">Browse</Link></li>
                <li><Link href="/profile" className="hover:text-white">Profile</Link></li>
                <li><a href="#" className="hover:text-white">Become Creator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Account</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Login</a></li>
                <li><a href="#" className="hover:text-white">Sign Up</a></li>
                <li><Link href="/settings" className="hover:text-white">Settings</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Email</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZORAGO. All rights reserved.</p>
            <p className="text-sm mt-2">Built in Addis Ababa 🇪🇹 | Made with ❤️</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
