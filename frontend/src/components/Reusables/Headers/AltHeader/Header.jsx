import LogoBar from "../../Logo/LogoBar.jsx";
import ProgressBar from "../../ProgressBar/ProgressBar.jsx";
import ModalButton from "../../Buttons/ModalButton.jsx";

export default function Header() {
  return (
    <>
      {/* Top row of header. */}
      <div className="hidden lg:flex flex-col px-4">
        <div className="flex items-center justify-between">
          <LogoBar />

          {/* Large Screen */}

          <div className="flex space-x-2.5">
            <ModalButton type="login">Login</ModalButton>
            <ModalButton type="signup">Signup</ModalButton>
          </div>
        </div>
        <div className="">
          <ProgressBar progress={20} isHome={false} />
        </div>
      </div>

      {/* Medium Screen */}
      <div className="flex lg:hidden items-center justify-between px-4 w-full min-w-0">
        <div className="flex flex-col w-full min-w-0">
          <div className="flex flex-row justify-between items-center w-full min-w-0">
            <LogoBar />
            <div className="flex space-x-2.5 flex-shrink min-w-0">
              <ModalButton type="login">Login</ModalButton>
              <ModalButton type="signup">Signup</ModalButton>
            </div>
          </div>
          <div className="min-w-0">
            <ProgressBar progress={20} isHome={false} />
          </div>
        </div>
      </div>
    </>
  );
}
