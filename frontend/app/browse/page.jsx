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
    { id: 9, title: 'Dance Performance', streamer: 'Luna', viewers: 445, category: 'Music', avatar: '💃' },
    { id: 10, title: 'Photography Tips', streamer: 'Zoe', viewers: 234, category: 'Art', avatar: '📸' },
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
      {/* Header */}
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
            <Link href="/" className="text-gray-300 hover:text-green-400 transition">
              Home
            </Link>
            <Link href="/browse" className="text-green-400 border-b-2 border-green-400 pb-1 font-bold">
              Browse
            </Link>
            <Link href="/settings" className="text-gray-300 hover:text-green-400 transition">
              Help
            </Link>
          </nav>
          <div className="flex gap-3">
            <button className="px-4 py-2 border-2 border-green-600/50 text-green-400 rounded-lg hover:bg-green-600/20 transition">
              Login
            </button>
            <button className="px-4 py-2 gradient-green text-black rounded-lg hover:opacity-90 transition font-bold">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Trending Banner */}
      <section className="bg-gradient-to-r from-green-900/20 to-green-800/10 border-b border-green-600/20 neon-border">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl animate-neon-pulse">🔥</span>
            <h2 className="text-2xl font-bold gradient-green-text neon-glow">Trending Now</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scroll-smooth">
            {trendingStreams.map((stream, idx) => (
              <div 
                key={stream.id} 
                className="flex-shrink-0 card-neon min-w-[240px] cursor-pointer transform hover:scale-105 transition-transform"
              >
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar */}
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

            {/* Pro Tip */}
            <div className="mt-8 neon-border rounded-lg p-4 bg-green-600/5">
              <p className="text-sm font-bold text-green-400 mb-2">💡 Pro Tip</p>
              <p className="text-xs text-gray-400">Follow your favorite streamers to never miss their live sessions</p>
            </div>
          </div>
        </aside>

        {/* Stream Grid */}
