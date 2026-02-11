"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error || "Something went wrong");
    } else {
      setSuccess(true);
      e.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 glass glass-hover backdrop-blur-md p-6 rounded-2xl shadow-lg">
      <input
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-md border"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-md border"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={5}
        className="w-full p-3 rounded-md border"
      />

      <button
        disabled={loading}
        className="w-full py-2 rounded-lg bg-primary text-primary-foreground cursor-pointer font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && <p className="text-green-600">Message sent successfully!</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}
