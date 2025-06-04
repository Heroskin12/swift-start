import { useState } from "react";
import { Outlet } from "react-router";
import NavManager from "../Navbar/NavManager";

export default function SplitScreen() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="md:flex h-screen">
      <NavManager isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className="bg-dark-primary flex-1">
        <div
          className={`
            bg-light-primary
            rounded-tl-[15px] rounded-bl-[15px]
            p-4 
            transition-all duration-300
            ${isExpanded ? "md:ml-56" : "md:ml-20"}
          `}
        >
          <div className="bg-light-primary min-h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
