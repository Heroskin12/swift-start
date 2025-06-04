import { NavLink, useLocation } from "react-router";
import CollapseIcon from "../../../assets/NavIcons/CollapseIcon.jsx";
import { navItems, navLogout } from "../navItems.js";

export default function Navbar({ collapseHandler, isExpanded }) {
  const location = useLocation();

  function renderCollapsedNavItems(items) {
    return items.map(({ name, route, Icon }) => (
      <NavLink key={name} to={route}>
        <div
          className={`${
            location.pathname === route ? "bg-yellow-accent" : ""
          } nav-link-desktop-collapsed`}
        >
          {Icon && <Icon active={location.pathname === route} />}
        </div>
      </NavLink>
    ));
  }

  function renderUncollapsedNavItems(items) {
    return items.map(({ name, route, Icon }) => (
      <NavLink key={name} to={route}>
        <div
          className={`nav-link-desktop-uncollapsed transition-[width,padding] duration-700
            pl-4 w-[180px]
            ${
              location.pathname === route
                ? "bg-yellow-accent text-dark-primary"
                : "text-light-primary"
            }
          `}
        >
          {Icon && <Icon active={location.pathname === route} />}
          <span className="ml-4 transition-[width,opacity] duration-700 opacity-100">
            {name}
          </span>
        </div>
      </NavLink>
    ));
  }
  return (
    <div className="h-full py-[45px] flex flex-col justify-between">
      <div className="flex flex-col space-y-[32px] items-center">
        <div
          onClick={() => collapseHandler()}
          className="rounded-sm cursor-pointer transition-transform duration-300 hover:rotate-45"
        >
          <CollapseIcon />
        </div>
        {isExpanded
          ? renderUncollapsedNavItems(navItems)
          : renderCollapsedNavItems(navItems)}
      </div>

      {/* Lower Navbar Items */}
      <div className="flex flex-col items-center space-y-[32px] cursor-pointer space-x-0">
        {isExpanded
          ? renderUncollapsedNavItems(navLogout)
          : renderCollapsedNavItems(navLogout)}
      </div>
    </div>
  );
}
