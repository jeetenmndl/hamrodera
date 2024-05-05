import dbConnect from "@/lib/dbConn";
import Rooms from "@/models/roomsModel";
import {NextResponse} from "next/server";

export async function GET() {
    try {

        await dbConnect();

        const room = await Rooms.find({}).limit(1);

        return NextResponse.json({
            data: room
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
