import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Providers } from "@/providers/Providers";
import "./globals.css";

const font = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Trello",
    default: "Home | Trello",
  },
  description: "A simple Trello clone to manage your tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`text-text ${font.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
