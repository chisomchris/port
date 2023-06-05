import { NextResponse } from "next/server";

export async function POST(request) {
    const { otp } = await request.json()
    const response = await fetch(process.env.API_BASE_URL + '/confirmOtp', {
        method: 'POST',
        body: JSON.stringify({ otp }),
        headers: {
            "Content-Type": 'application/json'
        }
    })

    const data = await response.json();

    return new NextResponse(JSON.stringify(data), {
        status: response.status
    })
} 