import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Resume | Guddu Kumar",
  description:
    "Download and preview Guddu Kumar's Full-Stack Developer Resume.",
};

const ResumePage: React.FC = () => {
  return (
    <section className="min-h-screen px-6 py-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">My Resume</h1>

      <p className="text-muted-foreground text-center max-w-xl mb-8">
        Here you can preview my latest resume. You can also download a PDF
        copy for offline reference.
      </p>

      {/* Resume Preview */}
      <div className="w-full max-w-4xl h-[700px] border rounded-2xl overflow-hidden shadow-lg mb-8">
        <iframe
          src="/resume-guddu-kumar.pdf"
          className="w-full h-full"
        />
      </div>

      {/* Download Button */}
      <a
        href="/resume-guddu-kumar.pdf"
        download="Guddu-Kumar-Resume.pdf"
        className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-medium shadow-md hover:scale-105 transition-transform"
      >
        Download Resume
      </a>
    </section>
  );
};

export default ResumePage;
