import { Geist, Geist_Mono, Noto_Serif_Gujarati } from "next/font/google";
import "./globals.css";
import Header_of_full_website from "@/components/layout/Header_of_full_website";
import { Footer } from "@/components/sections/footer";
// ----------------------------------


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerifGujarati = Noto_Serif_Gujarati({
  variable: "--font-noto-serif-gujarati",
  subsets: ["gujarati", "latin"],
});

export const metadata = {
  title: "Manav Kalyan Trust",
  description: "NGO, Ghatlodia Ahmedabad",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSerifGujarati.variable} h-full antialiased`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Manav kalyan trust | Ghatlodia, Ahmedabad</title>
      </head>
      <body className="flex flex-col tracking-wide items-center">
        <Header_of_full_website></Header_of_full_website>

        <main className="w-full 2xl:container">
          {children}
        </main>


        <Footer></Footer>

      </body>
    </html>
  );
}
