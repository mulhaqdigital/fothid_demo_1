import { useAuth } from '../contexts/AuthContext'
import { signOut } from '../lib/auth'
import Link from 'next/link'

export default function Home() {
  const { user, isAuthenticated } = useAuth()

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to Supabase Auth Demo
            </h1>
            
            {isAuthenticated ? (
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  You are logged in as: {user.email}
                </p>
                <button
                  onClick={signOut}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Please sign in to continue
                </p>
                <Link
                  href="/login"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Go to Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 