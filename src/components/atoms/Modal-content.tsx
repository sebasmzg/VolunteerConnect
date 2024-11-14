interface ModalProps {
    children: React.ReactNode;
    $onClick: (e: React.MouseEvent) => void;
  }
  
  export const ModalContent = ({ children, $onClick }: ModalProps) => {
    return (
      <div onClick={$onClick} className="relative">
        {children}
      </div>
    );
  };
  