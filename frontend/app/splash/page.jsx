'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import NeonLogo from '../components/NeonLogo'

export default function SplashPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsLoading(false)
          setTimeout(() => router.push('/'), 500)
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 200)

    return () => clearInterval(interval)
  }, [router])

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-black to-black"></div>
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #22c55e 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite',
          }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #16a34a 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite reverse',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fadeIn">
          <NeonLogo size="xl" animated showText={true} />
        </div>

        {/* Title */}
        <div className="mb-4">
          <h1
            className="text-6xl font-bold mb-2"
            style={{
              background: 'linear-gradient(to right, #22c55e, #16a34a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(34, 197, 94, 0.5)',
              filter: 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.4))',
            }}
          >
            ZORAGO
          </h1>
          <p className="text-xl text-green-400">Global Live Streaming Platform</p>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-lg max-w-md mb-12">
          Connect • Stream • Earn
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-300"
            style={{
              width: `${progress}%`,
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)',
            }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="text-green-400 text-sm mt-4">
          {progress < 30 && 'Loading...'}
          {progress >= 30 && progress < 60 && 'Initializing...'}
          {progress >= 60 && progress < 90 && 'Ready...'}
          {progress >= 90 && 'Launching...'}
        </p>
      </div>

      {/* Animated Stars */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </main>
  )
}
