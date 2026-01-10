import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
  variable: "--font-nunito",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chat with AI",
  description: "chat-gpt api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
