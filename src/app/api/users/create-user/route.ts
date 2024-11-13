import { IUserRegister } from "@/app/core/application/dto/users/user-request.dto";
import { UsersServices } from "@/app/infraestucture/services/users.services";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  
  try {
    const data = await req.formData();
    console.log("Request data: ", data);
    const users = new UsersServices();
    const result = await users.createUser(data);
    console.log("Result: ", result);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error creating user: ", error);
    return new NextResponse(
      JSON.stringify({ message: "Error creating user" }),
      { status: 500 }
    );
  }
};
