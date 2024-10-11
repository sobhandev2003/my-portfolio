
// import './App.css'
import { Link } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skill from './components/Skill'
import { email } from './assets/data'
import gmailLogo from './assets/gmail.webp'
import linkeDinLogo from './assets/linkeDin.webp'
import wpLogo from './assets/whatsapp.png'

function App() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section className='main-body'>
        <Home />
        <div className='fixed left-4 bottom-6 z-10'>
          <ul className=' flex flex-col gap-2  '>
            <li className="linkedin"><Link to={`mailto:${email}`} target='_blank'><img src={gmailLogo} alt="Gmail" className='w-11 h-11' /></Link></li>
            <li className="linkedin"><Link to={`https://wa.me/918649863002`} target='_blank'><img src={wpLogo} alt="WhatsApp" className='w-10 h-10' /></Link></li>
            <li className="linkedin"><Link to={'https://www.linkedin.com/in/sobhandev-pramanik-818464226/'} target='_blank'><img src={linkeDinLogo} alt="Gmail" className='w-11 h-11' /></Link></li>
          </ul>
        </div>
        <About />
        <Skill />
        <Projects />
        <Education />
        <div className='fixed bottom-0 right-[1%]'>
          <Contact />
        </div>
        <Footer />
      </section>
      {/* <MagicCardGradient/> */}
    </>
  )
}

export default App