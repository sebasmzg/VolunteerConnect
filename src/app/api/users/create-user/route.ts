import { IUserRegister } from "@/app/core/application/dto/users/user-request.dto";
import { UsersServices } from "@/app/infraestucture/services/users.services"
import { NextResponse } from "next/server";

export const POST = async (req: Request)=>{
    const users = new UsersServices();
    try {
        const data: IUserRegister = await req.json();
        console.log("Request data: ", data);
        const result = await users.createUser(data);
        console.log("Result: ", result);
        return NextResponse.json(result, {status: 201});
    } catch (error) {
        console.error("Error creating user: ", error);
        return new NextResponse(JSON.stringify({message: "Error creating user"}), {status: 500});
    }
}