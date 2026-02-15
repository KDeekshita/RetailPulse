"use client"

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts"

const barData = [
  { sector: "Electronics", demand: 75 },
  { sector: "Fashion", demand: 55 },
  { sector: "Groceries", demand: 90 },
  { sector: "Home", demand: 65 },
]

const pieData = [
  { name: "Your Brand", value: 40 },
  { name: "Competitor A", value: 30 },
  { name: "Competitor B", value: 20 },
  { name: "Others", value: 10 },
]

const COLORS = ["#22d3ee", "#4ade80", "#facc15", "#a78bfa"]

export default function MarketIntelligence() {
  return (
    <div className="space-y-8">

      <div className="rounded-xl p-8 bg-gradient-to-r from-[#031a2b] to-[#05333b] border border-[#0f2a44] shadow-xl">
        <h1 className="text-4xl font-bold">Market Intelligence</h1>
        <p className="text-gray-400 mt-2">
          Real-time competitor pricing & sector demand analytics
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">

        {/* BAR CHART */}
        <div className="bg-[#020617] p-6 rounded-xl border border-[#0f2a44]">
          <h2 className="text-cyan-400 text-lg mb-2">
            Sector Demand Comparison
          </h2>

          <p className="text-gray-500 text-sm mb-4">
            Higher bars indicate stronger weekly demand by category.
          </p>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid stroke="#0f172a" />
              <XAxis dataKey="sector" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Legend />
              <Bar dataKey="demand" fill="#22d3ee" radius={[6,6,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PIE CHART */}
        <div className="bg-[#020617] p-6 rounded-xl border border-[#0f2a44]">
          <h2 className="text-cyan-400 text-lg mb-2">
            Market Share Distribution
          </h2>

          <p className="text-gray-500 text-sm mb-4">
            Shows competitive share across brands this week.
          </p>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={100}>
                {pieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  )
}
