import { LuFolderOpen } from "react-icons/lu";

interface CardProps {
    title: string;
    children: React.ReactNode;
    icon: React.ReactNode;
}

export const Card = ({title,children,icon}: CardProps) => {
    return (
        <div className="bg-white justify-between shadow-md rounded-lg w-full mx-1">
            <div className="flex justify-between items-center text-slate-900 p-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <span>{icon}</span>
            </div>
            <div className="card-body p-4">
            <p className="text-gray-700">{children}</p>
            </div>
        </div>
    );
};
