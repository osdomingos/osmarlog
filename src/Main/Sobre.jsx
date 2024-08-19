import img from '../assets/img2.jpg'

export default function Sobre() {
    return (
        <>
        <div id='sobre'>
            <div className="imagem"><img id="imagem-sobre" src={img}></img></div>
            <div className="texto">
                <h1>Sobre</h1>
                <p>Nossa empresa foi fundada na cidade portuária de Itajaí/SC - e nasceu de uma visão que o transporte de mercadorias pode ter um diferencial: Uma visão humana, voltada para responsabilidade social e ambiental.  Nosso constante crescimento é baseado no desenvolvimento tecnológico e na eficiência de nossa operação, formando parcerias de larga escala no cenário nacional.</p>
                <p>Na OSMARLOG, acreditamos que a chave para o sucesso está em transportar mais do que cargas – transportamos confiança.</p>
                <br></br>

            </div>
        </div>
        <div id='objetivos'>
            <div>
                <h2 id='objetivos-titulo'>Objetivos</h2>
                
            </div>
            <div id='objetivos-itens'>
                <ul>
                    <li><span id='checkmark'>&#10003;</span> <strong className='enfase'>Resiliência Operacional:</strong> Comprometemo-nos a fornecer serviços de transporte com a máxima eficiência e segurança, tendo a flexibilidade operacional como ponto principal.</li>
                    <li><span id='checkmark'>&#10003;</span> <strong className='enfase'>Sustentabilidade:</strong> Implementar práticas de transporte ecológicas e sustentáveis, reduzindo à poluição e promovendo a responsabilidade ambiental em todas as nossas operações.</li>
                    <li><span id='checkmark'>&#10003;</span> <strong className='enfase'>Inovação:</strong> Investir continuamente em tecnologia e inovação para aprimorar nossos serviços, proporcionando soluções logísticas inteligentes que atendam às necessidades dinâmicas dos nossos clientes.</li>
                    <li><span id='checkmark'>&#10003;</span> <strong className='enfase'>Satisfação do Cliente:</strong> Manter um foco constante no cliente, oferecendo um atendimento personalizado e construindo parcerias de longo prazo baseadas na confiança e na transparência.</li>
                    <li><span id='checkmark'>&#10003;</span> <strong className='enfase'>Desenvolvimento de Talentos:</strong> Valorizar e investir no desenvolvimento dos nossos colaboradores, promovendo um ambiente de trabalho inclusivo, motivador e seguro, onde todos possam crescer profissionalmente.</li>
                    <li><span id='checkmark'>&#10003;</span> <strong className='enfase'>Responsabilidade Social:</strong> Contribuir para o desenvolvimento das comunidades onde atuamos, apoiando iniciativas sociais e promovendo o bem-estar coletivo.</li>
                </ul>
            </div>
        

        </div>
        </>
    )
}