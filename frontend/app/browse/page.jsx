'use client'

import { useState } from 'react'
import Link from 'next/link'
import NeonLogo from '../components/NeonLogo'

export default function BrowseStreams() {
  const [streams] = useState([
    { id: 1, title: 'Music Session', streamer: 'Sarah', viewers: 342, category: 'Music', avatar: '🎵' },
    { id: 2, title: 'Chat & Coffee', streamer: 'Emma', viewers: 156, category: 'Chat', avatar: '☕' },
    { id: 3, title: 'Art Drawing', streamer: 'Alex', viewers: 89, category: 'Art', avatar: '🎨' },
    { id: 4, title: 'Fitness Live', streamer: 'Jessica', viewers: 423, category: 'Fitness', avatar: '💪' },
    { id: 5, title: 'Gaming Stream', streamer: 'Nina', viewers: 267, category: 'Gaming', avatar: '🎮' },
    { id: 6, title: 'Makeup Tutorial', streamer: 'Lisa', viewers: 521, category: 'Beauty', avatar: '💄' },
    { id: 7, title: 'Yoga Session', streamer: 'Maya', viewers: 198, category: 'Fitness', avatar: '🧘' },
    { id: 8, title: 'Cooking Show', streamer: 'Ana', viewers: 312, category: 'Lifestyle', avatar: '🍳' },
  ])

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('viewers')
  
  const categories = [
    { name: 'All', icon: '🌟', count: streams.length },
    { name: 'Music', icon: '🎵', count: streams.filter(s => s.category === 'Music').length },
    { name: 'Chat', icon: '💬', count: streams.filter(s => s.category === 'Chat').length },
    { name: 'Art', icon: '🎨', count: streams.filter(s => s.category === 'Art').length },
    { name: 'Fitness', icon: '💪', count: streams.filter(s => s.category === 'Fitness').length },
    { name: 'Gaming', icon: '🎮', count: streams.filter(s => s.category === 'Gaming').length },
    { name: 'Beauty', icon: '💄', count: streams.filter(s => s.category === 'Beauty').length },
    { name: 'Lifestyle', icon: '🍳', count: streams.filter(s => s.category === 'Lifestyle').length },
  ]

  let filteredStreams = selectedCategory === 'All' 
    ? streams 
    : streams.filter(s => s.category === selectedCategory)

  if (searchQuery) {
    filteredStreams = filteredStreams.filter(s => 
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.streamer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  filteredStreams = [...filteredStreams].sort((a, b) => {
    if (sortBy === 'viewers') return b.viewers - a.viewers
    if (sortBy === 'newest') return b.id - a.id
    return 0
  })

  const trendingStreams = [...streams].sort((a, b) => b.viewers - a.viewers).slice(0, 3)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="header-neon">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
              <div className="w-10 h-10">
                <NeonLogo size="sm" />
              </div>
              <h1 className="text-2xl font-bold gradient-green-text">ZORAGO</h1>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-300 hover:text-green-400 transition">Home</Link>
            <Link href="/browse" className="text-green-400 border-b-2 border-green-400 pb-1 font-bold">Browse</Link>
            <Link href="/settings" className="text-gray-300 hover:text-green-400 transition">Help</Link>
          </nav>
          <div className="flex gap-3">
            <button className="px-4 py-2 border-2 border-green-600/50 text-green-400 rounded-lg hover:bg-green-600/20 transition">Login</button>
            <button className="px-4 py-2 gradient-green text-black rounded-lg hover:opacity-90 transition font-bold">Sign Up</button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-green-900/20 to-green-800/10 border-b border-green-600/20 neon-border">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl animate-neon-pulse">🔥</span>
            <h2 className="text-2xl font-bold gradient-green-text neon-glow">Trending Now</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {trendingStreams.map((stream, idx) => (
              <div key={stream.id} className="flex-shrink-0 card-neon min-w-[240px] cursor-pointer transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold gradient-green-text">#{idx + 1}</span>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-green-400">{stream.title}</p>
                    <p className="text-xs text-gray-400 mt-1">👁️ {stream.viewers.toLocaleString()} viewers</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="text-xl font-bold gradient-green-text mb-6 neon-glow">Categories</h3>
            <div className="space-y-2">
              {categories.map(cat => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition ${
                    selectedCategory === cat.name
                      ? 'gradient-green text-black font-bold neon-glow'
                      : 'card-neon text-gray-300'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">{cat.icon}</span>
                    <span className="font-bold">{cat.name}</span>
                  </span>
                  <span className="bg-gray-700/50 px-2 py-1 rounded text-xs font-bold">{cat.count}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 neon-border rounded-lg p-4 bg-green-600/5">
              <p className="text-sm font-bold text-green-400 mb-2">💡 Pro Tip</p>
              <p className="text-xs text-gray-400">Follow your favorite streamers to never miss their live sessions</p>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search streams or streamers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border-2 border-green-600/30 rounded-lg focus:outline-none focus:border-green-500 transition text-white placeholder-gray-500"
              />
              <span className="absolute right-4 top-3.5 text-green-400 text-xl">🔍</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-gray-800/50 border-2 border-green-600/30 rounded-lg focus:outline-none focus:border-green-500 text-white font-bold cursor-pointer"
            >
              <option value="viewers">Most Viewed</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-6">
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition font-bold flex items-center gap-2 ${
                  selectedCategory === cat.name
                    ? 'gradient-green text-black'
                    : 'card-neon'
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center mb-6">
            <p className="text-green-400 font-bold">
              {filteredStreams.length} {filteredStreams.length === 1 ? 'stream' : 'streams'} found
            </p>
            <p className="text-sm text-gray-500">
              {selectedCategory !== 'All' && `Category: ${selectedCategory}`}
            </p>
          </div>

          {filteredStreams.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredStreams.map(stream => (
                <div 
                  key={stream.id} 
                  className="group neon-border rounded-2xl overflow-hidden hover:border-green-500 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-neon-glow-lg"
                >
                  <div className="relative h-48 bg-gradient-to-br from-green-600 via-green-700 to-green-800 flex items-center justify-center overflow-hidden">
                    <div className="text-7xl group-hover:scale-125 transition-transform duration-300 drop-shadow-2xl">
                      {stream.avatar}
                    </div>

                    <div className="absolute top-3 right-3 bg-red-600 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg neon-glow">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      LIVE
                    </div>

                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 font-bold">
                      <span>👁️</span>
                      <span>{stream.viewers.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-900/50">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-green-400 transition text-white line-clamp-2">
                      {stream.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-xs font-bold text-black">
                        {stream.streamer[0]}
                      </div>
                      <span className="text-gray-300 text-sm font-bold">{stream.streamer}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold border border-green-600/40">
                        {stream.category}
                      </span>
                      <button className="text-green-400 hover:text-green-300 transition font-bold text-sm">
                        ♥️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-7xl mb-6">😢</p>
              <p className="text-2xl font-bold text-green-400 mb-2">No streams found</p>
              <p className="text-gray-400 text-lg">Try a different search or category</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
                className="mt-6 btn-neon"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <footer className="border-t border-green-600/20 bg-black/80 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-green-400 mb-3">Discover</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Categories</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Trending</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Following</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-green-400 mb-3">Creator</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Go Live</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Earnings</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Tools</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-green-400 mb-3">Support</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Help Center</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Contact</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Report</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-green-400 mb-3">Community</p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-green-400 transition">Discord</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Twitter</a></li>
                <li><a href="#" className="hover:text-green-400 transition">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-600/20 pt-6">
            <p className="text-gray-400 mb-2">&copy; 2024 ZORAGO. All rights reserved.</p>
            <p className="text-green-400/60 text-sm">Built in Addis Ababa 🇪🇹 with passion for creators</p>
          </div>
        </div>
      </footer>
    </main>
  )
                }
