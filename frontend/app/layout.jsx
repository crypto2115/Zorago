import './globals.css'

export const metadata = {
  title: 'ZORAGO - Global Live Streaming Platform',
  description: 'Global 18+ Live Streaming Platform for creators and viewers',
  keywords: ['streaming', 'live', 'video', 'creators'],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </head>
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
