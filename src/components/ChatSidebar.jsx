import { useState } from "react";

export default function ChatSidebar({ username }) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setChat([...chat, { user: username, text: message }]);
    setMessage("");
  };

  return (
    <div className="w-80 bg-zinc-900 text-white flex flex-col p-3 border-l border-zinc-700">
      <h2 className="text-xl font-bold mb-2">Group Chat 💬</h2>
      <div className="flex-1 overflow-y-auto bg-zinc-800 rounded p-2 mb-2">
        {chat.map((msg, i) => (
          <p key={i}><span className="text-pink-400">{msg.user}:</span> {msg.text}</p>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 p-1 text-black rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Say something..."
        />
        <button onClick={sendMessage} className="bg-pink-500 px-3 py-1 rounded hover:bg-pink-600">
          Send
        </button>
      </div>
    </div>
  );
}
