"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

const data = [
  { day: "Mon", demand: 30 },
  { day: "Tue", demand: 45 },
  { day: "Wed", demand: 60 },
  { day: "Thu", demand: 70 },
  { day: "Fri", demand: 85 },
]

export default function Overview() {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="rounded-xl p-8 bg-gradient-to-r from-[#031a2b] to-[#05333b] border border-[#0f2a44] shadow-xl">
        <h1 className="text-4xl font-bold">RetailPulse Overview</h1>
        <p className="text-gray-400 mt-2">
          Live demand forecasting & market signals
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-[#020617] p-6 rounded-xl border border-[#0f2a44]">
          <p className="text-gray-400 text-sm">Demand Index</p>
          <h2 className="text-2xl font-bold text-cyan-400 mt-2">0.82</h2>
        </div>

        <div className="bg-[#020617] p-6 rounded-xl border border-[#0f2a44]">
          <p className="text-gray-400 text-sm">Market Risk</p>
          <h2 className="text-2xl font-bold text-green-400 mt-2">Low</h2>
        </div>

        <div className="bg-[#020617] p-6 rounded-xl border border-[#0f2a44]">
          <p className="text-gray-400 text-sm">Price Strategy</p>
          <h2 className="text-2xl font-bold text-blue-400 mt-2">+5%</h2>
        </div>
      </div>
      <div className="bg-[#020617] p-6 rounded-xl border border-[#0f2a44]">
        <p className="text-gray-400 text-sm">AI Insight</p>
        <h2 className="text-cyan-400 mt-2">
          📈 Demand trending upward — Groceries sector driving weekly growth.
        </h2>
      </div>


      {/* DEMAND TREND */}
      <div className="bg-[#020617] p-6 rounded-xl border border-[#0f2a44]">
        <h3 className="text-cyan-400 mb-1 font-semibold">
          Weekly Demand Forecast (Units Sold)
        </h3>

        <p className="text-gray-500 text-sm mb-3">
          Forecasted demand based on AI pricing signals.
        </p>

        <span className="text-green-400 text-sm font-medium">
          ↑ +18% Weekly Growth
        </span>

        <div className="h-72 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="#0f172a" />
              <XAxis dataKey="day" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Line
                dataKey="demand"
                stroke="#22d3ee"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
