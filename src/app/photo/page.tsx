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
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

export default function Photo() {
  return (
    <>
      <Navbar />
      <SearchBar></SearchBar>
      <p
        className={`${greatVibes.className} text-5xl border-b-2 border-dashed my-10`}
      >
        Ricerca
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-full md:col-span-1 bg-gray-200 p-4">
          <p>Risultati</p>
        </div>
        <div className="col-span-full md:col-span-1 bg-gray-300 p-4 flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">
                Ordina per
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </Button>
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
        </div>
      </div>
      <Gallery></Gallery>
      <Footer></Footer>
    </>
  );
}
