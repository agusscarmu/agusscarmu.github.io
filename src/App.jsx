import Header from './components/Header'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Research from './components/Research'
import Courses from './components/Courses'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <TechStack />
      <Projects />
      <Research />
      <Courses />
      <Footer />
    </div>
  )
}

export default App
