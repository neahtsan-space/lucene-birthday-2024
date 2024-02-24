import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { META_DATA_TITLE, META_DATA_DESCRIPTION } from "@/params/metadata_params";
import GoogleCaptchaWrapper from "./googleCaptchaWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next"


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
      <head>
      <link
        rel="icon"
        href="/icon/icon.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      </head>
      <body className={inter.className}>
        <GoogleCaptchaWrapper>
          {children}
        </GoogleCaptchaWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
