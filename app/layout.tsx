import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { ToastProvider } from "./components/ToastProvider"
import { CartProvider } from "./context/CartContext"
import { CurrencyProvider } from "@/context/CurrencyContext"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "MH Store - Elegance in Every Detail",
  description: "Discover premium watches, handbags, and accessories at MH Store",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-gradient-to-br from-pink-50 to-white min-h-screen`}
      >
        <CurrencyProvider>
          <CartProvider>
            <ToastProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </ToastProvider>
          </CartProvider>
        </CurrencyProvider>
      </body>
    </html>
  )
}
