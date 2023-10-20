import Link from "next/link";



// ------- Home -------
export default function Home(){
    return (
        <>
            <section className="section-one">
                <div className="container">
                    <div className="row">
                        <div className="col py-5">
                            <p className="section-one-title">New York é Top!</p>
                            <p className="section-one-text">
                                Nova York é uma cidade cosmopolita e vibrante, conhecida como a "cidade que nunca dorme". Com seus arranha-céus imponentes, como o Empire State Building e o One World Trade Center, e seus famosos pontos turísticos, como a Estátua da Liberdade e o Central Park, a cidade é um verdadeiro playground para os amantes de cultura, gastronomia, compras e entretenimento. Com uma atmosfera única e diversificada, New York é um verdadeiro caldeirão de culturas, onde é possível encontrar pessoas de todas as partes do mundo, tornando-a uma das cidades mais cosmopolitas do planeta. Com uma energia contagiante e uma infinidade de opções de lazer, New York é um lugar que encanta e surpreende a todos que a visitam.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-two">
                <div className="container">
                    <div className="row">
                        <div className="col py-5 text-center">
                            <h4 className="mb-5">Descobrir os principais pontos turísticos da cidade</h4>
                            <div className="text-center">
                                <Link href="/points" className="btn btn-outline-light py-3 px-5"><h4>Pontos Turísticos</h4></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-three">
                <div className="container">
                    <div className="row">
                        <div className="col py-5 text-center">
                            <h4 className="mb-5">Consultar o mapa interativo</h4>
                            <p>Consulte o mapa interativo da cidade de Ney York. Podem ser encontrados diversos pontos turísticos e restaurantes.
                                Você pode consultar os pontos turísticos mais próximos de sua localização. O mapa é atualizado a cada 15 minutos.
                            </p>
                            <div className="text-center">
                                <Link href="/map" className="btn btn-outline-dark py-3 px-5"><h4>Consultar Mapa</h4></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}












