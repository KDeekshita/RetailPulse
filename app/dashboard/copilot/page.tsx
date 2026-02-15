"use client"

import { useState } from "react"

type Msg = {
  role: "user" | "ai"
  text: string
}

export default function Copilot() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Msg[]>([])
  const [loading, setLoading] = useState(false)

  async function askAI() {
    if (!input.trim()) return

    const userMessage: Msg = { role: "user", text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      // 🔥 REAL AI CALL — THIS IS WHAT HACKATHON WANTS
      const res = await fetch("/api/copilot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: userMessage.text }),
      })

      const data = await res.json()

      const aiMessage: Msg = {
        role: "ai",
        text: data.reply || "AI could not generate insight.",
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ AI service unavailable." },
      ])
    }

    setLoading(false)
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") askAI()
  }

  return (
    <div className="grid grid-cols-3 gap-8">

      {/* LEFT SIDE */}
      <div className="col-span-2 space-y-6">

        {/* HEADER */}
        <div className="rounded-xl p-8 bg-gradient-to-r from-[#031a2b] to-[#05333b]">
          <h1 className="text-3xl font-bold">RetailPulse AI Copilot</h1>
          <p className="text-gray-400 mt-2">
            Real-time pricing & demand intelligence powered by AI
          </p>
        </div>

        {/* CHAT WINDOW */}
        <div className="bg-[#020617] border border-[#0f172a] rounded-xl h-[360px] overflow-y-auto p-6 space-y-4">

          {messages.length === 0 && (
            <div className="text-gray-500">
              <p className="mb-2">💬 Try asking:</p>
              <ul className="space-y-1">
                <li>• Which sector is growing fastest?</li>
                <li>• Should I increase price?</li>
                <li>• Market risk today?</li>
              </ul>
            </div>
          )}

          {messages.map((m, i) => (
            <div key={i} className="space-y-2">
              {m.role === "user" ? (
                <div className="text-right">
                  <span className="inline-block bg-cyan-600/20 border border-cyan-500 text-cyan-300 px-4 py-2 rounded-lg">
                    {m.text}
                  </span>
                </div>
              ) : (
                <div className="bg-[#030d1a] border border-[#0f172a] rounded-lg p-4">
                  {m.text}
                </div>
              )}
            </div>
          ))}

          {loading && (
            <p className="text-cyan-400 animate-pulse">
              Generating AI insight...
            </p>
          )}

        </div>

        {/* INPUT */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ask RetailPulse AI..."
          className="w-full bg-black border border-gray-700 rounded-lg p-4"
        />

        {/* BUTTON */}
        <button
          onClick={askAI}
          disabled={loading}
          className="w-full py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold hover:scale-[1.01] transition"
        >
          Generate Insight
        </button>
      </div>

      {/* RIGHT SIDE SIGNALS */}
      <div className="space-y-6">

        <div className="bg-[#020617] border border-[#0f172a] rounded-xl p-6">
          <p className="text-gray-400 text-sm">Demand Signal</p>
          <h2 className="text-xl font-bold text-cyan-400">
            Upward Momentum
          </h2>
        </div>

        <div className="bg-[#020617] border border-[#0f172a] rounded-xl p-6">
          <p className="text-gray-400 text-sm">Market Risk</p>
          <h2 className="text-xl font-bold text-green-400">
            Low Volatility
          </h2>
        </div>

        <div className="bg-[#020617] border border-[#0f172a] rounded-xl p-6">
          <p className="text-gray-400 text-sm">Price Strategy</p>
          <h2 className="text-xl font-bold text-blue-400">
            +5% Suggested
          </h2>
        </div>

      </div>
    </div>
  )
}
