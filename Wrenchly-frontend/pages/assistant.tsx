import { useState } from "react";

export default function Assistant() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, `You: ${input}`, "AI: (demo response)"]);
    setInput("");
  };

  return (
    <main className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">🤖 AI Assistant</h1>

      <div className="bg-white p-4 rounded shadow min-h-[300px] mb-4">
        {messages.length === 0 && <p className="text-gray-400">Start chatting...</p>}
        {messages.map((msg, i) => (
          <p key={i} className="mb-2">{msg}</p>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about your car..."
          className="flex-1 border rounded p-2"
        />
        <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </main>
  );
}
