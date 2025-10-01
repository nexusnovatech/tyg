import { NextResponse } from "next/server"

export async function GET() {
  // Only use the server-side MAPBOX_ACCESS_TOKEN
  const token = process.env.MAPBOX_ACCESS_TOKEN

  if (!token) {
    console.error("MAPBOX_ACCESS_TOKEN is not defined in environment variables")
    return NextResponse.json({ error: "Mapbox token not configured" }, { status: 500 })
  }

  return NextResponse.json({ token })
}
