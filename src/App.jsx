import './App.css'
import Nav from './Nav/Nav'
import Header from './Header/Header'
import Main from './Main/Main'
import Redes from './Redes/Redes'
import Footer from './Footer/Footer'

function App() {
  return(
    <>
    <div id='hero'>
      <Nav />
      <Header />
      <Redes />
    </div>
    <div id='corpo'>
      <Main />
    </div>
    <div id='footer'>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App;
