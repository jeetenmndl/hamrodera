import dbConnect from "@/lib/dbConn";
import Rooms from "@/models/roomsModel";
import {NextResponse} from "next/server";

export async function GET() {
    try {

        await dbConnect();

        const room = await Rooms.find({}).select('_id city area neighbourhood rent photos rooms.type rooms.roomSize');

        console.log("selecting rooms", room)

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
