import { MdOutlineAddCircleOutline } from "react-icons/md";

interface ButtonAddProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

export const ButtonAdd = ({onClick}: ButtonAddProps) => {
  return (
    <button onClick={onClick} className="flex items-center px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-md hover:bg-slate-700">
      <div className="flex items-center justify-between">
        <div className="mr-2">
          <MdOutlineAddCircleOutline />{" "}
        </div>
        <span>Nuevo Proyecto</span>
      </div>
    </button>
  );
};
