"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  // { name: "Projects", href: "/projects" },
  // { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center px-4">
        <div className="flex w-full justify-between items-center">
          <Link
            href="/"
            className="flex items-center"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                if (isOpen) setIsOpen(false);
              }
            }}
          >
            <motion.div
              className="text-xl font-bold text-primary"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              pedrosantos.dev
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "rounded-full px-4",
                          pathname === item.href
                            ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
                            : ""
                        )}
                        href={item.href}
                        onClick={(e) => {
                          if (item.href.startsWith("/#") && pathname === "/") {
                            e.preventDefault();
                            const targetId = item.href.split("#")[1];
                            const targetElement = document.getElementById(targetId);
                            if (targetElement) {
                              const headerHeight = 64; // Adjust based on your header height
                              const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                              window.scrollTo({
                                top: targetPosition,
                                behavior: "smooth",
                              });
                            }
                          }
                        }}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <a
              href="https://melro.io"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <span className="rounded-full bg-primary/10 p-1">🐦‍⬛</span>
              <span>Melro.io</span>
            </a>

            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <div className="flex items-center">
              <ThemeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-2"
                    aria-label="Toggle Menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="top"
                  className="flex flex-col items-center justify-center max-h-[85vh] overflow-y-auto"
                >
                  <SheetTitle className="sr-only">Sidebar</SheetTitle>
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="mb-6 text-xl font-bold text-primary"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      pedrosantos.dev
                    </motion.div>
                    <motion.div
                      className="mb-6 text-xs flex items-center gap-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <span className="text-muted-foreground">Founder of</span>
                      <a
                        href="https://melro.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded-full border border-border px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="rounded-full bg-primary/10 p-1">
                          🐦‍⬛
                        </span>
                        <span>Melro.io</span>
                      </a>
                    </motion.div>
                    <div className="grid gap-2 mt-10 w-full max-w-xs">
                      {navItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.1 * i,
                            duration: 0.5,
                          }}
                        >
                          <Button
                            asChild
                            variant={
                              pathname === item.href ? "default" : "outline"
                            }
                            className="w-full justify-center rounded-full text-base"
                          >
                            <Link 
                              href={item.href}
                              onClick={(e) => {
                                if (item.href.startsWith("/#") && pathname === "/") {
                                  e.preventDefault();
                                  setIsOpen(false);
                                  setTimeout(() => {
                                    const targetId = item.href.split("#")[1];
                                    const targetElement = document.getElementById(targetId);
                                    if (targetElement) {
                                      const headerHeight = 64; // Adjust based on your header height
                                      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                                      window.scrollTo({
                                        top: targetPosition,
                                        behavior: "smooth",
                                      });
                                    }
                                  }, 300); // Add delay to allow menu to close
                                } else {
                                  setIsOpen(false);
                                }
                              }}
                            >
                              {item.name}
                            </Link>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
