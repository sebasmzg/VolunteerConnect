import { PProject } from "@/app/core/application/port/project.port";
import { HttpClient } from "../utils";
import { IProject, IProjectCreateResponse, IProjectPageable, IProjectUpdateResponse } from "@/app/core/application/dto/projects/project-response.dto";
import { IProjectRequest } from "@/app/core/application/dto/projects/project-request.dto";

export class ProjectsServices implements PProject {
    private clientHttp: HttpClient;
    private basePath: string = "projects";
    
    constructor(){
        this.clientHttp = new HttpClient();
    }

    async getAll(page: number, size: number): Promise<IProjectPageable> {
        return await this.clientHttp.get(`${this.basePath}?page=${page}&size=${size}`);
    }

    async createProject(req: IProjectRequest): Promise<IProjectCreateResponse> {
        return await this.clientHttp.post(this.basePath, req);
    }

    async updateProject(req: IProjectRequest, id: number): Promise<IProjectUpdateResponse> {
        return await this.clientHttp.put(this.basePath,id, req);
    }

    async deleteProject(id: string): Promise<IProject> {
        return await this.clientHttp.delete(this.basePath,id);
    }
}