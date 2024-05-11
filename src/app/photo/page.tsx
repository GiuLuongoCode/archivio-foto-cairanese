"use client";
import Footer from "@/components/Footer";
import { Gallery } from "@/components/GalleryLight";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { Great_Vibes } from "next/font/google";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

export default function Photo() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  
  return (
    <>
      <Navbar />
      <SearchBar></SearchBar>
      <p
        className={`${greatVibes.className} text-3xl md:text-4xl lg:text-5xl border-b-2 border-dashed my-10`}
      >
        Ricerca
      </p>
      <div className="flex flex-row justify-between">
        <p>Risultati</p>
        <div className="flex flex-row">
          {isMobile ? (
            <>
              <Button>
                <img src="/filtro.png" alt="filtro" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <img src="/burger.png" alt="burger" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  Ordina per
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </div>
      <Gallery></Gallery>
      <Footer></Footer>
    </>
  );
}
