import LogoBar from "../../Logo/LogoBar.jsx";
import ModalButton from "../../Buttons/ModalButton.jsx";
import ProgressBar from "../../ProgressBar/ProgressBar.jsx";

export default function Header() {
  return (
    <>
      {/* Large Screen */}
      <div className="hidden lg:block">
        {/* Second row of header. */}
        <div className="flex flex-col px-4 w-full">
          <h1 className="flex font-sans font-bold text-[48px] whitespace-nowrap ">
            Welcome to SwiftStart
          </h1>
          <ProgressBar progress={20} />
        </div>
      </div>
    </>
  );
}
