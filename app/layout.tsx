import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Time Tracker Dashboard",
  description: "A NextJS app by Duncan Chege",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
