import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const prompt = body.prompt || ""

    // 🧠 TEMP AI LOGIC (Hackathon-safe starter)
    // This simulates AI reasoning until you plug real model

    let reply = "Market conditions stable with moderate growth."

    if (prompt.toLowerCase().includes("sector")) {
      reply =
        "Groceries sector shows strongest demand momentum based on recent trend signals."
    }

    if (prompt.toLowerCase().includes("price")) {
      reply =
        "AI suggests a 5% price increase due to rising demand elasticity."
    }

    if (prompt.toLowerCase().includes("risk")) {
      reply =
        "Market risk remains low with stable competitor activity."
    }

    return NextResponse.json({
      reply,
    })
  } catch (err) {
    return NextResponse.json(
      { reply: "AI failed to generate insight." },
      { status: 500 }
    )
  }
}
