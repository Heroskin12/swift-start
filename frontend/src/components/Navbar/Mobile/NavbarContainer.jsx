import Navbar from "./Navbar";

export default function NavbarContainer({ activeRoute, setActiveRoute }) {
  function handleClick(name) {
    setActiveRoute(name);
  }

  return (
    <div>
      <Navbar activeRoute={activeRoute} clickHandler={handleClick} />
    </div>
  );
}
