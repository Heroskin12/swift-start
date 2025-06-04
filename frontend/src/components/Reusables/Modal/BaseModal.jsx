export default function BaseModal({ onClose, children }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white drop-shadow-lg relative px-[20px] pt-[50px] pb-[20px] rounded-[17px] w-[421px]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
