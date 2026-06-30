'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-pink-500">🚀 ZORAGO</h1>
          <nav className="flex gap-6">
            <button className="hover:text-pink-400">Home</button>
            <button className="hover:text-pink-400">Browse</button>
            <button className="hover:text-pink-400">Help</button>
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

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 ZORAGO. All rights reserved.</p>
          <p className="text-sm mt-2">Built in Addis Ababa 🇪🇹</p>
        </div>
      </footer>
    </main>
  )
        }
