import type { Metadata, Viewport } from "next";
import { Poppins, Noto_Sans_Gujarati } from "next/font/google";
import "./globals.css";

// Poppins for names, headings and body — clean, modern, friendly.
const display = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Matching clean Gujarati sans for the Gujarati accents (પાર્થ / રિદ્ધિ).
const gujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-gujarati",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parth  Riddhi | 27 Feb 2027",
  description:
    "With the blessings of elders, Parth weds Riddhi. Join us in celebrating our Gujarati wedding on 27th February 2027.",
  openGraph: {
    title: "Parth weds Riddhi  27 Feb 2027",
    description: "Join us in celebrating our wedding!",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#7B1E2B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${gujarati.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
