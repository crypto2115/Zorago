export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          🚀 ZORAGO
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Global 18+ Live Streaming Platform
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded">
            Sign Up
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded">
            Login
          </button>
        </div>
      </div>
    </main>
  )
}
