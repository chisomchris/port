import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request, { params }) {
  const id = params.userId;
  const Headers = headers();
  const token = Headers.get("Authorization");
  const response = await fetch(
    process.env.API_BASE_URL + "/users/" + id + "/distributors",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  const data = await response.json();
  return new NextResponse(JSON.stringify(data), {
    status: response.status,
  });
}

export async function POST(request, { params }) {
  const { email } = await request.json()
  const id = params.userId;
  const Headers = headers();
  const token = Headers.get("Authorization");
  const response = await fetch(
    process.env.API_BASE_URL + "/users/" + id + "/distributors",
    {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  const data = await response.json();
  return new NextResponse(JSON.stringify(data), {
    status: response.status,
  });
}
