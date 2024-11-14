import { IProjectPageable } from "@/app/core/application/dto/projects/project-response.dto";
import Pagination from "@/components/molecules/Pagination";

interface TableProjectsProps {
  data: IProjectPageable | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const ProjectTable = ({
  data,
  currentPage,
  totalPages,
  onPageChange,
}: TableProjectsProps) => {
  const handleEdit = () => {
    console.log("edit");
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div className="bg-white shadow-lg rounded-lg">
      <div className="flex flex-col p-4 mb-2">
        <h2 className="text-xl font-semibold mb-5">Lista de Proyectos</h2>
        <input
          type="text"
          placeholder="Buscar proyectos..."
          className="p-2 border border-gray-300 rounded-md w-full md:w-1/3"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="border-b">
            <tr>
              <th className="px-6 py-3 text-left text-m font-semibold text-gray-600 tracking-wider">
                Título
              </th>
              <th className="px-6 py-3 text-left text-m font-semibold text-gray-600 tracking-wider">
                Descripción
              </th>
              <th className="px-6 py-3 text-left text-m font-semibold text-gray-600 tracking-wider">
                Fecha de Inicio
              </th>
              <th className="px-6 py-3 text-left text-m font-semibold text-gray-600 tracking-wider">
                Fecha de Fin
              </th>
              <th className="px-6 py-3 text-left text-m font-semibold text-gray-600 tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-m font-semibold text-gray-600 tracking-wider">
                Organizador
              </th>
              <th className="px-6 py-3 text-m font-semibold text-gray-600 tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700 divide-y divide-gray-200">
            {data?.data.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {project.title}
                </td>
                <td className="px-6 py-4">{project.description}</td>
                <td className="px-6 py-4">
                  {new Date(project.startDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  {project.endDate
                    ? new Date(project.endDate).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      project.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {project.isActive ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td className="px-6 py-4">{project.organizer.name}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={handleEdit}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Editar
                    </button>
                    <button
                      onClick={handleDelete}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center py-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};
