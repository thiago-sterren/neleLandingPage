import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nele | Renueva tu newsletter",
  description: "Crea newsletters para tu comunidad de una manera renovada, permitiéndo una búsqueda de información más sencilla, con ayuda de IA.",
  openGraph: {
    title: "nele | Renueva tu newsletter",
    description: "Crea newsletters para tu comunidad de una manera renovada, permitiéndo una búsqueda de información más sencilla, con ayuda de IA.",
    url: "https://nele-landing-page.vercel.app",
    siteName: "nele",
    images: [
      {
        url: "/neleLogoSitePreview.png",
        width: 2048,
        height: 960,
        alt: "Vista previa del sitio web de nele",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
