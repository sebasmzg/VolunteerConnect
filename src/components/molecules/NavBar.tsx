"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonAdd } from "../atoms/Button-add";
import { ButtonReport } from "../atoms/Button-report";
import { useModalContext } from "@/app/infraestucture/context/modal-context";
import { CreateProjectTemplate } from "../template/CreateProjectTemplate";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();
  const { openModal, setModalContent } = useModalContext();

  const handleModal = () => {
    console.log("trying to open modal");
    setModalContent(<CreateProjectTemplate />);
    openModal();
  };

  const handleLogout = async () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-5">
        <ButtonReport />
        <ButtonAdd onClick={handleModal}/>

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-5 text-sm font-medium text-gray-700 hover:text-slate-900 focus:outline-none"
          >
            {session?.user?.image ? (
              <Image
                src={session.user.image}
                alt="User photo"
                width={32}
                height={32}
                className="rounded-full h-[32px] w-[32px]"
              />
            ) : (
              <svg
                className="w-8 h-8 text-gray-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            )}
            <span>{session?.user?.email || "Guest"}</span>
            <svg
              className={`w-4 h-4 transform ${menuOpen ? "rotate-180" : ""}`}
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
              <Link
                href="#"
                className="w-full text-center block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
              >
                Proyectos
              </Link>
              <button
                className="w-full block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
