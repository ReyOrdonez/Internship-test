import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const res = await fetch(
      "https://prod2.readychatai.com/business/mock-messages?format=json"
    );

    if (!res.ok) {
      return NextResponse.json({ error: "IA error" }, { status: res.status });
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: "intern error" }, { status: 500 });
  }
}
