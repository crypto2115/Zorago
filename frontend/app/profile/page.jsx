'use client'

import Link from 'next/link'

export default function Profile() {
  const user = {
    name: 'Sarah Johnson',
    bio: 'Music lover & Live streamer 🎵',
    followers: 2453,
    following: 342,
    totalEarnings: '$1,245.50',
    avatar: '👩'
  }

  const streams = [
    { id: 1, title: 'Music Session', date: '2024-01-15', earnings: '$45.20' },
    { id: 2, title: 'Acoustic Night', date: '2024-01-14', earnings: '$67.80' },
    { id: 3, title: 'Cover Songs', date: '2024-01-13', earnings: '$34.50' },
  ]

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
            <a href="#" className="hover:text-pink-400">Help</a>
          </nav>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-pink-600 rounded hover:bg-pink-600/20">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Profile Banner */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-900 h-32"></section>

      {/* Profile Info */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-gray-800/80 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="text-8xl">{user.avatar}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
              <p className="text-gray-400 mb-4">{user.bio}</p>
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-pink-400">{user.followers}</p>
                  <p className="text-gray-400 text-sm">Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-pink-400">{user.following}</p>
                  <p className="text-gray-400 text-sm">Following</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-400">{user.totalEarnings}</p>
                  <p className="text-gray-400 text-sm">Total Earnings</p>
                </div>
              </div>
            </div>
            <button className="px-6 py-2 bg-pink-600 rounded hover:bg-pink-700">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Recent Streams */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recent Streams</h2>
          <div className="space-y-4">
            {streams.map(stream => (
              <div key={stream.id} className="bg-gray-800/50 p-6 rounded-lg flex justify-between items-center hover:bg-gray-800 transition">
                <div>
                  <h3 className="text-xl font-bold">{stream.title}</h3>
                  <p className="text-gray-400 text-sm">{stream.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-green-400 font-bold text-lg">{stream.earnings}</p>
                  <button className="text-pink-400 hover:text-pink-300 text-sm mt-2">View Stats</button>
                </div>
              </div>
            ))}
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
