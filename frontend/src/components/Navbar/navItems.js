import HomeIcon from "../../assets/NavIcons/HomeIcon.jsx";
import ProgressIcon from "../../assets/NavIcons/ProgressIcon.jsx";
import UserIcon from "../../assets/NavIcons/UserIcon.jsx";
import LogoutIcon from "../../assets/NavIcons/LogoutIcon.jsx";
import KnowledgeIcon from "../../assets/KnowledgeIcon.jsx";
import EventIcon from "../../assets/EventIcon.jsx";
export const navItems = [
  { name: "Home", route: "/", Icon: HomeIcon },
  { name: "Progress", route: "/progress", Icon: ProgressIcon },
  { name: "User", route: "/user/1", Icon: UserIcon },
  { name: "Knowledge", route: "/knowledge", Icon: KnowledgeIcon },
  { name: "Event", route: "/event", Icon: EventIcon },
];

export const navLogout = [
  { name: "Logout", route: "/logout", Icon: LogoutIcon },
];
