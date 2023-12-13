import logo from "../assets/logoSmart.svg";
import marta from "../assets/marta.svg";
import ilha from "../assets/ilha.png";
import lancar21 from "../assets/lancar21.png";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-light p-5">
      <div className="d-flex flex-sm-row flex-column justify-content-around align-items-center mb-3">
            <img width="150px" className="center mt-2 mb-2" src={logo} alt="Art by Marta" />
            <img width="150px" className="center mt-2 mb-2" src={marta} alt="Art by Marta" />
            <img width="150px" className="center mt-2 mb-2" src={lancar21} alt="Art by Marta" />
            <img width="150px" className="center mt-2 mb-2" src={ilha} alt="Art by Marta" />
          </div>
        <div className="d-flex flex-sm-row flex-column justify-content-around align-items-center">
          <div>
            <h5 className="text-center container fs-6 mt-2 mb-2">@ 2024 Marta Inteligência Imobiliária - Av. Barbosa Lima, 149 - Sala 416 - Recife, PE, 50030-330 </h5>
          </div>
          <div>
            <a className="redes" target="_blank" href="https://www.instagram.com/smart.imobiliario/" rel="noreferrer"><i className="bi bi-instagram m-2 fs-1"></i></a>
            <a className="redes" target="_blank" href="https://www.linkedin.com/company/marta-inteligencia-imobiliaria/" rel="noreferrer"><i className="bi bi-linkedin m-2 fs-1"></i></a>
            <a className="redes" target="_blank" href="https://www.facebook.com/smartimobiliario/" rel="noreferrer"><i className="bi bi-facebook m-2 fs-1"></i></a>
          </div>
        </div>
        <p className="text-center fw-light container fs-7 mt-2 mb-2">Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM.
          <a target="_blank" className="text-light" href="https://deixacommarta.com.br/privacidade.php" rel="noreferrer"> Política de privacidade </a></p>
      </footer>
    </>
  )
}

export default Footer