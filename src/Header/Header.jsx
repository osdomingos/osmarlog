import img from '../assets/img1.jpeg'
import icon1 from '../assets/icon1.png'

const contato = '5547988205722'

export default function Header() {
    return (
        <header>
            <div className='header-flex-item'>
            <h1>Soluções</h1>
            <p>Com uma variedade de transportes, nossa empresa atende os diversos tipos de mercadorias, na modalidade frete dedicado - seja carga de lotação ou LCL - e também atendemos cargas de conteinerização (Importação/Exportação).</p>
            <br></br>
            <p>Venha conhecer nossos serviços e todos os mecanismos logísticos à disposição do seu negócio.</p>
            <br></br>
            <br></br>
            <a id='fale-conosco' href={`https://wa.me/${contato}`} target='_blank' rel='noopener noreferrer'><h3>fale conosco</h3></a>
            </div>
            <div className='header-flex-item'>
                <img src={img}></img>
            </div>
            <img id='icon1' src={icon1}></img>
        </header>
    )
}