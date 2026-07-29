import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "sonner";
import SiteChrome from "@/components/layout/SiteChrome";
import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tech4Bharat | Empowering India's Next-Generation Startups",
  description:
    "Tech4Bharat is a startup incubator helping ambitious Indian founders build category-defining companies through mentorship, capital access, and a thriving startup ecosystem.",
  keywords: [
    "Tech4Bharat",
    "startup incubator India",
    "startup accelerator",
    "Indian startups",
    "mentorship",
    "venture building",
  ],
  openGraph: {
    title: "Tech4Bharat | Empowering India's Next-Generation Startups",
    description:
      "A startup incubator helping ambitious Indian founders build category-defining companies through mentorship, capital access, and community.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-brand-700 focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to main content
        </a>
        <AuthProvider>
          <SiteChrome>{children}</SiteChrome>
          <Toaster position="top-right" richColors closeButton />
        </AuthProvider>
      </body>
    </html>
  );
}
