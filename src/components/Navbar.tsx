"use client";
import { Bebas_Neue, Montserrat } from "next/font/google";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";


const bebasNeuneScripts = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

const fontStyle = bebasNeuneScripts.className;

export default function Navbar() {
  return (
    <nav className="bg-background-color">
      <div className="flex items-center justify-between px-0 md:px-4 pt-2">
        <Link className={`flex items-center space-x-3 rtl:space-x-reverse ${fontStyle} ${buttonVariants({ variant: "link" })}`} href="/">
          <span className="self-center text-5xl">
            Cairano
            <span className="text-domin-color">.EU</span>
            </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-row p-4 md:p-0 mt-4">
            <li>
              <Link href={"/"} className={ `text-base font-semibold block py-2 px-3 ${montserrat.className} ${buttonVariants({ variant: "link" })}`}>MENU ITEM 1</Link>
              </li>
            <li>
              <Link href={"/"} className={ `text-base font-semibold block py-2 px-3 ${montserrat.className} ${buttonVariants({ variant: "link" })}`}>MENU ITEM 2</Link>
              </li>
            <li>
              <Link href={"/"} className={ `text-base font-semibold block py-2 px-3 ${montserrat.className} ${buttonVariants({ variant: "link" })}`}>MENU ITEM 3</Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
