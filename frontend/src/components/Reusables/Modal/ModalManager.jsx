import { useContext } from "react";
import { ModalContext } from "./ModalContext.jsx";
import LoginModal from "./LoginModal.jsx";
import SignupModal from "./SignupModal.jsx";
import DeleteAccountModal from "./DeleteAccountModal.jsx";

const MODAL_COMPONENTS = {
  login: LoginModal,
  signup: SignupModal,
  deleteAccount: DeleteAccountModal,
};

export default function ModalManager() {
  const { isOpen, type } = useContext(ModalContext);
  console.log(`ModalManager: isOpen: ${isOpen}, type: ${type}`);

  if (!isOpen || !type) return null;

  const ModalComponent = MODAL_COMPONENTS[type];
  return ModalComponent ? <ModalComponent /> : null;
}
