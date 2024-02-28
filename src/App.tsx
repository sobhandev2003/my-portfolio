
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skill from './components/Skill'

function App() {
  return (
    <>
      <section>
      <Navbar/>
      </section>
      <section className='main-body'>
      <Home/>
      <About/>
      <Skill/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
      </section>
   
      
    </>
  )
}

export default App