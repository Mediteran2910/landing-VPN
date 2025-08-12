"use client";
import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thanks for subscribing: ${email}`);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-5 py-3 rounded-md bg-[#2a2a2a] border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition"
      />
      <button
        type="submit"
        className="w-full py-3 bg-gray-400 hover:from-gray-600 hover:to-gray-400 text-black font-semibold rounded-md transition"
      >
        Notify Me
      </button>
    </form>
  );
}
