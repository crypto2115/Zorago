import './globals.css'

export const metadata = {
  title: 'ZORAGO - Live Streaming',
  description: 'Global 18+ Live Streaming Platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
