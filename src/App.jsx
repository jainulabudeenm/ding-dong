import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 min-h-screen relative flex flex-col lg:grid lg:grid-cols-2 items-center">

        {/* Left — Text content */}
        <div className="relative z-10 flex flex-col items-start gap-6 pt-20 lg:pt-0 py-10">
          <span className="text-sm font-semibold tracking-widest uppercase text-indigo-400">
            Interactive Experience
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ding-Dong
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-md">
            A next-generation interactive experience — built with React, Vite,
            and real-time 3D powered by Spline.
          </p>

          <button className="mt-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-lg shadow-lg shadow-indigo-500/30 hover:scale-105 hover:shadow-indigo-500/50 transition-all duration-200 cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Right — Spline 3D scene */}
        <div className="relative w-full h-[400px] mt-10 lg:mt-0 lg:absolute lg:-right-20 lg:w-[120%] lg:h-full lg:translate-x-[12%] z-0">
          <Suspense fallback={
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="w-24 h-24 rounded-full border-4 border-teal-500/20 border-t-teal-400 animate-spin" />
              <p className="text-sm tracking-widest uppercase text-teal-400/60 animate-pulse">
                Loading interactive experience
              </p>
            </div>
          }>
            <Spline
              scene="https://prod.spline.design/i8FM875ae5rm6rN8/scene.splinecode"
              width="100%"
              height="100%"
            />
          </Suspense>
          {/* Patch over "Made with Spline" watermark */}
          <div className="absolute bottom-2 right-2 w-48 h-14 bg-black z-50 pointer-events-none" />
        </div>

      </div>
    </div>
  )
}
