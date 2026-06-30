import './globals.css'

export const metadata = {
  title: 'ZORAGO - Global Live Streaming Platform',
  description: 'Global 18+ Live Streaming Platform for creators and viewers',
  keywords: 'streaming, live, video, creators, platform',
  authors: [{ name: 'Sir', url: 'https://github.com/crypto2115' }],
  openGraph: {
    title: 'ZORAGO',
    description: 'Global 18+ Live Streaming Platform',
    url: 'https://golive.vercel.app',
    siteName: 'ZORAGO',
    images: [
      {
        url: 'https://golive.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '🚀',
    apple: '🚀',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body className="bg-gradient-to-b from-gray-900 to-black text-white">
        {children}
      </body>
    </html>
  )
}
