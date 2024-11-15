import { IProject } from "@/app/core/application/dto/projects/project-response.dto";
import { ProjectsForm } from "../organism/projects/Create-form";

interface UpdateProjectFormProps {
    itemData?: IProject;
}

export const UpdateProjectTemplate = ({itemData}: UpdateProjectFormProps) => {
    return (
        <div className="h-full rounded-lg flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <ProjectsForm itemData={itemData} method="PUT" title="Update Project" submit="Update" />
            </div>
        </div>
    );
}