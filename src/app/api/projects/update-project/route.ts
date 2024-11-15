import { IProject } from "@/app/core/application/dto/projects/project-response.dto";
import { ProjectsServices } from "@/app/infraestucture/services/project.services";
import { NextResponse } from "next/server";

export const PUT = async (req: Request)=>{
    try {
        const projects = new ProjectsServices();
        const data: IProject = await req.json();
        const { id } = data;
        if(!id){
            return new NextResponse(JSON.stringify({ message: "Id is required" }), { status: 400 });
        }
        
        console.log("data to update", data);
        const result = await projects.updateProject(data, id);
        return NextResponse.json(result,{status: 200});
    } catch (error) {
        console.error('Error in api route updating service:', error);
        return new NextResponse(JSON.stringify({ message: "Error in api route updating project" }), { status: 500 });
    }
}