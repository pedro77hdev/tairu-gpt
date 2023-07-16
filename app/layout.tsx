import { Providers } from "@src/lib/providers";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";

export const metadata: Metadata = {
  title: "TairuGPT",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
