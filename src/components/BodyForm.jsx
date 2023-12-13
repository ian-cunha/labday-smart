import qrcode from '../assets/qrcode.jpg'

import axios from 'axios';
import { useState } from 'react';

function BodyForm() {

  const [nome_contato, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setCreci] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      headers: { 'Content-Type': 'multipart/form-data' },
      url: 'https://app.smart.youdigital.com.br/atendimento/cadastrarContatosOnline',
      data: {
        nome_contato,
        email,
        telefone,
        url_origem: "https://www.smartimobiliario.com.br",
        id_empresa: 7341,
        tipo_origem: 3,
        id_outra_origem: 5,
        id_detalhe_outra_origem: 820,
        tipo_de_interesse: 0,
        idAcao: 0,
        mensagem: "Vim da LP do Smart LabDay"
      }
    })
      .then(function (response) {
        alert("Enviado, aguarde nosso contato!")
        console.log(response.data);
        console.log("Nome:", nome_contato, "/", "Email:", email, "Telefone:", telefone, "=", "Contato Enviado com sucesso!")
      });
  }

  return (
    <>
      <div className="d-flex flex-sm-row flex-column justify-content-center align-items-center baseForm">

        <div className="col-md-5">
          <form name="formContato" onSubmit={handleSubmit} className='p-5'>
            <h2 className='fs-1 mb-5'>Conecte-se conosco!</h2>
            <div className="mb-3">
              <label htmlFor="contatoNome" className="form-label">Nome completo</label>
              <input onChange={(e) => setNome(e.target.value)} type="text" className="form-control" name="nome_contato" id="contatoNome" required placeholder="Nome" />
            </div>
            <div className="mb-3">
              <label htmlFor="contatoEmail" className="form-label">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" name="email" id="contatoEmail" required placeholder="E-mail" />
            </div>
            <div className="mb-3">
              <label htmlFor="contatoCreci" className="form-label">CRECI</label>
              <input onChange={(e) => setCreci(e.target.value)} type="text" className="form-control" name="creci" id="contatoCreci" required placeholder="Creci" />
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