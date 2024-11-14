"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextProps {
    showModal: boolean;
    openModal: () => void;
    closeModal: () => void;
    setModalContent: (content: ReactNode) => void;
    modalContent: ReactNode;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({children}: {children: ReactNode}) => {
    const [ showModal, setShowModal ] = useState<boolean>(false);
    const [ modalContent, setModalContent ] = useState<ReactNode>(null);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <ModalContext.Provider value={{ showModal, openModal, closeModal, setModalContent, modalContent }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    const context = useContext(ModalContext);
    if(!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }
    return context;
}