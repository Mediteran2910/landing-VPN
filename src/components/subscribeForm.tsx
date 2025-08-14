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
        className="w-full px-5 py-3 rounded-xl border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition"
      />
      <button
        type="submit"
        className="w-full py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg border border-transparent rounded-lg 
             hover:bg-transparent hover:border-gray-200 hover:text-gray-200 
             transition duration-300 ease-in-out text-center cursor-pointer"
      >
        Join
      </button>
    </form>
  );
}
