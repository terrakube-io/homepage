import type { Metadata } from "next";
import { Alexandria, Geist_Mono } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terrakube — Open Source IaC Automation Platform",
  description:
    "The open source platform that helps teams manage their infrastructure as code at scale using Terraform or OpenTofu. No vendor lock-in, no licensing headache, self hosted anywhere.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alexandria.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
