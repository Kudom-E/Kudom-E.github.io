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
        <meta property="og:image" content="/e-logo.svg" />
        <meta property="og:url" content="https://kudom-e.github.io/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/e-logo.svg" />
        <meta name="twitter:title" content="Emmanuel Kudom-Agyemang" />
        <meta name="twitter:description" content="Portfolio" />
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
