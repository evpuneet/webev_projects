import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
<<<<<<< HEAD
import { ThemeProvider } from "./provider";
=======
>>>>>>> afa098d (Initial commit from Create Next App)

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Devfolio GeNerX",
  description: "A Mordern Approach Ahead",
=======
  title: "Create Next App",
  description: "Generated by create next app",
>>>>>>> afa098d (Initial commit from Create Next App)
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
<<<<<<< HEAD
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
=======
        {children}
>>>>>>> afa098d (Initial commit from Create Next App)
      </body>
    </html>
  );
}
