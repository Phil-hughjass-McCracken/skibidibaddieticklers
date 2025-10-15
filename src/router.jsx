import { createBrowserRouter } from "react-router-dom";
import PasswordGate from "./components/PasswordGate";
import LoginPage from "./pages/LoginPage";
import BoardPage from "./pages/BoardPage";

export const router = createBrowserRouter([
  { path: "/", element: <PasswordGate /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/board", element: <BoardPage /> },
]);
