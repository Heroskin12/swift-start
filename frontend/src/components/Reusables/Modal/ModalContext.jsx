import { createContext, useState } from "react";

export const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null,
  });

  const openModal = (type) => {
    console.log(`Openmodal called with ${type}`);
    setModalState({ isOpen: true, type });
  };

  const closeModal = () => setModalState({ isOpen: false, type: null });

  return (
    <ModalContext.Provider value={{ ...modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
