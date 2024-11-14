"use client";

import { useModalContext } from "@/app/infraestucture/context/modal-context";
import { ModalContent } from "../atoms/Modal-content";
import { ButtonClose } from "../atoms/Button-close";


export const Modal = () => {
  const { showModal, closeModal, modalContent } = useModalContext();

  if (!showModal) return null;

  return (
    <div onClick={closeModal}className="fixed top-0 left-0 flex justify-center items-center w-full h-full z-100 bg-black bg-opacity-50">
      <ModalContent $onClick={(e) => e.stopPropagation()}>
        <ButtonClose onClick={closeModal}/>
        {modalContent}
      </ModalContent>
    </div>
  );
};
