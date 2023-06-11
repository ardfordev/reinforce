"use client"
import { AlignLeft } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "./icons"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export function MobileNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="relative h-8 w-8 md:hidden lg:hidden">
          <Avatar className="h-8 w-8">
            <AlignLeft className="h-8 w-8" />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
        </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link
                href="/dashboard"
                className="flex items-center space-x-2"
              >
                Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/feeder"
                className="flex items-center space-x-2"
              >
                Feeder
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href="/healthindex"
                className="flex items-center space-x-2"
              >
                Health Index
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}