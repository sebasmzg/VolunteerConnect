import { GrDocumentDownload } from "react-icons/gr"

const handleDownload = () => {
    console.log("Descargando reporte");
}

export const ButtonReport = () => {
    return (
        <button onClick={handleDownload} className="flex items-center px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-md hover:bg-slate-700">
          <div className="flex items-center justify-between"><div className="mr-2"><GrDocumentDownload /> </div>
            <span>Descargar Reporte</span></div> 
        </button>
    )
}