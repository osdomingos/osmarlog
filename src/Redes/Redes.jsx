import insta from '../assets/instagram.png'
import linke from '../assets/linkedin.png'

export default function Redes() {
    return (
        <div id='redes'>
            <a href='https://www.linkedin.com/in/osmarlog-transporte-e-log%C3%ADstica-8b7002323/' target='_blank'><img src={linke}></img></a>
            <a href='https://www.instagram.com/osmarlogtransportes/' target='_blank'><img src={insta}></img></a>
        </div>
    )
}