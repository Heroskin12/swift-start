import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import router from "./router.js";
import "./index.css";
import ModalProvider from "./components/Reusables/Modal/ModalContext";
import ModalManager from "./components/Reusables/Modal/ModalManager";
import AuthProvider from "./auth/UserContext.jsx";
import { EmployeeProvider } from "./context/EmployeeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <EmployeeProvider>
        <ModalProvider>
          <RouterProvider router={router} />
          <ModalManager />
        </ModalProvider>
      </EmployeeProvider>
    </AuthProvider>
  </StrictMode>
);
