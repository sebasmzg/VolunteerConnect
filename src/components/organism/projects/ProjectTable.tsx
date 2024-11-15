"use client";

import { IProjectPageable } from "@/app/core/application/dto/projects/project-response.dto";
import { InputSearch } from "@/components/atoms/input-search";
import { ProjectRow } from "@/components/atoms/Table-row";
import Pagination from "@/components/molecules/Pagination";
import { useEffect, useState } from "react";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => {
      clearTimeout(handler);
    }
  },[searchTerm]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProjects = data?.data.filter((project) =>
    project.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  return (
    <div className="bg-white shadow-lg rounded-lg">
      <div className="flex flex-col p-4 mb-2">
        <h2 className="text-xl font-semibold mb-5">Lista de Proyectos</h2>
        <InputSearch value={searchTerm} onChange={handleSearchChange} />
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
            {filteredProjects?.map((project) => (
              <ProjectRow key={project.id} itemData={project} />
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
