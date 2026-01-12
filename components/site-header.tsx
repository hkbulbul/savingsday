"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Wallet, User } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      // Small threshold for immediate reaction
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300 pointer-events-none">
      <header
        className={cn(
          "pointer-events-auto flex items-center justify-between w-full max-w-7xl h-16 px-4 md:px-8 rounded-2xl transition-all duration-500 ease-in-out",
          isScrolled
            ? "bg-background/70 backdrop-blur-xl border border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.12)] translate-y-0"
            : "bg-transparent border-transparent translate-y-2"
        )}
      >
        <div className="flex items-center gap-12">
          <Link href="/" className="group flex items-center gap-3 transition-transform active:scale-95">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20 overflow-hidden">
              <Wallet className="relative z-10 h-5 w-5 text-primary-foreground transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-black tracking-tighter text-foreground uppercase hidden sm:block">
              Savings<span className="text-primary/70">Day</span>
            </span>
          </Link>

          <nav className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild
                    className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-transparent px-5 py-2 text-sm font-bold transition-all hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    <Link href="/hostinger">
                      Hostinger
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            <Button variant="ghost" className="h-9 px-5 rounded-full font-bold text-sm transition-all hover:bg-accent">
              Log in
            </Button>
            <Button className="h-9 px-6 rounded-full font-bold text-sm shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-primary/30 active:scale-95">
              Join Free
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden h-10 w-10 rounded-xl hover:bg-accent">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] rounded-l-[2.5rem] border-l-0 bg-background/95 backdrop-blur-2xl">
              <SheetHeader className="mb-8 pt-6">
                <SheetTitle className="text-left flex items-center gap-3 px-4">
                  <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <Wallet className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="font-black tracking-tighter text-2xl">SAVINGSDAY</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 px-4">
                <div className="space-y-4">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] opacity-60">Explore</p>
                  <Link
                    href="/hostinger"
                    className="flex items-center h-14 px-6 rounded-2xl bg-accent/30 text-lg font-bold transition-all hover:bg-accent hover:translate-x-1"
                  >
                    Hostinger
                  </Link>
                </div>

                <div className="pt-6 space-y-4 border-t border-border/50">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] opacity-60">Portal</p>
                  <Button variant="outline" className="w-full h-14 rounded-2xl justify-between px-6 font-bold border-2 transition-all active:scale-95">
                    Sign In
                    <User className="h-5 w-5" />
                  </Button>
                  <Button className="w-full h-14 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all active:scale-95">
                    Get Started
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  )
}
