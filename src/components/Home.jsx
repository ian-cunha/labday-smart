import site from '../assets/base1.png'

function Home() {
    return (
        <div className='base1'>
            <div className="d-flex flex-sm-row flex-column justify-content-center align-items-center">
                <div className="img1 col-md-5">
                    <img className='siteImg' src={site} />
                </div>
                <div className="text1 col-md-5">
                    <h1 className="text-light fs-1">Monte Seu Site Personalizado: Liberdade e Criatividade ao Seu Alcance!</h1>
                    <h2 className="text-light fs-6">Criado para ajudar você a priorizar negócios, acompanhar seu desempenho e não perder oportunidades.</h2>

                    <div className="d-flex flex-sm-row flex-column justify-content-center align-items-center text-light">
                        <div className="card-body fw-semibold p-4">
                            <i className="bi bi-alarm-fill"></i> MONTE EM MINUTOS
                        </div>
                        <div className="card-body fw-semibold p-4">
                            <i className="bi bi-speedometer"></i> GERENCIAMENTO FACILITADO
                        </div>
                        <div className="card-body fw-semibold p-4">
                            <i className="bi bi-rocket-takeoff-fill"></i> EXPANDA SEU NEGÓCIO
                        </div>
                    </div>

                    <button className='btn btn-orange mt-3 mb-3' data-bs-toggle="modal" data-bs-target="#whatsappModal">COMEÇAR AGORA</button>
                </div>
            </div>
        </div>
    );
}

export default Home