"use client";

import { useModalContext } from "@/app/infraestucture/context/modal-context";
import { ProjectsForm } from "../organism/projects/Create-form";
import { IProject } from "@/app/core/application/dto/projects/project-response.dto";

interface ButtonActionsProps {
  itemData: IProject;
}

export const ButtonActions = ({ itemData }: ButtonActionsProps) => {
  const { openModal, setModalContent } = useModalContext();
  const handleEdit = () => {
    console.log("edit",itemData);
    setModalContent(<ProjectsForm itemData={itemData} method="PUT" title="Edit Project" submit="Update" />);
    openModal();
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div className="flex justify-center gap-2">
      <button
        onClick={handleEdit}
        className="text-slate-900 border border-slate-200 rounded-lg p-1 font-medium hover:bg-slate-200"
      >
        Editar
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white rounded-lg p-1 font-medium hover:bg-red-600"
      >
        Eliminar
      </button>
    </div>
  );
};
