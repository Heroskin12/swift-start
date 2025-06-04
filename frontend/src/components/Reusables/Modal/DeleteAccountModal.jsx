import { useContext } from "react";
import { ModalContext } from "./ModalContext";
import BaseModal from "./BaseModal";
import StopIcon from "../../../assets/StopIcon";

export default function DeleteAccountModal() {
  const { closeModal } = useContext(ModalContext);

  const submitHandler = () => {
    console.log("Mock account deleted");
  };

  return (
    <BaseModal onClose={closeModal}>
      <div className="flex flex-col items-center justify-between">
        <div className="py-2">
          <StopIcon />
        </div>
        <div>
          <h2 className="text-[24px] font-sans font-semibold text-dark-primary text-center">
            Are you sure you want to delete your account?
          </h2>
          <div className="flex justify-center">
            <p className="text-[14px] font-sans font-normal text-[#A5A5A5] py-3 text-center">
              Warning: This action cannot be undone. All time-tracking data will
              be lost.
            </p>
          </div>
        </div>
        <form action="" onSubmit={submitHandler}>
          <button
            type="submit"
            className="bg-orange-accent text-light-primary rounded-[10px] cursor-pointer px-4 py-2 font-sans text-[16px] font-normal w-full"
          >
            Confirm Deletion
          </button>
        </form>
      </div>
    </BaseModal>
  );
}
