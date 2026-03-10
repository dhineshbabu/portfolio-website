import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dhineshbabu Muthuraj | Sr. Performance Engineer",
  description:
    "Portfolio of Dhineshbabu Muthuraj — Sr. Software Development Engineer (Performance) at Workday. 15+ years of expertise in performance engineering, SRE, observability, and cloud platforms.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Dhineshbabu Muthuraj | Sr. Performance Engineer",
    description:
      "15+ years of expertise in performance engineering, SRE, observability, and cloud platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#0a0a0f] text-slate-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
