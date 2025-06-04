import { useContext } from "react";
import { ModalContext } from "../Modal/ModalContext.jsx";
export default function ModalButton({ type, children }) {
  const { openModal } = useContext(ModalContext);
  // Determine the classes based on the `type` prop
  let classes = "";
  if (type === "login") {
    classes =
      "bg-orange-accent text-light-primary px-[32px] py-[10px] rounded-[10px] cursor-pointer";
  } else if (type === "signup") {
    classes =
      "border border-dark-primary text-dark-primary px-[32px] py-[10px] rounded-[10px] cursor-pointer";
  } else if (type === "deleteAccount") {
    classes = "underline text-orange-accent text-[14px]  py-2 cursor-pointer";
  }

  return (
    <button
      className={classes}
      onClick={() => {
        openModal(type);
      }}
    >
      {children || "Header Button"}
    </button>
  );
}
