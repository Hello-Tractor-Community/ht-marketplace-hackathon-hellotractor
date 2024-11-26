import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  const client = await clientPromise
  const db = client.db("agritrade")

  const inventory = await db.collection("inventory").find({}).toArray()

  return NextResponse.json(inventory)
}

export async function POST(req: Request) {
  const client = await clientPromise
  const db = client.db("agritrade")

  const data = await req.json()

  const result = await db.collection("inventory").insertOne(data)

  return NextResponse.json({ id: result.insertedId, ...data })
}

