import "../globals.css";
import React from "react";
// import { Inter } from "next/font/google";
import CombinedLayout from "./components/CombinedLayout";

export const metadata = {
  title: "Emmanuel Kudom-Agyemang",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/logoround.svg" />
        <meta property="og:url" content="https://kudom-e.github.io/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/logoround.svg" />
        <meta name="twitter:title" content="YES" />
        <meta
          name="twitter:description"
          content="Description of my page content"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <main>
          <CombinedLayout>{children}</CombinedLayout>
        </main>
      </body>
    </html>
  );
}
