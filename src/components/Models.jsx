import modelo1 from '../assets/modelos/big-ben.png'
import modelo2 from '../assets/modelos/cristo-redentor.png'
import modelo3 from '../assets/modelos/golden-gate.png'
import modelo4 from '../assets/modelos/oficina-brennand.png'
import modelo5 from '../assets/modelos/torre-eiffel.png'
import modelo6 from '../assets/modelos/coliseu.png'

function Models() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center base3">
        <div className='p-5'>
          <h2 className='fw-semibold fs-1 pb-4'>
            Modelos 100% personalizáveis
          </h2>
          <p className='textStyle1'>⁠Vários modelos para você ter o site com a sua personalidade, feitos especialmente para atender suas necessidades.</p>
        </div>
        <div className="row justify-content-center p-2">
          <div className="col-sm-4">
            <img width='300px' src={modelo1} />
          </div>
          <div className="col-sm-4">
            <img width='300px' src={modelo2} />
          </div>
          <div className="col-sm-4">
            <img width='300px' src={modelo3} />
          </div>
        </div>
        <div className="row justify-content-center p-2">
          <div className="col-sm-4">
            <img width='300px' src={modelo4} />
          </div>
          <div className="col-sm-4">
            <img width='300px' src={modelo5} />
          </div>
          <div className="col-sm-4">
            <img width='300px' src={modelo6} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Models