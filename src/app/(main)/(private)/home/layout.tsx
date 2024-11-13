import NavBar from "@/components/molecules/NavBar";
import AuthGuard from "../guard/AuthGuard";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex flex-col">
        <NavBar />
        <div>{children}</div>
      </div>
    </AuthGuard>
  );
}
