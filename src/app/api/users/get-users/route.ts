import { UsersServices } from "@/app/infraestucture/services/users.services"
import { NextResponse } from "next/server";

export const GET = async ()=>{
    console.log("GET USERS");
    const users = new UsersServices();
    try {
        const result = await users.getUsers();
        return NextResponse.json(result,{status: 200});
    } catch (error) {
        console.error('Error getting users:', error);
        return new NextResponse(JSON.stringify({ message: "Error getting users" }), { status: 500 });
    }
}