"use client"

import { useState } from "react"
import Link from "next/link"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(true)

  return (
    <div className="flex min-h-screen bg-[#020617] text-white">

      {/* SIDEBAR */}
      <div
        className={`${open ? "w-64" : "w-16"
          } transition-all duration-300 border-r border-[#0f172a]`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="p-4 text-xl"
        >
          ☰
        </button>

        {open && (
          <div className="px-6 space-y-6">
            <h1 className="text-xl font-bold">RetailPulse</h1>

            <nav className="flex flex-col gap-4 mt-10 text-gray-300">
              <a href="/dashboard" className="hover:text-cyan-400">
                Overview
              </a>

              <a href="/dashboard/market" className="hover:text-cyan-400">
                Market Intelligence
              </a>

              <a href="/dashboard/copilot" className="hover:text-cyan-400">
                AI Copilot
              </a>
            </nav>

          </div>
        )}
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 max-w-6xl mx-auto">
      {children}</main>
    </div>
  )
}
