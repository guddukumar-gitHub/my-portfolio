import Link from "next/link";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      
      {/* Background Glow */}
      {/* <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-3xl rounded-full" />
      </div> */}

      <div className="max-w-4xl text-center">

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
          Hi, I’m{" "}
          <span className="text-primary">
            GUDDU KUMAR
          </span>{" "}
          👋
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl sm:text-2xl text-muted-foreground">
          Full-Stack Web Developer crafting fast, scalable, and
          user-focused web applications.
        </p>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl">
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
            href="/projects"
            className="px-8 py-3 rounded-lg border border-border bg-card text-card-foreground font-medium hover:bg-muted transition"
          >
            View Projects
          </Link>

        </div>
      </div>
    </section>
  );
}
