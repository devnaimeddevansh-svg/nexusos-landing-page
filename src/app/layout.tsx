import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexusOS — The AI Operating System",
  description:
    "Pre-register for NexusOS: deep AI research, business intelligence, six AI employees, and life admin — all in one operating system.",
  openGraph: {
    title: "NexusOS — The AI Operating System",
    description:
      "Join the waitlist for NexusOS. AI research, business brain, company-in-a-box, and life admin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body className="font-body min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
