import { IProjectRequest } from "../dto/projects/project-request.dto"
import { IProject, IProjectCreateResponse, IProjectPageable, IProjectUpdateResponse,  } from "../dto/projects/project-response.dto"

export interface PProject {
    /**
     * 
     * @param req Es el objeto que contiene los datos necesarios para crear un proyecto
     */
    createProject(req: IProjectRequest): Promise<IProjectCreateResponse>

    /**
     * 
     * @param id Es el identificador del proyecto
     */
    deleteProject(id: string): Promise<IProject>

    /**
     * 
     * @param req Es el objeto que contiene los datos necesarios para actualizar un proyecto
     */
    updateProject(req: IProjectRequest, id: number): Promise<IProjectUpdateResponse>

    /**
     * 
     * @param page Es el número de página
     * @param size Es la cantidad de elementos por página
     */
    getAll(page: number, size: number): Promise<IProjectPageable>
}