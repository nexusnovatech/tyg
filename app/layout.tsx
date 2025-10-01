import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata = {
  title:
    "Psykiatrisk Vikarbureau – Specialiseret Bemanding til Plejehjem, Bosteder og Psykiatrien | Udadreagerende adfærd | Voldsomme & udfordrende miljøer | Tryghedspersonale.dk",
  description:
    "Tryghedspersonale.dk tilbyder professionel og specialiseret bemanding til psykiatrien, plejehjem, bosteder og asylcentre. Vores sikkerhedsassistenter er trænet i konflikthåndtering, deeskalering og psykiatrisk støtte. Få akut hjælp i hele Danmark.",
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://tryghedspersonale.dk",
    title: "Tryghedspersonale.dk - Specialiseret Bemanding til Plejehjem, Bosteder og Psykiatrien",
    description:
      "Tryghedspersonale.dk tilbyder professionel og specialiseret bemanding til psykiatrien, plejehjem, bosteder og asylcentre.",
    siteName: "Tryghedspersonale.dk",
    images: [
      {
        url: "/tryghedspersonale-share.png",
        width: 1200,
        height: 630,
        alt: "Tryghedspersonale.dk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tryghedspersonale.dk - Specialiseret Bemanding",
    description: "Professionel og specialiseret bemanding til psykiatrien, plejehjem, bosteder og asylcentre.",
    images: ["/tryghedspersonale-share.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="da">
      <head>
        <meta name="google-site-verification" content="rQXdveyxv8BoCT20eA47TtiaiuV_vsWcyc2GQ9mPygA" />
        <link rel="preconnect" href="https://api.mapbox.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.mapbox.com" />
        <link rel="preconnect" href="https://blob.v0.dev" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://blob.v0.dev" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
