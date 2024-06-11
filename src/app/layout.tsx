import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProviderApollo from "../../provider/ProviderApollo";
import { apolloClient } from "../../graphql/apolloClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background-color`}>
        <ProviderApollo>
          <Navbar />
          {children}
          <Footer />
        </ProviderApollo>
        
      </body>
    </html>
  );
}
