import type { Metadata } from "next";
import { Anybody as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import { Toaster } from "@/components/ui/sonner";

const sans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    template: "%s || mxnan",
    default: "mxnan",
  },
  description: `Creating in public with some blogs 
  and creating  custom react components for usage.
   Using Nextjs, Tailwind, Velite, Framer-motion and more.`,
  
  metadataBase: new URL("https://mxnan.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mxnan.com",
    siteName: "mxnan.com",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 800,
        alt: "mxnan.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://mxnan.com",
    creator: "@etc_etcx",
    images: ["/opengraph-image.png"],
  },
  keywords: [
    "Next.js",
    "React",
    "Web Development",
    "Tailwind CSS",
    "Framer Motion",
    "Velite",
    "Components",
    "Blog",
    "Mdx",
  ],
  authors: [{ name: "Manan", url: "https://mxnan.com" }],
  creator: "Manan",
  publisher: "mxnan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("relative antialiased font-sans", sans.variable)}>
        <Providers>
          <div className="relative container min-h-dvh flex flex-col">
            <Header />
            <main className="flex-1 py-10">{children}</main>
          </div>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
