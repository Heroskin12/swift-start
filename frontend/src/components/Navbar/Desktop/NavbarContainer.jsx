import Navbar from "./Navbar";

export default function NavbarContainer({
  activeRoute,
  setActiveRoute,
  isExpanded,
  setIsExpanded,
}) {
  function handleClick(name) {
    setActiveRoute(name);
  }

  function handleCollapse() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <div
      className={`transition-all duration-300 h-full ${
        isExpanded ? "w-56" : "w-20"
      }`}
    >
      <Navbar
        activeRoute={activeRoute}
        clickHandler={handleClick}
        collapseHandler={handleCollapse}
        isExpanded={isExpanded}
      />
    </div>
  );
}
