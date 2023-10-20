import Image from "next/image";
import Link from "next/link";


// ------- Navbar -------
export default function Navbar(){
    return (
        <>
            <nav className="container-fluid bg-dark text-white">
                <div className="row">
                    <div className="col p-3">
                        <Image 
                            src="/assets/imagens/logo.png"
                            alt="Logo" 
                            width={50}
                            height={50} 
                        />
                        <span className="ms-3 text-info">NEW YORK CITY</span>
                        <span className="mx-2">|</span>
                        <span className="">USA</span>
                    </div>
                    <div className="col p-3 text-end align-self-center">
                        <Link href="/" className="link">Home</Link>
                        <Link href="/points" className="link">Pontos Turísticos</Link>
                        <Link href="/map" className="link">Map</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}










