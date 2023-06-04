import { NextResponse } from "next/server";

export async function POST(request) {
    const { otp, password } = await request.json()
    const response = await fetch(process.env.API_BASE_URL + '/changepassword', {
        method: 'POST',
        body: JSON.stringify({ otp, password }),
        headers: {
            "Content-Type": 'application/json'
        }
    })

    const data = await response.json();

    return new NextResponse(JSON.stringify(data), {
        status: response.status
    })
} 