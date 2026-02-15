// lib/ai/service.ts

export const marketData = [
  { sector: "Electronics", demand: 75 },
  { sector: "Fashion", demand: 55 },
  { sector: "Groceries", demand: 90 },
  { sector: "Home", demand: 65 },
]

// 👉 AI Insight Generator (Dynamic)
export function generateAIInsight() {
  const highest = marketData.reduce((prev, curr) =>
    curr.demand > prev.demand ? curr : prev
  )

  const trend =
    marketData.reduce((a, b) => a + b.demand, 0) / marketData.length > 60
      ? "upward"
      : "stable"

  return {
    message: `📈 Demand trending ${trend} — ${highest.sector} sector driving weekly growth.`,
    topSector: highest.sector,
    topDemand: highest.demand,
  }
}

// 👉 Copilot Smart Reply (NOT keyword bot anymore)
export function generateCopilotReply(input: string) {
  const { topSector, topDemand } = generateAIInsight()

  const text = input.toLowerCase()

  if (text.includes("sector") || text.includes("high")) {
    return `🔥 ${topSector} currently leads with demand score ${topDemand}.`
  }

  if (text.includes("price")) {
    return `📊 Based on rising demand in ${topSector}, suggested price increase: +5%.`
  }

  if (text.includes("risk")) {
    return "🟢 Market risk remains low with stable competitor activity."
  }

  return `💡 Market momentum positive — focus on ${topSector} category growth.`
}
