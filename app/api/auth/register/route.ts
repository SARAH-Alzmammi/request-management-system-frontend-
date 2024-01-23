import { NextResponse } from 'next/server';


export async function POST(request: Request) {
 try {
  const { name, email, password } = await request.json()

  const a = await fetch(`${process.env.API_URL}auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
  return NextResponse.json({ status: 200, message: "success" })
} catch (e) {
  console.log(e)
  return NextResponse.json(
    { message: "Something went wrong" },
    { status: 500 }
  )
}
}