import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.admin.css";

export const metadata: Metadata = {
  title: "DiploDev | Admin",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Include all weights or the ones you need
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className} h-full bg-neutral-100`}>
      <body>{children}</body>
    </html>
  );
}
