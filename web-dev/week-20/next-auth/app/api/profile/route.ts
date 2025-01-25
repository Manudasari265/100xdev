import { NextRequest, NextResponse } from "next/server";
// import jwt, { JwtPayload } from "jsonwebtoken";

export function GET(req: NextRequest) {
    // const headers = req.headers;
    // const authotorizationHeader = headers["authorization"];
    // const decoded = jwt.verify(authotorizationHeader, "SECRET");
    // const userid = decoded.userId;

    return NextResponse.json({
        avatarUrl: "http://images.google.com.cat.png"
    })
}