import Navigation from './components/Navigation'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
