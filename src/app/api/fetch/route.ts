import { NextResponse } from "next/server"

export async function POST() {
  const timestamp = new Date().toISOString()
  console.log(`🔔 JavaScript Workshop Page visited at ${timestamp}`)

  return NextResponse.json({ ok: true })
}
