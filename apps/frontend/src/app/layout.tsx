import type { Metadata } from "next";
import { Salsa, Roboto_Condensed } from "next/font/google";
import ProviderConfig from "@/provider/providerConfig";
import "../style/globals.css";

const salsa = Salsa({
  variable: "--font-salsa",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Pingoo Web",
  description: "Massaging web Application Open Source!!",
};

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<IProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${salsa.variable} ${roboto.variable} antialiased`}>
        <ProviderConfig>{children}</ProviderConfig>
      </body>
    </html>
  );
}
