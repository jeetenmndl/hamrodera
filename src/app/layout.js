import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@uploadthing/react/styles.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  weight: ['200', '300','400','500','600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title:{
    default: "Homepage | Hamrodera",
    template: "%s | Hamrodera"
  },
  description: "Introducing hamrodera, your go-to destination for seamless room hunting. Whether you're a student, a working professional, or someone in search of a cozy space to call your own, hamrodera has got you covered!",
  twitter:{
    card: "summary_large_image"
  },
  generator: 'Hamrodera',
  applicationName: 'Hamrodera',
  referrer: 'origin-when-cross-origin',
  keywords: ['Find room in Nepal', 'Search available rooms in Nepal', 'Hamrodera'],
  authors: [{ name: 'Josh', url: 'https://jeeten.com.np' }],
  creator: 'Jeeten Mandal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hamrodera.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: './opengraph-image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>

        <Navbar />

        {children}

        <Footer />

        <Toaster />
        
      </body>
    </html>
  );
}
