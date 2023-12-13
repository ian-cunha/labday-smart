import logo from '../assets/logoSmart.svg'

function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img width="130px" className="d-inline-block align-text-top" src={logo} alt="Smart" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="text-light"><i className="bi bi-list"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll fw-semibold">
            </ul>
            <a className="btn store desktop" target="_blank" href="https://play.google.com/store/apps/details?id=br.com.youdigital.smartimobiliario" rel="noreferrer"><i className="bi bi-google-play"></i></a>
            <a className="btn store desktop m-2" target="_blank" href="https://apps.apple.com/br/app/smart-imobiliario/id1128234098" rel="noreferrer"><i className="bi bi-apple"></i></a>
            <a className="btn btn-blue fw-semibold m-2" target="_blank" href="https://app.smartimobiliario.com.br/" rel="noreferrer">Login <i className="bi bi-box-arrow-in-right"></i></a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar