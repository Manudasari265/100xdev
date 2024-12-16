import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();

    return NextResponse.json({
        message: "You have been signed up",
        data
    })
}

export async function GET(req: NextRequest, res: NextResponse) {
    const data = await req.json();

    return res.json({data});
}