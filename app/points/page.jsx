



// ------- Points of interest/Pontos Turísticos -------
export default function Points(){

    // collection of points
    const points = [
        {
            title: "Central Park",
            description: "O Central Park é um parque urbano público situado no distrito metropolitano de Manhattan, na cidade de Nova Iorque, Estados Unidos. O parque possui uma área de 341 hectares, sendo um dos maiores parques urbanos do mundo, e é administrado pela Central Park Conservancy, uma organização sem fins lucrativos, com o consentimento da prefeitura de Nova Iorque.",
            image: "point_1.png"
        },
        {
            title: "Empire State Building",
            description: "O Empire State Building é um arranha-céu de 102 andares de estilo Art déco localizado na intersecção da 5ª Avenida com a West 34th Street, na cidade de Nova York. Seu nome deriva do apelido do estado de Nova York.",
            image: "point_2.png"
        },
        {
            title: "Estátua da Liberdade",
            description: "A Estátua da Liberdade é uma escultura neoclássica colossal na ilha da Liberdade, na foz do rio Hudson, em Nova York, nos Estados Unidos. A estátua, projetada pelo escultor francês Frédéric Auguste Bartholdi, é um presente da França aos Estados Unidos em reconhecimento à amizade franco-americana durante a Revolução Americana.",
            image: "point_3.png"
        },
        {
            title: "Times Square",
            description: "Times Square é uma grande praça comercial, entre as ruas 42nd e 47th, na cidade de Nova York, Estados Unidos. A Times Square é um importante centro de entretenimento da cidade e ponto turístico. A praça é famosa pelos seus letreiros luminosos e pelas grandes multidões que a frequentam.",
            image: "point_4.png"
        },
        {
            title: "Brooklyn Bridge",
            description: "A Ponte do Brooklyn é uma ponte suspensa por cabo no rio Leste que liga o distrito de Manhattan ao distrito do Brooklyn, na cidade de Nova York. A ponte é um dos mais famosos pontos de referência da cidade de Nova York e um ícone da engenharia americana.",
            image: "point_5.png"
        }
    ]


    return (
        <>
            <h1 className="text-center text-secundary mt-5">
                Pontos Turísticos em New York
            </h1>

            <div className="container">
                {
                    points.map((point, index) => (
                            <div key={index} className="row my-3 border rounded-5 p-3">
                            <div className="col-md-4">
                                <img src={`assets/imagens/${point.image}`} alt={point.title} className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <h4>{point.title}</h4>
                                <p>{point.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}












