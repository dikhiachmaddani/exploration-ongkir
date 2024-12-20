import { envClient } from "@/configs/env-client.config";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 60;

export async function GET() {
  const data = await fetch('https://api.rajaongkir.com/starter/city', {
    headers: {
        key: envClient.API_KEY
    }
  })
  const posts = await data.json()
 
  return Response.json(posts)
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  
  try {
    const response = await axios.post("https://api.rajaongkir.com/starter/cost", body, {
      headers: {
        key: envClient.API_KEY,
      },
    });

    const result = response.data;
    return NextResponse.json(result, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
