import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "../components/Nav";
import { AuthProvider } from "../context/AuthContext";
import { ProductProvider } from "../context/ProductContext";
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
  title: "Catalog",
  description: "View our catalog",
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
        <AuthProvider>
          <ProductProvider>
            <Nav />
            {children}
          </ProductProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
