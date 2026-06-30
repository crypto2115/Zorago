'use client'

import { useState } from 'react'
import Link from 'next/link'

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
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-black/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent cursor-pointer">
              🚀 ZORAGO
            </h1>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-pink-400 transition">Home</Link>
            <Link href="/browse" className="text-pink-400 border-b-2 border-pink-400 pb-1">Browse</Link>
            <Link href="/settings" className="hover:text-pink-400 transition">Help</Link>
          </nav>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-pink-600 rounded-lg hover:bg-pink-600/20 transition">
              Login
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg hover:opacity-90 transition">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Trending Banner */}
      <section className="bg-gradient-to-r from-pink-900/30 to-purple-9
