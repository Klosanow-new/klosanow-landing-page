import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/ui/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const description =
  "Klosanow lets tutors create engaging video lessons, share them with their learning community and stay connected 24/7 through study chats.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.klosanow.com"),
  title: {
    default: "Klosanow — Seamless online teaching and learning",
    template: "%s · Klosanow",
  },
  description,
  icons: "/klosanow-logo.jpg",
  openGraph: {
    title: "Klosanow — Seamless online teaching and learning",
    description,
    url: "https://www.klosanow.com",
    siteName: "Klosanow",
    type: "website",
  },
  twitter: { card: "summary_large_image", site: "@klosanow" },
};

export const viewport: Viewport = {
  themeColor: "#7b58f4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="flex min-h-dvh flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
