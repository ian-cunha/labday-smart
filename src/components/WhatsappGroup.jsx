import qrcode from '../assets/qrcode.jpg'

function WhatsappGroup() {
  return (
    <div className="bg-dark text-light group d-flex justify-content-center align-items-center">
      <div className='p-3'>
        <img width='150px' src={qrcode} />
      </div>
      <div className='p-3'>
        <p className="fw-normal fs-5">Entre em nosso grupo e fique por dentro.</p>
        <a className="btn btn-orange" target="_blank" href="https://chat.whatsapp.com/BY18IWB0kYmHfMpu0EOf6N" rel="noreferrer">
          <i className="bi bi-whatsapp"></i> Clique aqui!</a>
      </div>
    </div>
  )
}

export default WhatsappGroup