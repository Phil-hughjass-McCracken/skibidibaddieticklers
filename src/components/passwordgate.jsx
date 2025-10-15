import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkPassword = () => {
    if (password === "mrsbantonlikesplants") {
      sessionStorage.setItem("access", "granted");
      navigate("/login");
    } else {
      alert("WRONG! Mrs. Banton is disappointed.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl mb-4">Skibidi Baddie Ticklers 🔒</h1>
      <input
        type="password"
        placeholder="Enter the secret phrase..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 text-black rounded mb-4"
      />
      <button onClick={checkPassword} className="bg-pink-500 px-4 py-2 rounded hover:bg-pink-600">
        Enter
      </button>
    </div>
  );
}
