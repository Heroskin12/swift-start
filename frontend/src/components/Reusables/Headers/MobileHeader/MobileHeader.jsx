import LogoBar from "../../Logo/LogoBar";
import { useState } from "react";
import { useLocation } from "react-router";
export default function MobileHeader() {
  const location = useLocation();
  const [active, setActive] = useState(false);

  const searchClickHandler = () => {
    console.log("Search clicked");
    console.log(active);
    setActive((prev) => !prev);
  };

  return (
    <>
      {/* Top row of header. */}
      <div className="flex items-center justify-between px-4">
        <LogoBar />
      </div>

      <div className="px-4">
        <div
          className={` mb-2 flex ${
            active ? "flex-col" : "justify-between items-center"
          }`}
        >
          {location.pathname == "/" && (
            <>
              <h1 className="font-sans font-bold text-[28px] whitespace-nowrap">
                Latest Videos
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}
