import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="w-full p-4 flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold text-blue-700">VolunteerConnect</h2>
        </div>
        <div className="flex space-x-4">
          <button className="font-semibold px-4 py-2 bg-transparent text-slate-900">
            <Link href={"/login"}>Iniciar sesión</Link>
          </button>
          <button className="px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-700">
            <Link href={"/register"}>Registrarse</Link>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-2 mt-40">
        <div className="max-w-2xl p-4 text-center">
          <div className="mb-8">
        <h1 className="text-5xl font-bold">
          Conecta, Colabora, Cambia el Mundo
        </h1>
          </div>
          <div className="mb-8">
        <p className="text-lg">
          Únete a nuestra comunidad de voluntarios y organizadores.
          Encuentra proyectos que te apasionen o crea los tuyos propios para
          hacer una diferencia en tu comunidad.
        </p>
          </div>
          <div className="flex justify-center space-x-4">
        <button className="px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-700">
          Explorar proyectos
        </button>
        <button className="px-4 py-2 bg-white text-slate-900 rounded hover:bg-slate-200">
          Comenzar como Organizador
        </button>
          </div>
        </div>
      </div>
    </div>
  );
}
