import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Guddu Kumar | Full-Stack Developer",
    template: "%s | Guddu Kumar",
  },
  description:
    "Portfolio of Guddu Kumar, a Full-Stack Developer specializing in React, Next.js, Tailwind CSS, and scalable web applications.",
  keywords: [
    "Guddu Kumar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "MERN Stack",
    "Web Developer India",
  ],
  authors: [{ name: "Guddu Kumar" }],
  creator: "Guddu Kumar",

  openGraph: {
    title: "Guddu Kumar | Full-Stack Developer",
    description:
      "Building modern, fast, and scalable web applications using React, Next.js, and Tailwind CSS.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Guddu Kumar Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Guddu Kumar | Full-Stack Developer",
    description:
      "Full-Stack Developer focused on clean UI, performance, and scalable web apps.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
