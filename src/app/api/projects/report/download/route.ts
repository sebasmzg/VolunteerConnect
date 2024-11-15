import { authOptions, CustomSession } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const session = (await getServerSession(authOptions)) as CustomSession;
  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/projects/report/download`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session.user.token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error al descargar el reporte");
    }
    const fileBuffer = await response.arrayBuffer();
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": 'attachment; filename="reporte_proyectos.xlsx"',
      },
    });
  } catch (error) {
    console.error("Error downloading report from external API:", error);
    return NextResponse.json(
      { error: "Error downloading report" },
      { status: 500 }
    );
  }
};
