import { useNavigate } from "react-router-dom";
import ChatSidebar from "../components/ChatSidebar";

export default function BoardPage() {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  if (!sessionStorage.getItem("access")) navigate("/");

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-gray-800 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-4">Slide Board</h1>
        <p className="opacity-60">[ Placeholder for images / GIFs / text ]</p>
      </div>
      <ChatSidebar username={username} />
    </div>
  );
}
