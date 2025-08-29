"use client";
import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, this would submit to your email service
    alert(`Thanks for subscribing! We'll notify ${email} about our enterprise launch.`);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        required
        placeholder="enterprise@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-input w-full"
      />
      <button
        type="submit"
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        <span>Get Early Access</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </form>
  );
}
