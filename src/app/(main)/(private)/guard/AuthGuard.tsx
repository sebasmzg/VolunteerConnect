"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const { status} = useSession();
    const router = useRouter();

    useEffect(()=>{
        if(status === 'unauthenticated'){
            router.push('/login');
        }
    },[status, router])

    if (status === 'authenticated'){
        return (
            <>{children}</>
        )
    }
    
    if(status === 'loading'){
        return (
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
              <div
                className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-slate-900 mx-auto"
              >
              </div>
              <h2 className="text-zinc-900 dark:text-slate-900 mt-4">Loading...</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                Your adventure is about to begin
              </p>
              </div>
            </div>
        )
    }
  }