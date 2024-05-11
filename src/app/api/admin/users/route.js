import dbConnect from "@/lib/dbConn";
import Users from "@/models/userModel";
import {NextResponse} from "next/server";

export async function POST(req) {
    try {

        await dbConnect();

        const auth = await req.json();

        let check = ["9824390430"].includes(auth.phone);

        if(check){
            const users = await Users.find({});
            return NextResponse.json({
                success: true,
                data: users
            }, {
                status: 200
            })
        }
        else{
            return NextResponse.json({
                success: false,
                message: "Access Denied"
            }, {
                status: 200
            })
        }



    }catch (e) {
        return NextResponse.json(
            { success:false, message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}