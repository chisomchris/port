import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request, { params }) {
  const id = params.userId;
  const dId = params.distributorId;
  const Headers = headers();
  const token = Headers.get("Authorization");
  const response = await fetch(
    process.env.API_BASE_URL + "/users" + id + "/distributors/" + dId,
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

export async function DELETE(request, { params }) {
  const id = params.userId;
  const dId = params.distributorId;
  const Headers = headers();
  const token = Headers.get("Authorization");
  const response = await fetch(
    process.env.API_BASE_URL + "/users" + id + "/distributors/" + dId,
    {
      method: "DELETE",
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
