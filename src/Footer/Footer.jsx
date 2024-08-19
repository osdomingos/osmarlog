const contato = '5547988205722'

export default function Footer() {
    return (
        <>
        <div id='contatos'>
            <h1>Contatos</h1>
            <p>Entre em contato conosco, nosso time está pronto para lhe atender!</p>
            <br></br>
            <h3>Endereço</h3>
            <p>Rua José Francisco Constantino, nº 127, Centro</p>
            <p>Itajaí/Santa Catarina</p>
            <p>CEP 88304047</p>
            <br></br>
            <h3>E-mail</h3>
            <p>comercial@osmarlog.com.br</p>
            <br></br>
            <h3>Telefone</h3>
            <p>(47) 9 8820-5722</p>
            <a className='enfase' href={`https://wa.me/${contato}`} target='_blank' rel='noopener noreferrer'><p>fale conosco</p></a>
            <br></br>
            <h3>Nossas redes</h3>
            <a className="enfase" href='https://www.linkedin.com/in/osmarlog-transporte-e-log%C3%ADstica-8b7002323/' target='_blank'>Linkedin</a>
            <br></br>
            <a className="enfase" href='https://www.instagram.com/osmarlogtransportes/' target='_blank'>Instagram</a>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h5>Osmarlog - Todos os direitos reservados ® 2024</h5>
        </div>
        </>
    )
}