import { IProjectRequest } from "@/app/core/application/dto/projects/project-request.dto";
import { ProjectsServices } from "@/app/infraestucture/services/project.services";
import { NextResponse } from "next/server";

export const PUT = async (req: Request, {params}:{params: {id:string}})=>{
    try {
        console.log('Updating project');
        console.log('params:', params);
        const projectId = params.id;
        console.log('projectId:', projectId);
        const projects = new ProjectsServices();
        const data: IProjectRequest = await req.json();
        console.log('data:', data);
        const result = await projects.updateProject(data, Number(projectId));
        return NextResponse.json(result,{status: 200});
    } catch(error) {
        console.error('Error in api route updating service:', error);
        return new NextResponse(JSON.stringify({ message: "Error in api route updating project" }), { status: 500 });
    }
}