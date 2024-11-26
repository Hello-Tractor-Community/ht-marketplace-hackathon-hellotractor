import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const { action, data } = await req.json()

  switch (action) {
    case 'suggestPrice':
      return suggestPrice(data)
    case 'assessCondition':
      return assessCondition(data)
    case 'forecastDemand':
      return forecastDemand(data)
    default:
      return new NextResponse("Invalid action", { status: 400 })
  }
}

async function suggestPrice(data) {
  const prompt = `Suggest a fair market price for a ${data.category} with the following details:
- Model: ${data.name}
- Condition: ${data.condition}
- Year: ${data.year}
Provide the suggested price and a brief explanation.`

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  })

  return NextResponse.json({ suggestion: response.choices[0].message.content })
}

async function assessCondition(data) {
  const prompt = `Assess the condition of a ${data.category} based on the following details:
- Model: ${data.name}
- Age: ${data.age} years
- Usage: ${data.usage} hours
- Maintenance: ${data.maintenance}
Provide a condition rating (Excellent, Good, Fair, Poor) and a brief explanation.`

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  })

  return NextResponse.json({ assessment: response.choices[0].message.content })
}

async function forecastDemand(data) {
  const prompt = `Forecast the demand for ${data.category} in the upcoming ${data.season} season.
Consider factors such as:
- Historical sales data
- Current market trends
- Weather predictions
- Crop cycles
Provide a demand forecast (High, Medium, Low) and a brief explanation.`

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  })

  return NextResponse.json({ forecast: response.choices[0].message.content })
}

