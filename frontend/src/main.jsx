import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import router from "./router.js";
import "./index.css";
import ModalProvider from "./components/Reusables/Modal/ModalContext";
import ModalManager from "./components/Reusables/Modal/ModalManager";
import AuthProvider from "./auth/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ModalProvider>
        <RouterProvider router={router} />
        <ModalManager />
      </ModalProvider>
    </AuthProvider>
  </StrictMode>
);
