import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/main/NavBar";
import Footer from "@/components/main/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LoaderIO - Youtube Video Downloader",
  description: "Download videos from YouTube with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W177CFHW1H"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W177CFHW1H');
            `,
          }}
        />
      </Head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
