import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import icon from "@/public/favicon.png"
import "@/styles/globals.css"

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  icons: icon.src,
  title: "Bethany Covenant Church",
  description:
    "A welcoming community where people encounter Jesus, experience transformation, grow in faith, and encourage one another.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

