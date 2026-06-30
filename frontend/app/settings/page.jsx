'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    privateProfile: false,
    emailUpdates: true,
    darkMode: true,
  })

  const toggleSetting = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

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
        </div>
      </header>

      {/* Settings Container */}
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Settings</h1>

        {/* Account Section */}
        <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Account</h2>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">Email Address</p>
                <p className="text-gray-400 text-sm">sarah@example.com</p>
              </div>
              <button className="px-4 py-2 border border-pink-600 rounded hover:bg-pink-600/20">
                Change
              </button>
            </div>

            <div className="border-t border-gray-700 pt-6 flex justify-between items-center">
              <div>
                <p className="font-bold">Password</p>
                <p className="text-gray-400 text-sm">Last changed 30 days ago</p>
              </div>
              <button className="px-4 py-2 border border-pink-600 rounded hover:bg-pink-600/20">
                Change
              </button>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Privacy</h2>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">Private Profile</p>
                <p className="text-gray-400 text-sm">Only approved followers can see your streams</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.privateProfile}
                  onChange={() => toggleSetting('privateProfile')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
              </label>
            </div>

            <div className="border-t border-gray-700 pt-6 flex justify-between items-center">
              <div>
                <p className="font-bold">Show Online Status</p>
                <p className="text-gray-400 text-sm">Let others see when you're online</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Notifications</h2>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">Push Notifications</p>
                <p className="text-gray-400 text-sm">Get alerts for followers and messages</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={() => toggleSetting('notifications')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
              </label>
            </div>

            <div className="border-t border-gray-700 pt-6 flex justify-between items-center">
              <div>
                <p className="font-bold">Email Updates</p>
                <p className="text-gray-400 text-sm">Receive weekly summaries and news</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.emailUpdates}
                  onChange={() => toggleSetting('emailUpdates')}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-900/20 border border-red-600/50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-red-400">Danger Zone</h2>
          
          <div className="space-y-4">
            <button className="w-full px-4 py-3 border border-red-600 rounded text-red-400 hover:bg-red-600/20 transition">
              Delete Account
            </button>
          </div>
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
