import type { Metadata } from "next";
import { Bodoni_Moda, Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const bodoni = Bodoni_Moda({ variable: "--font-bodoni", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Brian Henderson, PhD, CFA | 401(k) Financial Advisor",
    template: "%s | Brian Henderson, PhD, CFA",
  },
  description: "401(k) plan advisory for employers and personal wealth management from Brian Henderson, PhD, CFA, in Reston, Virginia.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "A clearer view of your 401(k).",
    description: "Book a free 30-minute 401(k) fee and fiduciary review with Brian Henderson, PhD, CFA.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "A clearer view of your 401(k)." }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "A clearer view of your 401(k).", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${bodoni.variable}`}>{children}</body></html>;
}
