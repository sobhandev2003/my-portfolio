
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <section>
      <Navbar/>
      </section>
      <section className='main-body'>
      <Home/>
      </section>

      
    </>
  )
}

export default App