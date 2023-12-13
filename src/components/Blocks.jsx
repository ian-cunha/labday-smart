import site1 from '../assets/site1.png'
import gif2 from '../assets/gifsite.gif'
import gif3 from '../assets/gifsite2.gif'

function Blocks() {
  return (
    <>
      <div className="d-flex flex-sm-row flex-column justify-content-center align-items-center base2">
        <div className='text2 p-5'>
          <h2 className='fw-bold fs-2 pb-4'>
            Acesso a todas as construtoras e empreendimentos do mercado.
          </h2>
          <p className='textStyle1'>Imagine ter o poder de explorar o mercado imobiliário de maneira intuitiva, eficiente e personalizada. Com o nosso sistema de visualização de imóveis através de mapa, essa visão se torna realidade.</p>
          <p className='textStyle1'>Acesse a todas as informações e todas as construtoras do mercado, atualizadas em tempo real pela equipe do Smart.</p>
          <a className='btn btn-orange mt-3' target="_blank" href="https://chat.whatsapp.com/BY18IWB0kYmHfMpu0EOf6N" rel="noreferrer">COMEÇAR AGORA</a>
        </div>
        <div className='p-5'>
          <img className='gifCriacao' src={site1} />
        </div>
      </div>

      <div className="d-flex flex-sm-row flex-column justify-content-center align-items-center base2">
        <div className='p-5'>
          <img className='gifCriacao' src={gif2} />
        </div>
        <div className='text2 p-5'>
          <h2 className='fw-bold fs-2 pb-4'>
            Criação rápida, Construa seu site em poucos minutos.
          </h2>
          <p className='textStyle1'><b>Escolha Entre Diversos Modelos: </b>Dentro do vasto leque de opções, oferecemos uma variedade de modelos cuidadosamente projetados para atender a diferentes necessidades e estilos.</p>
          <p className='textStyle1'><b>Personalize ao Seu Gosto: </b>Após selecionar o modelo que mais ressoa com a sua personalidade e objetivos, é hora de personalizar cada detalhe. Nossa plataforma intuitiva permite que você ajuste cores, fontes, imagens e estrutura.</p>
          <p className='textStyle1'><b>Visualize em Tempo Real: </b>A cada alteração realizada, visualize instantaneamente como seu site está tomando forma.</p>
          <a className='btn btn-orange mt-3' target="_blank" href="https://chat.whatsapp.com/BY18IWB0kYmHfMpu0EOf6N" rel="noreferrer">COMEÇAR AGORA</a>
        </div>
      </div>

      <div className="d-flex flex-sm-row flex-column justify-content-center align-items-center base2">
        <div className='text2 p-5'>
          <h2 className='fw-bold fs-2 pb-4'>
            Publique todos os empreendimentos em seu site com apenas um clique.
          </h2>
          <p className='textStyle1'>Facilidade de seguir um empreeendimento, publicar no site com todas as informações atualizadas pela equipe do Smart.</p>
          <p className='textStyle1'>Leads do site direto no sistema para atendimento mais rápido e alta conversão.</p>
          <a className='btn btn-orange mt-3' target="_blank" href="https://chat.whatsapp.com/BY18IWB0kYmHfMpu0EOf6N" rel="noreferrer">COMEÇAR AGORA</a>
        </div>
        <div className='p-5'>
          <img className='gifCriacao' src={gif3} />
        </div>
      </div>
    </>
  );
}

export default Blocks