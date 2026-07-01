'use client'

import Link from 'next/link'
import { useState } from 'react'
import NeonLogo from '../components/NeonLogo'

export default function Profile() {
  const [activeTab, setActiveTab] = useState('streams')
  const [followerTab, setFollowerTab] = useState('followers')
  
  const user = {
    id: 'sarah_music',
    name: 'Sarah Johnson',
    bio: '🎵 Music lover & Live streamer | 18+ | Ethiopia 🇪🇹',
    avatar: '👩',
    coverImage: 'from-green-600 to-green-800',
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
    { label: 'Followers', value: user.followers, icon: '👥', color: 'green' },
    { label: 'Following', value: user.following, icon: '➕', color: 'green' },
    { label: 'Streams', value: user.totalStreams, icon: '🎥', color: 'green' },
    { label: 'Total Hours', value: user.totalHours, icon: '⏱️', color: 'green' },
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
            <Link href="/browse" className="text-gray-300 hover:text-green-400 transition">Browse</Link>
            <Link href="/settings" className="text-gray-300 hover:text-green-400 transition">Help</Link>
          </nav>
          <button className="px-6 py-2 gradient-green text-black rounded-lg hover:opacity-90 transition font-bold">
            Go Live
          </button>
        </div>
      </header>

      <div>
        <div className={`h-48 bg-gradient-to-r ${user.coverImage}`}></div>

        <div className="max-w-7xl mx-auto px-4 -mt-24 relative z-10">
          <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 neon-border">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center text-6xl neon-border shadow-lg">
                  {user.avatar}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold">{user.name}</h1>
                  {user.verified && (
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      ✓ Verified
                    </span>
                  )}
                  <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                    {user.badge}
                  </span>
                </div>
                <p className="text-gray-300 text-lg mb-3">{user.bio}</p>
                <p className="text-gray-500 text-sm mb-6">{user.joinDate}</p>

                <div className="flex flex-wrap gap-6 mb-6">
                  <div>
                    <p className="text-3xl font-bold text-green-400">{user.followers.toLocaleString()}</p>
                    <p className="text-gray-400 text-sm">Followers</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-green-400">{user.following.toLocaleString()}</p>
                    <p className="text-gray-400 text-sm">Following</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-green-400">${user.totalEarnings.toFixed(2)}</p>
                    <p className="text-gray-400 text-sm">Total Earnings</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="px-6 py-2 gradient-green text-black rounded-lg hover:opacity-90 transition font-bold">
                    Edit Profile
                  </button>
                  <button className="px-6 py-2 neon-border text-green-400 rounded-lg hover:bg-green-600/20 transition font-bold">
                    Share Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="card-neon">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold gradient-green-text">
                {typeof stat.value === 'number' && stat.value > 1000 ? `${(stat.value / 1000).toFixed(1)}K` : stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="card-neon">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Weekly Earnings</h2>
              <p className="text-gray-400">This week: ${earningsData.reduce((a, b) => a + b.amount, 0)}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-green-400">${user.monthlyEarnings.toFixed(2)}</p>
              <p className="text-gray-400 text-sm">This month</p>
            </div>
          </div>

          <div className="flex items-end gap-3 h-48">
            {earningsData.map((data, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div className="relative w-full h-full bg-gray-700/30 rounded-t-lg overflow-hidden">
                  <div
                    className="absolute bottom-0 w-full gradient-green transition-all duration-500 hover:opacity-80"
                    style={{ height: `${(data.amount / maxEarnings) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400">{data.day}</p>
                <p className="text-sm font-bold text-green-400">${data.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="border-b border-gray-800 mb-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('streams')}
              className={`px-4 py-3 border-b-2 font-bold transition ${
                activeTab === 'streams'
                  ? 'border-green-600 text-green-400'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              📹 Recent Streams
            </button>
            <button
              onClick={() => setActiveTab('followers')}
              className={`px-4 py-3 border-b-2 font-bold transition ${
                activeTab === 'followers'
                  ? 'border-green-600 text-green-400'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              👥 Followers & Following
            </button>
          </div>
        </div>

        {activeTab === 'streams' && (
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-400 font-bold">Stream</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-bold">Date</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-bold">Duration</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-bold">Viewers</th>
                    <th className="text-right py-3 px-4 text-gray-400 font-bold">Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  {streams.map(stream => (
                    <tr key={stream.id} className="border-b border-gray-800 hover:bg-gray-800/30 transition">
                      <td className="py-4 px-4 font-bold">{stream.title}</td>
                      <td className="py-4 px-4 text-gray-400">{stream.date}</td>
                      <td className="py-4 px-4 text-gray-400">{stream.duration}</td>
                      <td className="py-4 px-4">
                        <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">{stream.viewers}</span>
                      </td>
                      <td className="py-4 px-4 text-right text-green-400 font-bold">${stream.earnings.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'followers' && (
          <div>
            <div className="flex gap-4 mb-8 border-b border-gray-800">
              <button
                onClick={() => setFollowerTab('followers')}
                className={`px-4 py-2 font-bold ${
                  followerTab === 'followers' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400'
                }`}
              >
                Followers ({user.followers})
              </button>
              <button
                onClick={() => setFollowerTab('following')}
                className={`px-4 py-2 font-bold ${
                  followerTab === 'following' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400'
                }`}
              >
                Following ({user.following})
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {followers.map(follower => (
                <div key={follower.id} className="card-neon text-center">
                  <div className="text-5xl mb-3 flex justify-center">{follower.avatar}</div>
                  <p className="font-bold flex items-center justify-center gap-2 mb-3">
                    {follower.name}
                    {follower.verified && <span className="text-blue-400">✓</span>}
                  </p>
                  <button className="w-full px-3 py-2 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/40 transition text-sm font-bold">
                    {followerTab === 'followers' ? 'Unfollow' : 'Following'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <footer className="border-t border-green-600/20 bg-black/80 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 ZORAGO. All rights reserved.</p>
          <p className="text-sm mt-2 text-green-400/60">Built in Addis Ababa 🇪🇹</p>
        </div>
      </footer>
    </main>
  )
}
