'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Profile() {
  const [activeTab, setActiveTab] = useState('streams')
  const [followerTab, setFollowerTab] = useState('followers')
  
  const user = {
    id: 'sarah_music',
    name: 'Sarah Johnson',
    bio: '🎵 Music lover & Live streamer | 18+ | Ethiopia 🇪🇹',
    avatar: '👩',
    coverImage: 'from-pink-600 to-purple-600',
    followers: 2453,
    following: 342,
    totalEarnings: 1245.50,
    monthlyEarnings: 312.75,
    totalStreams: 45,
    totalHours: 187,
    joinDate: 'Joined January 2024',
    verified: true,
    badge: 'Top Creator',
  }

  const stats = [
    { label: 'Followers', value: user.followers, icon: '👥', color: 'pink' },
    { label: 'Following', value: user.following, icon: '➕', color: 'purple' },
    { label: 'Streams', value: user.totalStreams, icon: '🎥', color: 'blue' },
    { label: 'Total Hours', value: user.totalHours, icon: '⏱️', color: 'yellow' },
  ]

  const streams = [
    { id: 1, title: 'Music Session Live', date: '2024-01-15', duration: '2h 15m', earnings: 45.20, viewers: 342 },
    { id: 2, title: 'Acoustic Night Performance', date: '2024-01-14', duration: '1h 45m', earnings: 67.80, viewers: 456 },
    { id: 3, title: 'Cover Songs Compilation', date: '2024-01-13', duration: '3h 20m', earnings: 34.50, viewers: 267 },
    { id: 4, title: 'Live Q&A Session', date: '2024-01-12', duration: '1h 30m', earnings: 28.90, viewers: 189 },
    { id: 5, title: 'Music Production Tips', date: '2024-01-11', duration: '2h 05m', earnings: 52.15, viewers: 398 },
  ]

  const followers = [
    { id: 1, name: 'Emma Wilson', avatar: '👧', verified: false },
    { id: 2, name: 'Alex Morgan', avatar: '🧑', verified: true },
    { id: 3, name: 'Jessica Lee', avatar: '👩', verified: false },
    { id: 4, name: 'David Brown', avatar: '👨', verified: true },
  ]

  const earningsData = [
    { day: 'Mon', amount: 45 },
    { day: 'Tue', amount: 62 },
    { day: 'Wed', amount: 38 },
    { day: 'Thu', amount: 75 },
    { day: 'Fri', amount: 89 },
    { day: 'Sat', amount: 92 },
    { day: 'Sun', amount: 71 },
  ]

  const maxEarnings = Math.max(...earningsData.map(d => d.amount))

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="border-b bor
