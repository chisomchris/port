import { NextResponse } from "next/server";

export async function POST(request) {
    const {email, password} = await request.json()
    const response = await fetch(process.env.API_BASE_URL + '/login', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
            "Content-Type": 'application/json'
        }
    })
    
    const res = await response.json();

    return NextResponse.json(res)
} 