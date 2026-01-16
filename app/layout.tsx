import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import Script from "next/script";
import React from "react";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://savingsday.com"),
  title: {
    default: "SavingsDay - Best Hostinger Coupons & Deals",
    template: "%s | SavingsDay"
  },
  description: "Get the best Hostinger deals, coupon codes, and promotions. Save big on your web hosting with SavingsDay.",
  keywords: ["Hostinger coupon", "hosting deals", "savingsday", "web hosting discount"],
  authors: [{ name: "SavingsDay Team" }],
  creator: "SavingsDay",
  publisher: "SavingsDay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SavingsDay - Hostinger Coupons",
    description: "Get the best Hostinger deals and coupon codes.",
    url: "https://savingsday.com",
    siteName: "SavingsDay",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SavingsDay - Hostinger Coupons",
    description: "Get the best Hostinger deals and coupon codes.",
  },
  other: {
    "msvalidate.01": "240C6768F9B045B95548549506D5D70D",
  },
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tyh566z4eg");
          `}
        </Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17691416291"
        />
        <Script id="google-tag-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17691416291');

            gtag('event', 'conversion', {
                'send_to': 'AW-17691416291/2ZocCMGrpOIbEOOt9vNB',
                'value': 1.0,
                'currency': 'INR'
            });
          `}
        </Script>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
