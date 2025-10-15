import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim() === "") return alert("Name required, silly goose.");
    localStorage.setItem("username", name);
    navigate("/board");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-900 text-white">
      <h1 className="text-3xl mb-4">Welcome, Baddie 😈</h1>
      <input
        type="text"
        placeholder="Enter nickname..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 text-black rounded mb-4"
      />
      <button onClick={handleLogin} className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600">
        Enter Board
      </button>
    </div>
  );
}
