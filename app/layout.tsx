import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Navbar/ResponsiveNavbar";

const poppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PEAK TRAVELS",
  description: "TRAVEL AGENCY LANDING PAGE WITH NEXT JS 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ResponsiveNavbar />
      <body className={`${poppinsFont.className} antialiased`}>{children}</body>
    </html>
  );
}
