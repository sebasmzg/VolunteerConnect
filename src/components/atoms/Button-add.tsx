import { MdOutlineAddCircleOutline } from "react-icons/md";

const handleAdd = () => {
  console.log("Agregando nuevo proyecto");
}

export const ButtonAdd = () => {
  return (
    <button onClick={handleAdd} className="flex items-center px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-md hover:bg-slate-700">
      <div className="flex items-center justify-between">
        <div className="mr-2">
          <MdOutlineAddCircleOutline />{" "}
        </div>
        <span>Nuevo Proyecto</span>
      </div>
    </button>
  );
};
