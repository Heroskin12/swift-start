import { createBrowserRouter } from "react-router";
import Home from "./routes/Home.jsx";
import Post from "./routes/Post.jsx";
import Progress from "./routes/Progress.jsx";
import SplitScreen from "./components/SplitScreen/SplitScreen.jsx";
import User from "./routes/User.jsx";
import Logout from "./routes/Logout.jsx";
import Knowledge from "./routes/Knowledge.jsx";
import Event from "./routes/Event.jsx";
import EventPost from "./routes/EventPost.jsx";

export default createBrowserRouter([
  {
    Component: SplitScreen,
    children: [
      { index: true, Component: Home },
      { path: "progress", Component: Progress },
      { path: "post/:id", Component: Post },
      { path: "user/:id", Component: User },
      { path: "logout", Component: Logout },
      { path: "/knowledge", Component: Knowledge },
      { path: "/event", Component: Event },
      { path: "eventpost/:id", Component: EventPost },
    ],
  },
]);
