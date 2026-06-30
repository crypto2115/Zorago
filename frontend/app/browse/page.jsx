'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BrowseStreams() {
  const [streams] = useState([
    { id: 1, title: 'Music Session', streamer: 'Sarah', viewers: 342, category: 'Music' },
    { id: 2, title: 'Chat & Coffee', streamer: 'Emma', viewers: 156, category: 'Chat' },
    { id: 3, title: 'Art Drawing', streamer: 'Alex', viewers: 89, category: 'Art' },
    { id: 4, title: 'Fitness Live', streamer: 'Jessica', viewers: 423, category: 'Fitness' },
    { id: 5, title: 'Gaming Stream', streamer: 'Nina', viewers: 267, category: 'Gaming' },
    { id: 6, title: 'Makeup Tutorial', streamer: 'Lisa', viewers: 521, category: 'Beauty' },
  ])

  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', 'Music', 'Chat', 'Art', 'Fitness', 'Gaming', 'Beauty']
  const filteredStreams = selectedCategory === 'All' 
    ? streams 
    : streams.filter(s => s.category === selectedCategory)

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
            <Link href="/browse" className="text-pink-400 border-b-2 border-pink-400">Browse</Link>
            <a href="#" className="hover:text-pink-400">Help</a>
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

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Browse Live Streams</h2>
        <div className="flex gap-3 overflow-x-auto pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded whitespace-nowrap transition ${
                selectedCategory === cat
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Streams Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStreams.map(stream => (
            <div key={stream.id} className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition cursor-pointer">
              {/* Stream Thumbnail */}
              <div className="relative h-40 bg-gradient-to-br from-pink-600 to-pink-900 flex items-center justify-center">
                <div className="text-6xl">🎥</div>
                <div className="absolute top-2 right-2 bg-red-600 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  LIVE
                </div>
              </div>

              {/* Stream Info */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{stream.title}</h3>
                <p className="text-gray-400 text-sm mb-3">Streamer: {stream.streamer}</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-400 text-sm">👁️ {stream.viewers} viewers</span>
                  <span className="bg-pink-600/20 text-pink-400 px-3 py-1 rounded text-sm">
                    {stream.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black/50 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 ZORAGO. All rights reserved.</p>
          <p className="text-sm mt-2">Built in Addis Ababa 🇪🇹</p>
        </div>
      </footer>
    </main>
  )
}
