'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-pink-500">🚀 ZORAGO</h1>
            <nav className="flex gap-6 text-white">
              <Link href="/" className="hover:text-pink-400">Home</Link>
              <Link href="/browse" className="hover:text-pink-400">Browse</Link>
              <Link href="/settings" className="hover:text-pink-400">Help</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-4">
        <h2 className="text-5xl font-bold text-white mb-4">
          Global 18+ Live Streaming Platform
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Connect, stream, and earn with ZORAGO
        </p>
        <button className="px-8 py-3 bg-pink-600 text-white font-bold rounded hover:bg-pink-700">
          Start Streaming
        </button>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center text-white mb-12">Why ZORAGO?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded text-center">
            <div className="text-4xl mb-4">🎥</div>
            <h4 className="text-xl font-bold text-white mb-2">Live Streaming</h4>
            <p className="text-gray-400">Broadcast to thousands</p>
          </div>
          <div className="bg-gray-800 p-6 rounded text-center">
            <div className="text-4xl mb-4">💰</div>
            <h4 className="text-xl font-bold text-white mb-2">Earn Money</h4>
            <p className="text-gray-400">Get tips & build income</p>
          </div>
          <div className="bg-gray-800 p-6 rounded text-center">
            <div className="text-4xl mb-4">👥</div>
            <h4 className="text-xl font-bold text-white mb-2">Safe Community</h4>
            <p className="text-gray-400">Age-verified & secure</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 text-center text-gray-400">
        <p>&copy; 2024 ZORAGO. All rights reserved.</p>
        <p className="text-sm mt-2">Built in Addis Ababa 🇪🇹</p>
      </footer>
    </main>
  )
}
