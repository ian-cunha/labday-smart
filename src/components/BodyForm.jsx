import qrcode from '../assets/qrcode.jpg'

function BodyForm() {
  return (
    <>
      <div className="d-flex flex-sm-row flex-column justify-content-center align-items-center baseForm">

        <div className="col-md-5">
          <form className='p-5'>
            <h2 className='fs-1 mb-5'>Conecte-se conosco!</h2>
            <div className="mb-3">
              <label htmlFor="nameForm" className="form-label">Nome completo</label>
              <input type="name" className="form-control" id="nameForm" aria-describedby="nomeCompleto" />
            </div>
            <div className="mb-3">
              <label htmlFor="emailForm" className="form-label">Email</label>
              <input type="email" className="form-control" id="emailForm" aria-describedby="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="creciForm" className="form-label">CRECI</label>
              <input type="email" className="form-control" id="creciForm" aria-describedby="creci" />
            </div>
            <button type="submit" className="btn btn-orange w-100 p-3 fw-bold">Enviar</button>
          </form>
        </div>

        <div className='col-md-5'>
          <img className='imgSmartphone' src={qrcode} />
          <p>Entre em nosso grupo e fique por dentro.</p>
        </div>

      </div>
    </>
  )
}

export default BodyForm