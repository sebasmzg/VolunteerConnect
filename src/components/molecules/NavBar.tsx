"use client";

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    signOut({callbackUrl: '/'});
  }

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="flex items-center space-x-5">
        <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-md hover:bg-slate-700">
          Descargar Reporte
        </button>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-md hover:bg-slate-700">
          Nuevo Proyecto
        </button>

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-5 text-sm font-medium text-gray-700 hover:text-slate-900 focus:outline-none"
          >
            <Image src="/avatar.jpg" alt="avatar" width={32} height={32} className="rounded-full" />
            <span>María García</span>
            <svg
              className={`w-4 h-4 transform ${menuOpen ? 'rotate-180' : ''}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute right-0 w-48 py-2 mt-2 bg-white border rounded-md shadow-lg"> 
              <Link href="#" className="w-full text-center block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                Proyectos
              </Link>
              <button className="w-full block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100" onClick={handleLogout}>Cerrar sesión</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}