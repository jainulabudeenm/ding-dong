import { useState } from 'react'
import { supabase } from './lib/supabase'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  async function handleSignUp() {
    setError(null)
    setMessage(null)
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) setError(error.message)
    else setMessage('Check your email to confirm your account.')
    setLoading(false)
  }

  async function handleForgotPassword() {
    setError(null)
    setMessage(null)
    if (!email) {
      setError('Enter your email address above first.')
      return
    }
    setLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) setError(error.message)
    else setMessage('Password reset link sent — check your email.')
    setLoading(false)
  }

  async function handleLogIn() {
    setError(null)
    setMessage(null)
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    setLoading(false)
  }

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        {/* Logo / title */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ding-Dong
          </h1>
          <p className="mt-2 text-sm text-gray-500 tracking-wide">
            Sign in to continue
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl shadow-black/60 backdrop-blur-sm flex flex-col gap-5">

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-widest">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Forgot password */}
          <button
            onClick={handleForgotPassword}
            disabled={loading}
            className="text-xs text-gray-500 hover:text-indigo-400 transition-colors text-right -mt-3 disabled:cursor-not-allowed"
          >
            Forgot Password?
          </button>

          {/* Error */}
          {error && (
            <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          {/* Success */}
          {message && (
            <div className="text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3">
              {message}
            </div>
          )}

          {/* Actions */}
          <button
            onClick={handleLogIn}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/30 hover:scale-[1.02] hover:shadow-indigo-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Please wait…' : 'Log In'}
          </button>

          <button
            onClick={handleSignUp}
            disabled={loading}
            className="w-full py-3 rounded-xl border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create Account
          </button>

        </div>
      </div>
    </div>
  )
}
