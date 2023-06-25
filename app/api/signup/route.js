import { NextResponse } from "next/server";

export async function POST(request) {
    const { email, name, cac, address, city, country, password, postal, state, phone, product, branches, industry } = await request.json()

    const response = await fetch(process.env.API_BASE_URL + '/users', {
        method: 'POST',
        body: JSON.stringify({
            email,
            phone,
            cacNumber: cac,
            password,
            organization: name,
            location: {
                country,
                city,
                state,
                address,
            },
            products: {name: product },
            branches: {name: 'Angludi'},
            industry
        }),
        headers: {
            "Content-Type": 'application/json',
        }
    })
    const data = await response.json();
    return new NextResponse(JSON.stringify(data), {
        status: response.status
    })
} 