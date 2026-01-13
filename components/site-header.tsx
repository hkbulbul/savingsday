"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
  const pathname = usePathname()
  const isHostinger = pathname === "/hostinger"

  React.useEffect(() => {
    const handleScroll = () => {
      // Small threshold for immediate reaction
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center w-full h-16 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-background border-transparent"
      )}
    >
      <div className="flex items-center justify-between w-full max-w-7xl px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="group flex items-center gap-2 transition-transform active:scale-95">
            <div className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
              isHostinger ? "bg-[#673de6]" : "bg-primary"
            )}>
              <Wallet className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground uppercase hidden sm:block">
              Savings<span className={cn(isHostinger ? "text-[#673de6]" : "text-primary")}>Day</span>
            </span>
          </Link>

          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-accent"
                    )}
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

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="mb-6">
                <SheetTitle className="text-left flex items-center gap-2">
                  <div className={cn(
                    "h-8 w-8 rounded-lg flex items-center justify-center transition-colors",
                    isHostinger ? "bg-[#673de6]" : "bg-primary"
                  )}>
                    <Wallet className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="font-bold tracking-tight text-lg">
                    SAVINGS<span className={isHostinger ? "text-[#673de6]" : ""}>DAY</span>
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/hostinger"
                  className="flex items-center py-2 text-base font-medium transition-colors hover:text-primary"
                >
                  Hostinger
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

