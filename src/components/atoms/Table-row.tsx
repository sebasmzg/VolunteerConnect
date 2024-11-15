import { IProject } from "@/app/core/application/dto/projects/project-response.dto";
import { ButtonActions } from "../molecules/Button-actions";

interface ProjectRowProps {
  itemData: IProject;
}

export const ProjectRow = ({ itemData }: ProjectRowProps) => {
  return (
    <tr key={itemData.id} className="hover:bg-gray-50">
      <td className="px-6 py-4 font-semibold text-gray-900">{itemData.title}</td>
      <td className="px-6 py-4">{itemData.description}</td>
      <td className="px-6 py-4">
        {new Date(itemData.startDate).toLocaleDateString()}
      </td>
      <td className="px-6 py-4">
        {itemData.endDate
          ? new Date(itemData.endDate).toLocaleDateString()
          : "N/A"}
      </td>
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            itemData.isActive === true
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {itemData.isActive ? "Activo" : "Inactivo"}
        </span>
      </td>
      <td className="px-6 py-4">{itemData.organizer.name}</td>
      <td className="px-6 py-4">
        <ButtonActions itemData={itemData} />
      </td>
    </tr>
  );
};
