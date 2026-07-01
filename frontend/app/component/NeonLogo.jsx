'use client'

export default function NeonLogo({ size = 'md', animated = true, showText = false }) {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48',
  }

  return (
    <div className={`relative flex items-center justify-center ${sizeMap[size]}`}>
      {/* Outer Glow */}
      <div
        className={`absolute inset-0 rounded-full bg-green-400/20 blur-3xl ${
          animated ? 'animate-pulse' : ''
        }`}
        style={{
          boxShadow: '0 0 40px rgba(34, 197, 94, 0.6), 0 0 80px rgba(34, 197, 94, 0.3)',
        }}
      ></div>

      {/* Middle Glow Ring */}
      <div
        className="absolute inset-0 rounded-full border-2 border-green-400/30"
        style={{
          boxShadow: 'inset 0 0 20px rgba(34, 197, 94, 0.2)',
        }}
      ></div>

      {/* Logo SVG */}
      <svg
        viewBox="0 0 200 200"
        className="relative w-full h-full"
        style={{
          filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.8)) drop-shadow(0 0 20px rgba(34, 197, 94, 0.4))',
        }}
      >
        {/* Main Circle */}
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#22c55e"
          strokeWidth="3"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.8))',
          }}
        />

        {/* Z Letter */}
        <path
          d="M 60 70 L 100 100 L 60 130"
          stroke="#22c55e"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: 'drop-shadow(0 0 6px rgba(34, 197, 94, 0.8))',
          }}
        />

        {/* G Letter */}
        <path
          d="M 140 70 Q 140 70 120 70 Q 110 70 110 85 Q 110 100 120 110 Q 130 120 140 120 L 140 110"
          stroke="#22c55e"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: 'drop-shadow(0 0 6px rgba(34, 197, 94, 0.8))',
          }}
        />

        {/* Center Red Recording Dot */}
        <circle
          cx="100"
          cy="100"
          r="8"
          fill="#ef4444"
          style={{
            filter: 'drop-shadow(0 0 12px rgba(239, 68, 68, 0.8))',
          }}
          className={animated ? 'animate-pulse' : ''}
        />

        {/* LIVE Text */}
        {showText && (
          <text
            x="140"
            y="50"
            fontSize="16"
            fontWeight="bold"
            fill="#22c55e"
            style={{
              filter: 'drop-shadow(0 0 4px rgba(34, 197, 94, 0.8))',
            }}
          >
            LIVE
          </text>
        )}
      </svg>
    </div>
  )
}
