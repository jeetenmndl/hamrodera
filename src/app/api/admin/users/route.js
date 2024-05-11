import dbConnect from "@/lib/dbConn";
import Users from "@/models/userModel";
import {NextResponse} from "next/server";

export async function POST(req) {
    try {

        await dbConnect();

        const auth = await req.json();
        // const user = await Users.find({});

        return NextResponse.json({
            data: auth
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}