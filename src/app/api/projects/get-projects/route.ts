import { IProjectPageable } from "@/app/core/application/dto/projects/project-response.dto";
import { ProjectsServices } from "@/app/infraestucture/services/project.services";
import { NextResponse } from "next/server";

export const GET = async (req: Request)=>{
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get('page') || '1');
    const size = Number(searchParams.get('size') || '10');
    const projects = new ProjectsServices();
    try {
        const result: IProjectPageable = await projects.getAll(page, size);
        return NextResponse.json(result,{status: 200});
    } catch (error) {
        console.error('Error getting projects:', error);
        return new NextResponse(JSON.stringify({ message: "Error getting projects" }), { status: 500 });
    }
}