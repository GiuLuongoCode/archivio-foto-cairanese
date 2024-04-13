import { Bebas_Neue } from "next/font/google";

const bebasNeuneScripts = Bebas_Neue({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-bebas-neue",
  });

const fontStyle = bebasNeuneScripts.className;

export default function Footer() {
    return (
        <footer className="text-center p-4 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
                <h2 className={`${fontStyle} text-4xl`}>Cairano</h2>
                <p>© 2024 All rights are reserved – Archivio fotografico cairanese</p>
            </div>
        </footer>
    )
}