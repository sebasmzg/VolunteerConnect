import { IProjectRequest } from "@/app/core/application/dto/projects/project-request.dto";
import { ProjectsServices } from "@/app/infraestucture/services/project.services"
import { NextResponse } from "next/server";

export const POST = async (req: Request)=> {
    const pojects = new ProjectsServices();
    try {
        const data: IProjectRequest = await req.json();
        console.log("data", data);
        const response = await pojects.createProject(data);
        console.log("response", response);
        return NextResponse.json(data, { status: 201 });
    } catch (error) {
        console.error('Error creating project:', error);
        return new NextResponse(JSON.stringify({ message: "Error creating project" }), { status: 500 });
    }
}