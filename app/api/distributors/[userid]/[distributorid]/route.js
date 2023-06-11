import { NextResponse } from "next/server";
import { headers } from 'next/headers'

export async function DELETE(request, { params }) {
    const { userid, distributorid }= params;
    const Headers = headers()
    const token = Headers.get('Authorization')
    const response = await fetch(`${process.env.API_BASE_URL}/removeDistributor/${userid}/${distributorid}`, {
        method: 'DELETE',
        headers: {
            Authorization: token
        }
    })
    const data = await response.json();
    return new NextResponse(JSON.stringify(data), {
        status: response.status
    })
} 