import NavBar from "@/components/molecules/NavBar";
import AuthGuard from "../guard/AuthGuard";
import { ModalProvider } from "@/app/infraestucture/context/modal-context";
import { Modal } from "@/components/molecules/Modal";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalProvider>
      <AuthGuard>
        <div className="flex flex-col">
          <NavBar />
          <div>{children}</div>
        </div>
      </AuthGuard>
      <Modal />
    </ModalProvider>
  );
}
