"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const roles = [
  "Full-Stack Web Developer",
  "MERN Stack Engineer",
  "Next.js Specialist",
  "Problem Solver",
];

export default function Home() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-4xl text-center">

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
          Hi, I’m{" "}
          <span className="gradient-text">
            GUDDU KUMAR
          </span>{" "}
          👋
        </h1>

        {/* Typing Animation */}
        <p className="mt-6 text-xl sm:text-2xl text-muted-foreground h-[32px]">
          <span>{text}</span>
          <span className="ml-1 animate-pulse">|</span>
        </p>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
          I build modern web apps using React, Next.js, and backend
          technologies — focusing on clean architecture,
          performance, and real-world problem solving.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/contact"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition hover:opacity-90 shadow-lg"
          >
            Hire Me
          </Link>

           <Link
            href="/home"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-border bg-card text-card-foreground font-medium hover:bg-muted transition"
          >
            View Profile
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>
      </div>
    </section>
  );
}
