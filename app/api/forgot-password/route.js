import { NextResponse } from "next/server";

export async function POST(request) {
    const { email } = await request.json()
    const response = await fetch(process.env.API_BASE_URL + '/forgotpassword', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
            "Content-Type": 'application/json'
        }
    })

    const data = await response.json();

    return new NextResponse(JSON.stringify(data), {
        status: response.status
    })
} 