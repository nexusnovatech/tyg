"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"

const Header = dynamic(() => import("@/components/header"), {
  ssr: true,
})

const Footer = dynamic(() => import("@/components/footer"), {
  ssr: true,
})

const WelcomePopup = dynamic(
  () => import("@/components/welcome-popup").then((mod) => ({ default: mod.WelcomePopup })),
  {
    ssr: false,
  },
)

const CookieConsent = dynamic(
  () => import("@/components/cookie-consent").then((mod) => ({ default: mod.CookieConsent })),
  {
    ssr: false,
  },
)

function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Immediate scroll to top without animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    })
  }, [pathname])

  // Also scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return null
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <ScrollToTop />
      <WelcomePopup />
      <CookieConsent />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
