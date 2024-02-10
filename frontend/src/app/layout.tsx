import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { META_DATA_TITLE, META_DATA_DESCRIPTION } from "@/params/metadata_params";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: META_DATA_TITLE,
  description: META_DATA_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
