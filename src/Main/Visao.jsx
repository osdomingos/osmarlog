import img from '../assets/img3.jpg'

export default function Visao() {
    return (
        <div id='visao'>
            <div>
                <h1>Visão</h1>
                <p>
                Na OSMARLOG, nossa visão é ser <strong>referência</strong> na cadeia logística, oferecendo <span className='enfase'>soluções tecnológicas e sustentáveis</span> que possibilitam à <span className='enfase'>melhor experiência</span> para nossos clientes. <br></br>Planejamos construir um futuro onde o trabalho e a <span className='enfase'>responsabilidade social e ambiental</span> caminhem lado a lado, criando um <span className='enfase'>impacto positivo</span> no desenvolvimento nacional.
                </p>
            </div>
            <div className='imagem'>
                <img src={img}></img>
            </div>
        </div>
    )
}