import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  icons: "https://res.cloudinary.com/difvp2onn/image/upload/v1717528898/img-para-web-gato/icon-gato.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-body">{children}</body>
    </html>
  );
}
