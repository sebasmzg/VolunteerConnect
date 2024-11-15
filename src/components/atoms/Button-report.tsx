import { GrDocumentDownload } from "react-icons/gr"

interface ButtonReportProps {
    onClick: () => void;
}

export const ButtonReport = ({onClick}:ButtonReportProps) => {
    return (
        <button onClick={onClick} className="flex items-center px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-md hover:bg-slate-700">
          <div className="flex items-center justify-between"><div className="mr-2"><GrDocumentDownload /> </div>
            <span>Descargar Reporte</span></div> 
        </button>
    )
}