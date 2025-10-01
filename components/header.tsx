"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  MapPin,
  Users,
  Building,
  Shield,
  ArrowRight,
  User,
  Brain,
  BookOpen,
  Mail,
  Calendar,
  Home,
  FileText,
  Eye,
  Lightbulb,
  Clipboard,
  ChevronRight,
} from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isHovering, setIsHovering] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const megaMenuRef = useRef<HTMLDivElement>(null)
  const [mobileDropdowns, setMobileDropdowns] = useState<string[]>([])
  const [mobileTab, setMobileTab] = useState<string>("menu") // 'menu', 'contact', 'info'
  const [searchQuery, setSearchQuery] = useState("")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? "hidden" : ""
    // Reset to menu tab when opening
    if (!isMenuOpen) {
      setMobileTab("menu")
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
      // Reset overflow when component unmounts
      document.body.style.overflow = ""
    }
  }, [])

  const handleMouseEnter = (dropdown: string) => {
    setIsHovering(true)
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    // Use a timeout to allow clicking before closing
    setTimeout(() => {
      if (!isHovering) {
        setActiveDropdown(null)
      }
    }, 100)
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
    setIsMenuOpen(false)
    document.body.style.overflow = ""
  }

  const toggleMobileDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (mobileDropdowns.includes(name)) {
      setMobileDropdowns(mobileDropdowns.filter((item) => item !== name))
    } else {
      setMobileDropdowns([...mobileDropdowns, name])
    }
  }

  const navItems = [
    {
      name: "Forside",
      href: "/",
      icon: <Home className="h-5 w-5" />,
      subtitle: "Læs mere",
    },
    {
      name: "Afdelinger",
      href: "/afdelinger",
      megaMenu: true,
      icon: <MapPin className="h-5 w-5" />,
      subtitle: "Se alle muligheder",
      subItems: [
        { name: "Hovedstadsområdet", href: "/afdelinger/hovedstaden", icon: <MapPin /> },
        { name: "Sjælland", href: "/afdelinger/sjaelland", icon: <MapPin /> },
        { name: "Fyn", href: "/afdelinger/fyn", icon: <MapPin /> },
        { name: "Jylland", href: "/afdelinger/jylland", icon: <MapPin /> },
      ],
    },
    {
      name: "Om os",
      href: "/om-os",
      icon: <Users className="h-5 w-5" />,
      subtitle: "Læs mere",
    },
    {
      name: "Ydelser",
      href: "/ydelser",
      dropdown: [
        { name: "Fastvagt til asylcentre", href: "/ydelser/fastvagt-asylcentre" },
        { name: "Plejehjem", href: "/specialiserede-vikarer-plejehjem-handel-udadreagerende-adfaerd" },
        { name: "Bosted- og institutioner", href: "/ydelser/fastvagt-bosted" },
        { name: "Psykiatrien", href: "/ydelser/psykiatrien" },
        { name: "Tryghedsmedarbejder", href: "/ydelser/tryghedsmedarbejder" },
        { name: "Konflikthåndteringsmedarbejder", href: "/ydelser/konflikthaandtering" },
        { name: "Enkeltmandsprojekt", href: "/enkeltmandsprojekt-enkeltmandsprojekter-jylland-fyn-sjaelland" },
      ],
      megaMenu: true,
      icon: <Shield className="h-5 w-5" />,
      subtitle: "Se alle muligheder",
      subItems: [
        { name: "Fastvagt til asylcentre", href: "/ydelser/fastvagt-asylcentre", icon: <Users /> },
        {
          name: "Plejehjem",
          href: "/specialiserede-vikarer-plejehjem-handel-udadreagerende-adfaerd",
          icon: <Building />,
        },
        { name: "Bosted- og institutioner", href: "/ydelser/fastvagt-bosted", icon: <Home /> },
        { name: "Psykiatrien", href: "/ydelser/psykiatrien", icon: <Brain /> },
        { name: "Tryghedsmedarbejder", href: "/ydelser/tryghedsmedarbejder", icon: <User /> },
        { name: "Konflikthåndteringsmedarbejder", href: "/ydelser/konflikthaandtering", icon: <Shield /> },
        {
          name: "Enkeltmandsprojekt",
          href: "/enkeltmandsprojekt-enkeltmandsprojekter-jylland-fyn-sjaelland",
          icon: <User />,
        },
      ],
    },
    {
      name: "Enkeltmandsprojekt",
      href: "/enkeltmandsprojekt-enkeltmandsprojekter-jylland-fyn-sjaelland",
      icon: <User className="h-5 w-5" />,
      subtitle: "Læs mere",
    },
    {
      name: "Fremgangsmåder",
      href: "/fremgangsmaader",
      dropdown: [
        { name: "Arousal Regulering", href: "/fremgangsmaader/arousal-regulering", icon: <Brain /> },
        { name: "Skærmning", href: "/fremgangsmaader/skaermning", icon: <Eye /> },
        {
          name: "Afledningsteknikker og Spejlning",
          href: "/fremgangsmaader/afledningsteknikker-og-spejlning",
          icon: <Lightbulb />,
        },
        { name: "Dokumentation", href: "/fremgangsmaader/dokumentation", icon: <Clipboard /> },
      ],
      megaMenu: true,
      icon: <BookOpen className="h-5 w-5" />,
      subtitle: "Se alle muligheder",
      subItems: [
        { name: "Arousal Regulering", href: "/fremgangsmaader/arousal-regulering", icon: <Brain /> },
        { name: "Skærmning", href: "/fremgangsmaader/skaermning", icon: <Eye /> },
        {
          name: "Afledningsteknikker og Spejlning",
          href: "/fremgangsmaader/afledningsteknikker-og-spejlning",
          icon: <Lightbulb />,
        },
        { name: "Dokumentation", href: "/fremgangsmaader/dokumentation", icon: <Clipboard /> },
      ],
    },
    {
      name: "Vikar",
      href: "/vikar",
      icon: <Calendar className="h-5 w-5" />,
      subtitle: "Bliv vikar",
    },
  ]

  const toggleDropdown = (dropdownName: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  useEffect(() => {
    // Add the wave animations to the global stylesheet
    const style = document.createElement("style")
    style.innerHTML = `
      @keyframes wave-slow {
        0%, 100% { transform: translateX(-100%); }
        50% { transform: translateX(100%); }
      }
      @keyframes wave-fast {
        0%, 100% { transform: translateX(100%); }
        50% { transform: translateX(-100%); }
      }
      .animate-wave-slow {
        animation: wave-slow 7s ease-in-out infinite;
      }
      .animate-wave-fast {
        animation: wave-fast 5s ease-in-out infinite;
      }
      
      @keyframes pulse-ring {
        0% {
          transform: scale(0.8);
          opacity: 0.8;
        }
        50% {
          transform: scale(1.2);
          opacity: 0.4;
        }
        100% {
          transform: scale(0.8);
          opacity: 0.8;
        }
      }
      
      .animate-pulse-ring {
        animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      
      @keyframes slide-in {
        0% {
          transform: translateY(20px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
      
      .animate-slide-in {
        animation: slide-in 0.3s ease-out forwards;
      }
      
      @keyframes fade-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      
      .animate-fade-in {
        animation: fade-in 0.3s ease-out forwards;
      }
      
      @keyframes scale-in {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      
      .animate-scale-in {
        animation: scale-in 0.3s ease-out forwards;
      }
      
      .staggered-item:nth-child(1) { animation-delay: 0.05s; }
      .staggered-item:nth-child(2) { animation-delay: 0.1s; }
      .staggered-item:nth-child(3) { animation-delay: 0.15s; }
      .staggered-item:nth-child(4) { animation-delay: 0.2s; }
      .staggered-item:nth-child(5) { animation-delay: 0.25s; }
      .staggered-item:nth-child(6) { animation-delay: 0.3s; }
      .staggered-item:nth-child(7) { animation-delay: 0.35s; }
      .staggered-item:nth-child(8) { animation-delay: 0.4s; }
      .staggered-item:nth-child(9) { animation-delay: 0.45s; }
      .staggered-item:nth-child(10) { animation-delay: 0.5s; }

      @keyframes slide-down {
        0% {
          opacity: 0;
          max-height: 0;
          transform: translateY(-10px);
        }
        100% {
          opacity: 1;
          max-height: 1000px;
          transform: translateY(0);
        }
      }

      .animate-slide-down {
        animation: slide-down 0.3s ease-out forwards;
        overflow: hidden;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className={`bg-white z-50 sticky top-0 transition-all duration-300 ${scrolled ? "shadow-lg py-2" : "py-4"}`}
    >
      {/* Backdrop blur when mega menu is open - positioned below header */}
      {(activeDropdown === "Afdelinger" || activeDropdown === "Ydelser" || activeDropdown === "Fremgangsmåder") && (
        <div
          className="fixed inset-0 top-[72px] bg-slate-900/50 backdrop-blur-sm z-40"
          onClick={() => setActiveDropdown(null)}
        ></div>
      )}

      <div className="container mx-auto px-4 relative z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeDropdowns}>
            <img
              src="/logo-full.png"
              alt="Tryghedspersonale.dk"
              className={`transition-all duration-300 max-w-[180px] sm:max-w-[220px] ${scrolled ? "h-8 sm:h-10" : "h-10 sm:h-12"}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5 text-xs sm:text-sm lg:text-base lg:space-x-1 flex-wrap">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                ref={item.name === "Afdelinger" ? dropdownRef : undefined}
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown || item.megaMenu ? (
                  <Link
                    href={item.href}
                    className={`px-2 lg:px-4 py-2 text-slate-700 hover:text-red-600 font-medium flex items-center group transition-colors duration-200 ${
                      activeDropdown === item.name ? "text-red-600" : ""
                    }`}
                    onClick={(e) => {
                      if (activeDropdown === item.name) {
                        e.preventDefault()
                      }
                    }}
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="px-2 lg:px-4 py-2 text-slate-700 hover:text-red-600 font-medium block transition-colors duration-200 break-normal"
                    onClick={closeDropdowns}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Standard Dropdown */}
                {item.dropdown && !item.megaMenu && activeDropdown === item.name && (
                  <div
                    className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden z-50 animate-fadeIn"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                          onClick={closeDropdowns}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center space-x-2">
              {/* Round Phone Button with circular waves */}
              <a
                href="tel:+4541443333"
                className="relative inline-flex items-center justify-center border-2 border-red-600 text-red-600 hover:bg-red-50 rounded-full w-10 h-10 group phone-button focus:ring focus:ring-red-300 focus:outline-none"
                aria-label="Ring til os på 41 44 33 33"
              >
                <Phone className="h-4 w-4" />
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs py-1.5 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 font-medium">
                  Ring 41 44 33 33
                </span>
                <span className="wave-1 absolute"></span>
                <span className="wave-2 absolute"></span>
                <span className="wave-3 absolute"></span>
              </a>

              {/* Round Kontakt Button */}
              <a
                href="/kontakt"
                className="relative bg-red-600 text-white hover:bg-red-700 shadow-md transition-all duration-300 hover:translate-y-[-2px] overflow-hidden group text-xs lg:text-sm rounded-full px-5 py-2 flex items-center"
              >
                <span className="absolute inset-0 w-full h-full">
                  <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="absolute top-[40%] left-0 w-full h-[40%] bg-red-500/30 blur-md rounded-full animate-wave-slow"></span>
                    <span className="absolute top-[45%] left-0 w-full h-[30%] bg-red-400/20 blur-md rounded-full animate-wave-fast"></span>
                  </span>
                </span>
                <Mail className="mr-2 h-4 w-4 relative z-10" />
                <span className="relative z-10">Kontakt</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button and Phone Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Round Phone Button with circular waves for mobile */}
            <a
              href="tel:+4541443333"
              className="relative inline-flex items-center justify-center border-2 border-red-600 text-red-600 hover:bg-red-50 rounded-full w-10 h-10 group phone-button focus:ring focus:ring-red-300 focus:outline-none"
              aria-label="Ring til os på 41 44 33 33"
            >
              <Phone className="h-4 w-4" />
              <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs py-1.5 px-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 font-medium">
                Ring 41 44 33 33
              </span>
              <span className="wave-1 absolute"></span>
              <span className="wave-2 absolute"></span>
              <span className="wave-3 absolute"></span>
            </a>

            <button
              className="text-slate-700 focus:outline-none p-2 relative z-50"
              onClick={(e) => {
                e.stopPropagation()
                toggleMenu()
              }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu for Afdelinger - Full Width with improved responsiveness */}
      {activeDropdown === "Afdelinger" && (
        <div
          ref={megaMenuRef}
          className="absolute left-0 right-0 w-full bg-white shadow-2xl border-t border-slate-100 z-50 transition-all duration-300 ease-in-out overflow-y-auto max-h-[calc(100vh-80px)] animate-fadeIn"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-4 py-6 md:py-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 rounded-b-xl overflow-hidden">
              {/* Left Feature Column - Full width on mobile, 4 cols on desktop */}
              <div className="md:col-span-4 bg-slate-900 text-white p-6 md:p-8 relative overflow-hidden rounded-lg md:rounded-r-none">
                <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Landsdækkende service</h3>
                  <p className="mb-4 md:mb-6 text-slate-300 text-sm md:text-base">
                    Vi har lokale teams klar til hurtig udrykning i hele landet. Uanset hvor du befinder dig, kan vi
                    hurtigt være fremme med kompetent personale.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:space-y-4">
                    <div className="flex items-center">
                      <div className="bg-red-600/20 backdrop-blur-sm rounded-full p-2 mr-3">
                        <Shield className="h-4 w-4 md:h-5 md:w-5 text-red-400" />
                      </div>
                      <span className="text-sm md:text-base">Hurtig responstid</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-red-600/20 backdrop-blur-sm rounded-full p-2 mr-3">
                        <Users className="h-4 w-4 md:h-5 md:w-5 text-red-400" />
                      </div>
                      <span className="text-sm md:text-base">Lokale specialister</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-red-600/20 backdrop-blur-sm rounded-full p-2 mr-3">
                        <Building className="h-4 w-4 md:h-5 md:w-5 text-red-400" />
                      </div>
                      <span className="text-sm md:text-base">Døgnbemanding</span>
                    </div>
                  </div>
                  <a
                    href="/afdelinger"
                    className="mt-6 md:mt-8 white-button w-full sm:w-auto shadow-md transition-all duration-300 hover:translate-y-[-2px] rounded-full inline-flex items-center justify-center px-5 py-3 bg-white text-red-600 font-medium"
                  >
                    Se alle afdelinger <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Right Content Columns - Full width on mobile, 8 cols on desktop */}
              <div className="md:col-span-8 p-4 md:p-8 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Regions Column */}
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-slate-900 border-b border-slate-100 pb-2">
                      Vores regioner
                    </h4>
                    <div className="grid grid-cols-1 gap-3 md:gap-4">
                      <a
                        href="/afdelinger/hovedstaden"
                        className="flex items-center p-3 rounded-lg hover:bg-red-50 transition-colors group"
                      >
                        <div className="bg-red-100 rounded-full p-2 mr-3 group-hover:bg-red-200 transition-colors shadow-sm">
                          <MapPin className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900">Hovedstadsområdet</h5>
                          <p className="text-sm text-slate-500">København og omegn</p>
                        </div>
                      </a>

                      <a
                        href="/afdelinger/sjaelland"
                        className="flex items-center p-3 rounded-lg hover:bg-red-50 transition-colors group"
                      >
                        <div className="bg-red-100 rounded-full p-2 mr-3 group-hover:bg-red-200 transition-colors shadow-sm">
                          <MapPin className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900">Sjælland</h5>
                          <p className="text-sm text-slate-500">Hele Sjælland</p>
                        </div>
                      </a>

                      <a
                        href="/afdelinger/fyn"
                        className="flex items-center p-3 rounded-lg hover:bg-red-50 transition-colors group"
                      >
                        <div className="bg-red-100 rounded-full p-2 mr-3 group-hover:bg-red-200 transition-colors shadow-sm">
                          <MapPin className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900">Fyn</h5>
                          <p className="text-sm text-slate-500">Odense og omegn</p>
                        </div>
                      </a>

                      <a
                        href="/afdelinger/jylland"
                        className="flex items-center p-3 rounded-lg hover:bg-red-50 transition-colors group"
                      >
                        <div className="bg-red-100 rounded-full p-2 mr-3 group-hover:bg-red-200 transition-colors shadow-sm">
                          <MapPin className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900">Jylland</h5>
                          <p className="text-sm text-slate-500">Nord-, Midt- og Sydjylland</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Featured Cities & Contact */}
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-slate-900 border-b border-slate-100 pb-2">
                      Større byer
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2 mb-6">
                      {["København", "Aarhus", "Odense", "Aalborg", "Esbjerg", "Randers"].map((city) => (
                        <div
                          key={city}
                          className="bg-slate-50 rounded-lg p-2 text-center text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors duration-200 cursor-pointer"
                        >
                          {city}
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 mt-4 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-2">Akut hjælp?</h4>
                      <p className="text-sm text-slate-600 mb-3">
                        Vi er klar til at hjælpe dig døgnet rundt – uanset opgavens karakter.
                      </p>
                      <a
                        href="tel:+4541443333"
                        className="w-full white-button shadow-md transition-all duration-300 hover:translate-y-[-2px] rounded-full inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white text-sm font-medium"
                      >
                        <Phone className="mr-2 h-4 w-4" /> Ring 41 44 33 33
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Map Preview */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-slate-500">Vores dækningsområde</h4>
                    <a
                      href="/afdelinger"
                      className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center"
                    >
                      Se kort <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                  <div className="mt-2 bg-slate-100 rounded-lg h-16 flex items-center justify-center">
                    <p className="text-xs text-slate-500">Danmarkskort med vores lokationer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mega Menu for Ydelser - Full Width with improved responsiveness */}
      {activeDropdown === "Ydelser" && (
        <div
          ref={megaMenuRef}
          className="absolute left-0 right-0 w-full bg-white shadow-2xl border-t border-slate-100 z-50 transition-all duration-300 ease-in-out overflow-y-auto max-h-[calc(100vh-80px)] animate-fadeIn"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-4 py-6 md:py-8">
            <div className="rounded-b-xl overflow-hidden">
              {/* Top Banner */}
              <div className="bg-red-600 text-white p-4 md:p-6 relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">Vores specialiserede ydelser</h3>
                    <p className="text-white/90 max-w-2xl text-sm md:text-base">
                      Professionel bemanding og støtte til psykiatrien, plejehjem, bosteder og asylcentre
                    </p>
                  </div>
                  <a
                    href="/ydelser"
                    className="white-button shadow-md transition-all duration-300 hover:translate-y-[-2px] rounded-full inline-flex items-center justify-center px-5 py-3 bg-white text-red-600 font-medium"
                  >
                    Se alle ydelser <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Services Grid */}
              <div className="py-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <a
                    href="/ydelser/fastvagt-asylcentre"
                    className="bg-white border border-slate-100 rounded-xl p-4 md:p-5 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center mb-3">
                      <div className="bg-red-50 rounded-full p-2 md:p-3 mr-3 group-hover:bg-red-100 transition-colors shadow-sm">
                        <Users className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
                      </div>
                      <h4 className="font-bold text-slate-900">Fastvagt til asylcentre</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      Professionelt og erfarent fastvagtspersonale, der sikrer beboernes sikkerhed og skaber et trygt
                      miljø.
                    </p>
                    <div className="flex items-center text-red-600 text-sm font-medium">
                      Læs mere <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </a>

                  <a
                    href="/specialiserede-vikarer-plejehjem-handel-udadreagerende-adfaerd"
                    className="bg-white border border-slate-100 rounded-xl p-4 md:p-5 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center mb-3">
                      <div className="bg-red-50 rounded-full p-2 md:p-3 mr-3 group-hover:bg-red-100 transition-colors shadow-sm">
                        <Building className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
                      </div>
                      <h4 className="font-bold text-slate-900">Plejehjem</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      Specialister trænet i at håndtere psykiatriske patienter med udadreagerende adfærd og psykotiske
                      tilstande.
                    </p>
                    <div className="flex items-center text-red-600 text-sm font-medium">
                      Læs mere <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </a>

                  <a
                    href="/ydelser/fastvagt-bosted"
                    className="bg-white border border-slate-100 rounded-xl p-4 md:p-5 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center mb-3">
                      <div className="bg-red-50 rounded-full p-2 md:p-3 mr-3 group-hover:bg-red-100 transition-colors shadow-sm">
                        <Home className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
                      </div>
                      <h4 className="font-bold text-slate-900">Bosted- og institutioner</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      Bemanding til asylcentre og andre institutioner, hvor der er behov for specialiseret støtte.
                    </p>
                    <div className="flex items-center text-red-600 text-sm font-medium">
                      Læs mere <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </a>

                  <a
                    href="/ydelser/psykiatrien"
                    className="bg-white border border-slate-100 rounded-xl p-4 md:p-5 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center mb-3">
                      <div className="bg-red-50 rounded-full p-2 md:p-3 mr-3 group-hover:bg-red-100 transition-colors shadow-sm">
                        <Brain className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
                      </div>
                      <h4 className="font-bold text-slate-900">Psykiatrien</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      Eksperter i konflikthåndtering og deeskalering, der skaber tryghed og forhindrer optrapning af
                      konflikter.
                    </p>
                    <div className="flex items-center text-red-600 text-sm font-medium">
                      Læs mere <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </a>

                  <a
                    href="/ydelser/tryghedsmedarbejder"
                    className="bg-white border border-slate-100 rounded-xl p-4 md:p-5 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center mb-3">
                      <div className="bg-red-50 rounded-full p-2 md:p-3 mr-3 group-hover:bg-red-100 transition-colors shadow-sm">
                        <User className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
                      </div>
                      <h4 className="font-bold text-slate-900">Tryghedsmedarbejder</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      Specialiserede opgaver, hvor vi tilpasser vores medarbejdere til specifikke behov og særligt
                      risikofyldte borgere.
                    </p>
                    <div className="flex items-center text-red-600 text-sm font-medium">
                      Læs mere <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </a>

                  <a
                    href="/ydelser/konflikthaandtering"
                    className="bg-white border border-slate-100 rounded-xl p-4 md:p-5 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center mb-3">
                      <div className="bg-red-50 rounded-full p-2 md:p-3 mr-3 group-hover:bg-red-100 transition-colors shadow-sm">
                        <Shield className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
                      </div>
                      <h4 className="font-bold text-slate-900">Konflikthåndteringsmedarbejder</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      Akutvagtordning der sikrer hurtig professionel hjælp, når du har brug for det, med både kort- og
                      langtidsløsninger.
                    </p>
                    <div className="flex items-center text-red-600 text-sm font-medium">
                      Læs mere <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </a>
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-6 rounded-lg shadow-sm">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                      <div className="mb-4 md:mb-0 text-center md:text-left">
                        <h4 className="font-bold text-slate-900">Har du brug for akut hjælp?</h4>
                        <p className="text-sm text-slate-600">Vi er klar til at rykke ud med kort varsel.</p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <a
                          href="tel:+4541443333"
                          className="bg-red-600 hover:bg-red-700 shadow-md transition-all duration-300 hover:translate-y-[-2px] rounded-full inline-flex items-center justify-center px-4 py-2 text-white text-sm font-medium"
                        >
                          <Phone className="mr-2 h-4 w-4" /> Ring 41 44 33 33
                        </a>
                        <a
                          href="/kontakt"
                          className="border-red-600 text-red-600 hover:bg-red-50 shadow-sm rounded-full inline-flex items-center justify-center px-4 py-2 border text-sm font-medium"
                        >
                          Kontakt os
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mega Menu for Fremgangsmåder */}
      {activeDropdown === "Fremgangsmåder" && (
        <div
          ref={megaMenuRef}
          className="absolute left-0 right-0 w-full bg-white shadow-2xl border-t border-slate-100 z-50 transition-all duration-300 ease-in-out overflow-y-auto max-h-[calc(100vh-80px)] animate-fadeIn"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-4 py-6 md:py-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 rounded-b-xl overflow-hidden">
              {/* Left Feature Column - Full width on mobile, 4 cols on desktop */}
              <div className="md:col-span-4 bg-slate-900 text-white p-6 md:p-8 relative overflow-hidden rounded-lg md:rounded-r-none">
                <div className="absolute inset-0 bg-[url('/abstract-geometric-flow.png')] opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Vores fremgangsmåder</h3>
                  <p className="mb-4 md:mb-6 text-slate-300 text-sm md:text-base">
                    Vi arbejder med evidensbaserede metoder, der sikrer borgerens trivsel og tryghed. Vores personale er
                    specialuddannet i disse teknikker.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:space-y-4">
                    <div className="flex items-center">
                      <div className="bg-red-600/20 backdrop-blur-sm rounded-full p-2 mr-3">
                        <Brain className="h-4 w-4 md:h-5 md:w-5 text-red-400" />
                      </div>
                      <span className="text-sm md:text-base">Psykologisk indsigt</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-red-600/20 backdrop-blur-sm rounded-full p-2 mr-3">
                        <Shield className="h-4 w-4 md:h-5 md:w-5 text-red-400" />
                      </div>
                      <span className="text-sm md:text-base">Tryghedsskabende</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-red-600/20 backdrop-blur-sm rounded-full p-2 mr-3">
                        <FileText className="h-4 w-4 md:h-5 md:w-5 text-red-400" />
                      </div>
                      <span className="text-sm md:text-base">Dokumenteret effekt</span>
                    </div>
                  </div>
                  <a
                    href="/fremgangsmaader"
                    className="mt-6 md:mt-8 white-button w-full sm:w-auto shadow-md transition-all duration-300 hover:translate-y-[-2px] rounded-full inline-flex items-center justify-center px-5 py-3 bg-white text-red-600 font-medium"
                  >
                    Se alle fremgangsmåder <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Right Content Columns - Full width on mobile, 8 cols on desktop */}
              <div className="md:col-span-8 p-4 md:p-8 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Methods Column */}
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-slate-900 border-b border-slate-100 pb-2">
                      Vores metoder
                    </h4>
                    <div className="grid grid-cols-1 gap-3 md:gap-4">
                      <a
                        href="/fremgangsmaader/arousal-regulering"
                        className="flex items-center p-3 rounded-lg hover:bg-red-50 transition-colors group"
                      >
                        <div className="bg-red-100 rounded-full p-2 mr-3 group-hover:bg-red-200 transition-colors shadow-sm">
                          <Brain className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900">Arousal Regulering</h5>
                          <p className="text-sm text-slate-500">Teknikker til at regulere borgerens arousal-niveau</p>
                        </div>
                      </a>

                      <a
                        href="/fremgangsmaader/skaermning"
                        className="flex items-center p-3 rounded-lg hover:bg-red-50 transition-colors group"
                      >
                        <div className="bg-red-100 rounded-full p-2 mr-3 group-hover:bg-red-200 transition-colors shadow-sm">
                          <Eye className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900">Skærmning</h5>
                          <p className="text-sm text-slate-500">Beskyttelse mod overstimulering og ydre påvirkninger</p>
                        </div>
                      </a>

                      <a
                        href="/fremgangsmaader/afledningsteknikker-og-spejlning"
                        className="flex items-center p-3 rounded-lg hover:bg-red-50 transition-colors group"
                      >
                        <div className="bg-red-100 rounded-full p-2 mr-3 group-hover:bg-red-200 transition-colors shadow-sm">
                          <Lightbulb className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900">Afledningsteknikker og Spejlning</h5>
                          <p className="text-sm text-slate-500">Metoder til at skabe ro og tryghed</p>
                        </div>
                      </a>

                      <a
                        href="/fremgangsmaader/dokumentation"
                        className="flex items-center p-3 rounded-lg hover:bg-red-50 transition-colors group"
                      >
                        <div className="bg-red-100 rounded-full p-2 mr-3 group-hover:bg-red-200 transition-colors shadow-sm">
                          <Clipboard className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-slate-900">Dokumentation</h5>
                          <p className="text-sm text-slate-500">Grundig registrering og opfølgning</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Resources & FAQ */}
                  <div>
                    <h4 className="text-lg font-bold mb-4 text-slate-900 border-b border-slate-100 pb-2">
                      Ressourcer og FAQ
                    </h4>

                    <div className="bg-slate-50 rounded-lg p-4 mb-4">
                      <h5 className="font-bold text-slate-900 mb-2">Ofte stillede spørgsmål</h5>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded-md shadow-sm">
                          <p className="text-sm font-medium text-slate-900">
                            Hvordan vælger I den rette metode til en borger?
                          </p>
                          <p className="text-xs text-slate-500 mt-1">Vi foretager altid en individuel vurdering...</p>
                        </div>
                        <div className="bg-white p-3 rounded-md shadow-sm">
                          <p className="text-sm font-medium text-slate-900">
                            Er jeres personale uddannet i alle metoder?
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            Ja, alt vores personale gennemgår grundig oplæring...
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-2">Har du spørgsmål?</h4>
                      <p className="text-sm text-slate-600 mb-3">
                        Kontakt os for at høre mere om vores fremgangsmåder og hvordan vi kan hjælpe.
                      </p>
                      <a
                        href="/kontakt"
                        className="white-button shadow-md transition-all duration-300 hover:translate-y-[-2px] rounded-full inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white text-sm font-medium w-full"
                      >
                        Kontakt os
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white shadow-xl transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } overflow-hidden flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Header */}
          <div className="bg-white p-5 relative overflow-hidden border-b border-slate-100">
            <div className="absolute inset-0 bg-slate-50 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <a href="/" className="flex items-center">
                  <img src="/logo-full.png" alt="Tryghedspersonale.dk" className="h-10" />
                </a>
                <button
                  className="text-slate-700 focus:outline-none p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="text-slate-600 text-sm">
                Specialister i tryghedsskabende personale til psykiatri og plejehjem
              </p>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-grow overflow-y-auto bg-slate-50 p-4">
            <div className="grid grid-cols-2 gap-3 mb-6">
              <a
                href="tel:+4541443333"
                className="bg-red-600 hover:bg-red-700 text-white rounded-xl h-auto py-3 shadow-md flex flex-col items-center"
              >
                <Phone className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Ring nu</span>
              </a>
              <a
                href="/kontakt"
                className="border-red-600 text-red-600 hover:bg-red-50 rounded-xl h-auto py-3 border flex flex-col items-center"
              >
                <Mail className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Kontakt os</span>
              </a>
            </div>

            <nav className="space-y-3">
              {navItems.map((item) => (
                <div key={item.name} className="rounded-xl overflow-hidden shadow-sm bg-white">
                  <div
                    className="flex items-center py-4 px-4 text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                    onClick={item.dropdown || item.subItems ? (e) => toggleMobileDropdown(item.name, e) : undefined}
                  >
                    <a
                      href={item.href}
                      className="flex items-center flex-1"
                      onClick={(e) => {
                        if (item.dropdown || item.subItems) {
                          e.preventDefault()
                        }
                      }}
                    >
                      <div className="bg-red-50 rounded-full p-3 mr-4 transition-colors w-12 h-12 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <span className="text-base font-medium">{item.name}</span>
                        <p className="text-sm text-slate-500">{item.subtitle}</p>
                      </div>
                    </a>
                    {(item.dropdown || item.subItems) && (
                      <button
                        className="p-2 rounded-full hover:bg-red-100 transition-colors mr-2"
                        aria-label={`Toggle ${item.name} dropdown`}
                      >
                        <ChevronDown
                          className={`h-5 w-5 text-slate-400 transition-transform duration-200 ${
                            mobileDropdowns.includes(item.name) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Dropdown content */}
                  {(item.dropdown || item.subItems) && mobileDropdowns.includes(item.name) && (
                    <div className="bg-slate-50 px-4 py-2 animate-slide-in">
                      <div className="space-y-1 pl-16">
                        {(item.subItems || []).map((subItem, index) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center p-3 rounded-lg hover:bg-white transition-colors group"
                          >
                            <div className="bg-red-100 rounded-full p-2 mr-3 group-hover:bg-red-200 transition-colors">
                              {subItem.icon || <ChevronRight className="h-4 w-4 text-red-600" />}
                            </div>
                            <span className="text-sm font-medium text-slate-700 group-hover:text-red-600 transition-colors">
                              {subItem.name}
                            </span>
                          </a>
                        ))}
                        {(item.dropdown || []).map((dropItem, index) => (
                          <a
                            key={dropItem.name || `drop-${index}`}
                            href={dropItem.href}
                            className="flex items-center p-3 rounded-lg hover:bg-white transition-colors group"
                          >
                            <div className="bg-red-100 rounded-full p-2 mr-3 group-hover:bg-red-200 transition-colors">
                              {dropItem.icon || <ChevronRight className="h-4 w-4 text-red-600" />}
                            </div>
                            <span className="text-sm font-medium text-slate-700 group-hover:text-red-600 transition-colors">
                              {dropItem.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
