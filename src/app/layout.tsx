import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isuru Udana - DevOps Portfolio",
  description: "DevOps Engineer Portfolio for Isuru Udana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} font-mono antialiased bg-black text-green-500 selection:bg-green-500/30 selection:text-green-300 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
